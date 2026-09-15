// =====================================================
// ADMIN QUEST — Gamified Interactive Quiz Engine
// =====================================================

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Question, QuizResult, User } from '../types';
import { CHAPTERS, getRandomQuestions } from '../data/questions';
import { soundFX } from '../utils/audio';
import { calculateXpForAnswer } from '../features/xp/xpSystem';
import { storageService } from '../services/storage';

interface QuizEngineProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ user, onUpdateUser }) => {
  const { chapterIdStr } = useParams<{ chapterIdStr: string }>();
  const chapterId = parseInt(chapterIdStr || '1', 10);
  const navigate = useNavigate();

  const chapterInfo = CHAPTERS.find((c) => c.id === chapterId) || CHAPTERS[0];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [earnedXp, setEarnedXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ question: Question; selected: string; isCorrect: boolean }[]>([]);
  
  // Timer interval ref
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize quiz questions
  useEffect(() => {
    const qList = getRandomQuestions(chapterId, 10);
    setQuestions(qList);
    setCurrentIndex(0);
    setScore(0);
    setEarnedXp(0);
    setStreak(0);
    setMaxStreak(0);
    setQuizFinished(false);
    setUserAnswers([]);
  }, [chapterId]);

  // Handle countdown timer per question
  useEffect(() => {
    if (!isTimerActive || isSubmitted || quizFinished || questions.length === 0) return;

    setTimeLeft(30);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isSubmitted, quizFinished, questions]);

  const handleTimeOut = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    soundFX.playWrong();
    setStreak(0);
    const currentQ = questions[currentIndex];
    setUserAnswers((prev) => [...prev, { question: currentQ, selected: 'Waktu Habis', isCorrect: false }]);
  };

  const handleOptionSelect = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (isSubmitted || !selectedOption) return;
    
    if (timerRef.current) clearInterval(timerRef.current);

    const currentQ = questions[currentIndex];
    const isCorrect = selectedOption === currentQ.answer;

    setIsSubmitted(true);

    let newStreak = streak;
    if (isCorrect) {
      soundFX.playCorrect();
      newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      if (newStreak >= 3) soundFX.playCombo();

      const xpGained = calculateXpForAnswer(currentQ.difficulty, newStreak);
      setEarnedXp((prev) => prev + xpGained);
      setScore((prev) => prev + 10);
    } else {
      soundFX.playWrong();
      setStreak(0);
    }

    setUserAnswers((prev) => [...prev, { question: currentQ, selected: selectedOption, isCorrect }]);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsTimerActive(true);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    setIsTimerActive(false);

    const percentage = Math.round((score / (questions.length * 10)) * 100);
    let stars = 1;
    if (percentage >= 80) stars = 3;
    else if (percentage >= 60) stars = 2;

    const quizResult: QuizResult = {
      chapterId,
      score,
      maxScore: questions.length * 10,
      xpEarned: earnedXp,
      correctCount: userAnswers.filter((a) => a.isCorrect).length,
      totalQuestions: questions.length,
      starsEarned: stars,
      completedAt: new Date().toISOString(),
    };

    // Save student progress to storage
    const updatedUser = storageService.saveQuizResult(user.id, quizResult);

    if (percentage >= 60) {
      soundFX.playLevelUp();
    }

    if (updatedUser) {
      onUpdateUser(updatedUser);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400" />
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      
      {/* Quiz Finished Result Screen */}
      {quizFinished ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center shadow-2xl animate-fade-in">
          
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-4xl shadow-lg shadow-indigo-500/20">
            {score >= 80 ? '🎉' : score >= 60 ? '👍' : '💪'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-1">
            Quest Bab {chapterId} Selesai!
          </h2>
          <p className="text-slate-400 text-sm mb-6">{chapterInfo.title}</p>

          {/* Stars */}
          <div className="flex justify-center gap-2 text-4xl mb-6">
            <span className={score >= 60 ? 'text-amber-400 animate-bounce' : 'text-slate-700'}>★</span>
            <span className={score >= 80 ? 'text-amber-400 animate-bounce delay-100' : 'text-slate-700'}>★</span>
            <span className={score >= 100 ? 'text-amber-400 animate-bounce delay-200' : 'text-slate-700'}>★</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-6">
            <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
              <div className="text-xs text-slate-400">Total Skor</div>
              <div className="text-xl font-extrabold text-amber-400">{score} pts</div>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
              <div className="text-xs text-slate-400">+ XP Diperoleh</div>
              <div className="text-xl font-extrabold text-indigo-400">+{earnedXp} XP</div>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
              <div className="text-xs text-slate-400">Combo Maks</div>
              <div className="text-xl font-extrabold text-emerald-400">{maxStreak}x 🔥</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                soundFX.playClick();
                setQuizFinished(false);
                setQuestions(getRandomQuestions(chapterId, 10));
                setCurrentIndex(0);
                setScore(0);
                setEarnedXp(0);
                setStreak(0);
                setUserAnswers([]);
              }}
              className="py-3 px-6 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              🔄 Coba Ulang Quest
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                navigate('/');
              }}
              className="py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-lg transition-all"
            >
              🏠 Kembali ke Dashboard
            </button>
          </div>
        </div>
      ) : (
        /* Active Quiz Screen */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl">
          
          {/* Header Bar (Progress, Timer, Streak) */}
          <div className="flex items-center justify-between gap-4 mb-6">
            
            {/* Question Counter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                BAB {chapterId}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-bold text-slate-300">
                Soal {currentIndex + 1}/{questions.length}
              </span>
            </div>

            {/* Streak Counter */}
            {streak > 1 && (
              <div className="animate-pulse bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                <span>🔥</span>
                <span>{streak}x COMBO!</span>
              </div>
            )}

            {/* Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
              timeLeft <= 5 
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/50 animate-bounce' 
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}>
              <span>⏱️</span>
              <span>{timeLeft}s</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-6">
            <div 
              className="bg-gradient-to-r from-amber-500 to-indigo-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 bg-slate-800 text-indigo-300 border border-indigo-500/30">
              Tingkat: {currentQ.difficulty === 'easy' ? 'Mudah' : currentQ.difficulty === 'medium' ? 'Sedang' : 'Tinggi (HOTS)'}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, idx) => {
              let optionStyle = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-800';

              if (isSubmitted) {
                if (opt === currentQ.answer) {
                  optionStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                } else if (opt === selectedOption && opt !== currentQ.answer) {
                  optionStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold';
                } else {
                  optionStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
                }
              } else if (selectedOption === opt) {
                optionStyle = 'bg-indigo-600/30 border-indigo-500 text-indigo-200 font-bold shadow-md shadow-indigo-500/10';
              }

              return (
                <button
                  key={idx}
                  onClick={() => {
                    soundFX.playClick();
                    handleOptionSelect(opt);
                  }}
                  disabled={isSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3 ${optionStyle}`}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <div className="text-sm leading-relaxed">{opt}</div>
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible after submit) */}
          {isSubmitted && (
            <div className="mb-6 p-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-sm animate-fade-in">
              <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                <span>💡 Penjelasan Buku:</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action Button */}
          <div>
            {!isSubmitted ? (
              <button
                onClick={() => handleSubmitAnswer()}
                disabled={!selectedOption}
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg ${
                  selectedOption
                    ? 'bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-indigo-500/20'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                Jawab Sekarang 🚀
              </button>
            ) : (
              <button
                onClick={() => {
                  soundFX.playClick();
                  handleNextQuestion();
                }}
                className="w-full py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Soal Berikutnya</span>
                <span>➡️</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
