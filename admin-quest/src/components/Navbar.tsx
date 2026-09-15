// =====================================================
// ADMIN QUEST — Responsive Header Component
// =====================================================

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { User } from '../types';
import { soundFX } from '../utils/audio';

interface NavbarProps {
  user: User;
  onRequestTeacherAccess: () => void;
  onLogout: () => void;
  onSoundToggle: () => void;
  soundEnabled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onRequestTeacherAccess,
  onLogout,
  onSoundToggle,
  soundEnabled,
}) => {
  const location = useLocation();

  const xpPercentage = Math.min(100, Math.round((user.xp / user.nextLevelXp) * 100));

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => soundFX.playClick()}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform text-white">
              AQ
            </div>
            <div className="hidden sm:block">
              <div className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-amber-400 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                ADMIN QUEST
              </div>
              <div className="text-[10px] text-slate-400 -mt-1 font-medium tracking-wide">
                Kelas X SMK Perhotelan
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              onClick={() => soundFX.playClick()}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                location.pathname === '/' 
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              🏠 Dashboard
            </Link>
            <Link
              to="/materi"
              onClick={() => soundFX.playClick()}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                location.pathname.startsWith('/materi') 
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              📚 Materi Ringkas
            </Link>
            <Link
              to="/leaderboard"
              onClick={() => soundFX.playClick()}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                location.pathname === '/leaderboard' 
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              🏆 Peringkat
            </Link>
            <Link
              to="/achievements"
              onClick={() => soundFX.playClick()}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                location.pathname === '/achievements' 
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              🎖️ Prestasi
            </Link>

            {/* Teacher Panel Access */}
            {user.role === 'teacher' ? (
              <Link
                to="/teacher"
                onClick={() => soundFX.playClick()}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                  location.pathname === '/teacher' 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                    : 'text-amber-400 hover:bg-slate-800'
                }`}
              >
                👨‍🏫 Panel Guru
              </Link>
            ) : (
              <button
                onClick={() => {
                  soundFX.playClick();
                  onRequestTeacherAccess();
                }}
                className="px-3 py-2 rounded-xl text-xs font-bold text-amber-400 hover:bg-amber-500/10 border border-amber-500/20 transition-all flex items-center gap-1"
              >
                <span>🔒 Panel Guru</span>
              </button>
            )}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            
            {/* XP & Level Badge (Only for Students) */}
            {user.role === 'student' && (
              <div className="hidden lg:flex items-center gap-3 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <span>⭐</span>
                  <span>Lv.{user.level}</span>
                  <span className="text-slate-400 font-normal">({user.levelTitle})</span>
                </div>
                <div className="w-16 bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-indigo-500 h-full transition-all duration-500"
                    style={{ width: `${xpPercentage}%` }}
                  />
                </div>
                <div className="text-[11px] font-bold text-slate-300">
                  {user.xp} XP
                </div>
              </div>
            )}

            {/* Sound FX Toggle */}
            <button
              onClick={() => {
                onSoundToggle();
                soundFX.playClick();
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-all"
              title={soundEnabled ? 'Matikan Suara' : 'Aktifkan Suara'}
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>

            {/* User Profile & Logout Button */}
            <div className="flex items-center gap-2 bg-slate-800/90 px-2.5 py-1 rounded-xl border border-slate-700">
              <div className="text-left hidden sm:block">
                <div className="text-xs font-bold text-slate-100 truncate max-w-[120px]">
                  {user.name}
                </div>
                <div className="text-[10px] text-amber-400 font-medium">
                  {user.role === 'teacher' ? '👨‍🏫 Guru' : `🎒 ${user.className}`}
                </div>
              </div>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onLogout();
                }}
                className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition-all flex items-center gap-1"
                title="Keluar / Ganti Akun"
              >
                <span>🚪</span>
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
