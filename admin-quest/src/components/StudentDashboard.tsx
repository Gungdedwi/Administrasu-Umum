// =====================================================
// ADMIN QUEST — Student Dashboard View
// =====================================================

import React from 'react';
import type { StudentProgress, User } from '../types';
import { CHAPTERS } from '../data/questions';
import { ChapterCard } from './ChapterCard';
import { soundFX } from '../utils/audio';
import { Link } from 'react-router-dom';

interface StudentDashboardProps {
  user: User;
  progressList: StudentProgress[];
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  user,
  progressList,
}) => {
  const completedChaptersCount = progressList.filter((p) => p.isCompleted).length;
  const xpPercentage = Math.min(100, Math.round((user.xp / user.nextLevelXp) * 100));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Hero Card Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-20 -top-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <span>👑</span>
              <span>Selamat Datang, {user.name}!</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              ADMIN QUEST — Administrasi Dasar
            </h1>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              Kuasai 6 Bab Administrasi Perhotelan & Jasa Pariwisata (Kelas X SMK) lewat tantangan interaktif berhadiah XP & Gelar Peringkat!
            </p>
          </div>

          {/* Student Status Card */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 shrink-0 w-full md:w-auto min-w-[260px] space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-400">LEVEL SISWA</div>
              <div className="text-xs font-extrabold text-amber-400">Lv. {user.level}</div>
            </div>
            <div className="font-extrabold text-lg text-slate-100 flex items-center gap-2">
              <span>🏅</span>
              <span>{user.levelTitle}</span>
            </div>

            {/* XP Progress */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>XP Saat Ini</span>
                <span>{user.xp} / {user.nextLevelXp} XP</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-indigo-500 h-full transition-all duration-500"
                  style={{ width: `${xpPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl font-bold">
            ⭐
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Total XP</div>
            <div className="text-lg font-extrabold text-slate-100">{user.xp}</div>
          </div>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl font-bold">
            ✅
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Bab Selesai</div>
            <div className="text-lg font-extrabold text-slate-100">{completedChaptersCount} / 6</div>
          </div>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xl font-bold">
            🎯
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Kelas</div>
            <div className="text-lg font-extrabold text-slate-100">{user.className}</div>
          </div>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl font-bold">
            🎖️
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Piala Unlocked</div>
            <div className="text-lg font-extrabold text-slate-100">{user.achievements?.length || 0}</div>
          </div>
        </div>
      </div>

      {/* Chapters Grid Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-100 tracking-tight">
              Peta Petualangan Belajar (Modul Semester Ganjil)
            </h2>
            <p className="text-xs text-slate-400">
              Pilih bab untuk membaca ringkasan materi atau langsung menjawab tantangan quest.
            </p>
          </div>
          <Link
            to="/materi"
            onClick={() => soundFX.playClick()}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>Semua Ringkasan</span>
            <span>→</span>
          </Link>
        </div>

        {/* Chapter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((chapter) => {
            const prog = progressList.find((p) => p.chapterId === chapter.id);
            return (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                progress={prog}
                userXp={user.xp}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
