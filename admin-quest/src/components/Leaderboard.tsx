// =====================================================
// ADMIN QUEST — Student Leaderboard Component
// =====================================================

import React, { useState } from 'react';
import type { User } from '../types';
import { soundFX } from '../utils/audio';

interface LeaderboardProps {
  students: User[];
  currentUserId: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ students, currentUserId }) => {
  const [selectedClass, setSelectedClass] = useState<string>('all');

  const classes = Array.from(new Set(students.map((s) => s.className)));

  const filteredStudents = students
    .filter((s) => selectedClass === 'all' || s.className === selectedClass)
    .sort((a, b) => b.xp - a.xp);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
          <span>🏆</span>
          <span>Papan Kehormatan Siswa</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
          Peringkat XP Administrasi Dasar
        </h1>
        <p className="text-slate-400 text-xs max-w-md mx-auto">
          Tunjukkan prestasimu! Selesaikan quest bab untuk mengumpulkan XP dan memperebutkan mahkota puncak kelas.
        </p>
      </div>

      {/* Class Filter */}
      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => {
            soundFX.playClick();
            setSelectedClass('all');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedClass === 'all'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Semua Kelas ({students.length})
        </button>

        {classes.map((c) => (
          <button
            key={c}
            onClick={() => {
              soundFX.playClick();
              setSelectedClass(c);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedClass === c
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      {filteredStudents.length >= 3 && (
        <div className="grid grid-cols-3 gap-3 pt-4 items-end max-w-lg mx-auto">
          
          {/* Rank 2 */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 text-center space-y-2 order-1 shadow-lg">
            <div className="w-10 h-10 mx-auto rounded-full bg-slate-300 text-slate-950 font-extrabold text-sm flex items-center justify-center border-2 border-slate-200 shadow-md">
              🥈
            </div>
            <div className="font-bold text-xs text-slate-200 truncate">{filteredStudents[1].name}</div>
            <div className="text-[10px] text-slate-400">{filteredStudents[1].className}</div>
            <div className="text-xs font-extrabold text-slate-300">{filteredStudents[1].xp} XP</div>
          </div>

          {/* Rank 1 */}
          <div className="bg-gradient-to-b from-amber-950/80 to-slate-900 border-2 border-amber-500 rounded-2xl p-5 text-center space-y-2 order-2 -translate-y-3 shadow-2xl">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-400 text-slate-950 font-extrabold text-lg flex items-center justify-center border-2 border-amber-200 shadow-lg animate-bounce">
              👑
            </div>
            <div className="font-extrabold text-sm text-amber-300 truncate">{filteredStudents[0].name}</div>
            <div className="text-[10px] text-amber-200/80">{filteredStudents[0].className}</div>
            <div className="text-sm font-extrabold text-amber-400">{filteredStudents[0].xp} XP</div>
          </div>

          {/* Rank 3 */}
          <div className="bg-slate-900 border border-amber-800/60 rounded-2xl p-4 text-center space-y-2 order-3 shadow-lg">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-700 text-slate-100 font-extrabold text-sm flex items-center justify-center border-2 border-amber-600 shadow-md">
              🥉
            </div>
            <div className="font-bold text-xs text-slate-200 truncate">{filteredStudents[2].name}</div>
            <div className="text-[10px] text-slate-400">{filteredStudents[2].className}</div>
            <div className="text-xs font-extrabold text-amber-600">{filteredStudents[2].xp} XP</div>
          </div>
        </div>
      )}

      {/* Leaderboard Table List */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="divide-y divide-slate-800">
          {filteredStudents.map((st, idx) => {
            const isSelf = st.id === currentUserId;
            return (
              <div
                key={st.id}
                className={`p-4 flex items-center justify-between gap-4 transition-colors ${
                  isSelf ? 'bg-indigo-600/20 border-l-4 border-indigo-500' : 'hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                    idx === 0
                      ? 'bg-amber-400 text-slate-950'
                      : idx === 1
                      ? 'bg-slate-300 text-slate-950'
                      : idx === 2
                      ? 'bg-amber-700 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {idx + 1}
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-100 flex items-center gap-2">
                      <span>{st.name}</span>
                      {isSelf && (
                        <span className="text-[10px] bg-indigo-500 text-white font-extrabold px-2 py-0.5 rounded-full">
                          Kamu
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400">
                      {st.className} • Lv.{st.level} ({st.levelTitle})
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-extrabold text-sm text-amber-400">{st.xp} XP</div>
                  <div className="text-[10px] text-slate-500">
                    {st.progress?.filter((p) => p.isCompleted).length || 0} Bab Selesai
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
