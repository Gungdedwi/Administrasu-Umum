// =====================================================
// ADMIN QUEST — Achievements & Badges View
// =====================================================

import React from 'react';
import type { User } from '../types';
import { ACHIEVEMENTS } from '../features/achievement/achievements';

interface AchievementsViewProps {
  user: User;
}

export const AchievementsView: React.FC<AchievementsViewProps> = ({ user }) => {
  const userUnlockedIds = user.achievements || [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold">
          <span>🎖️</span>
          <span>Koleksi Pencapaian & Lencana</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
          Prestasi Administrasi Quest
        </h1>
        <p className="text-slate-400 text-xs max-w-md mx-auto">
          Terbuka {userUnlockedIds.length} dari {ACHIEVEMENTS.length} Prestasi Spesial
        </p>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((ach) => {
          const isUnlocked = userUnlockedIds.includes(ach.id);
          return (
            <div
              key={ach.id}
              className={`p-5 rounded-3xl border transition-all ${
                isUnlocked
                  ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950/60 border-amber-500/40 shadow-xl'
                  : 'bg-slate-900/40 border-slate-800/80 opacity-60'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${
                  isUnlocked ? 'bg-amber-500/20 border border-amber-500/40 shadow-inner' : 'bg-slate-800 text-slate-600'
                }`}>
                  {isUnlocked ? ach.icon : '🔒'}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-slate-100">{ach.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
                  
                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      +{ach.xpReward} XP
                    </span>
                    {isUnlocked && (
                      <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                        <span>✓</span>
                        <span>Terbuka</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
