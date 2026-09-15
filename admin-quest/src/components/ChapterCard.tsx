// =====================================================
// ADMIN QUEST — Interactive Chapter Card Component
// =====================================================

import React from 'react';
import { Link } from 'react-router-dom';
import type { ChapterInfo, StudentProgress } from '../types';
import { soundFX } from '../utils/audio';

interface ChapterCardProps {
  chapter: ChapterInfo;
  progress: StudentProgress | undefined;
  userXp: number;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({
  chapter,
  progress,
  userXp,
}) => {
  const isLocked = userXp < chapter.minXpToUnlock;
  const isCompleted = progress?.isCompleted || false;
  const highScore = progress?.highScore || 0;
  const stars = progress?.starsEarned || 0;

  return (
    <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
      isLocked
        ? 'bg-slate-900/60 border-slate-800 opacity-70'
        : isCompleted
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950/40 border-emerald-500/40 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10'
        : 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1'
    }`}>
      
      {/* Top Banner Gradient */}
      <div className={`h-2.5 w-full bg-gradient-to-r ${chapter.color}`} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
              isLocked ? 'bg-slate-800 text-slate-500' : 'bg-slate-800/90'
            }`}>
              {isLocked ? '🔒' : chapter.icon}
            </div>
            <div>
              <div className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                BAB {chapter.id}
              </div>
              <h3 className="font-bold text-lg text-slate-100 leading-snug">
                {chapter.title}
              </h3>
            </div>
          </div>

          {/* Completion Badge or Lock XP Requirements */}
          <div>
            {isLocked ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                ⭐ {chapter.minXpToUnlock} XP
              </span>
            ) : isCompleted ? (
              <div className="flex items-center gap-0.5 text-amber-400 text-sm">
                {'★'.repeat(stars)}
                {'☆'.repeat(3 - stars)}
              </div>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Terbuka
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
          {chapter.description}
        </p>

        {/* Progress & Stats */}
        {!isLocked && (
          <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50 mb-4">
            <div>
              <span className="text-slate-500">Soal:</span>{' '}
              <span className="font-bold text-slate-200">{chapter.totalQuestions} soal</span>
            </div>
            <div>
              <span className="text-slate-500">Skor Terbaik:</span>{' '}
              <span className="font-bold text-amber-400">{highScore} pts</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/materi/${chapter.id}`}
            onClick={() => soundFX.playClick()}
            className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-center transition-all bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-1.5"
          >
            <span>📖</span>
            <span>Baca Ringkasan</span>
          </Link>

          {isLocked ? (
            <button
              disabled
              className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-center bg-slate-800/50 text-slate-500 cursor-not-allowed border border-slate-800"
            >
              🔒 Butuh {chapter.minXpToUnlock} XP
            </button>
          ) : (
            <Link
              to={`/quiz/${chapter.id}`}
              onClick={() => soundFX.playClick()}
              className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-center transition-all bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-md shadow-indigo-500/20 flex items-center justify-center gap-1.5"
            >
              <span>⚡</span>
              <span>Mulai Quest</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
