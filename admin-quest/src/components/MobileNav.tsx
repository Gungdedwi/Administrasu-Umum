// =====================================================
// ADMIN QUEST — Mobile Bottom Navigation Bar
// Optimized for smartphone display in classroom
// =====================================================

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { soundFX } from '../utils/audio';

interface MobileNavProps {
  isTeacher: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isTeacher }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Beranda', icon: '🏠' },
    { path: '/materi', label: 'Materi', icon: '📚' },
    { path: '/leaderboard', label: 'Peringkat', icon: '🏆' },
    { path: '/achievements', label: 'Prestasi', icon: '🎖️' },
  ];

  if (isTeacher) {
    navItems.push({ path: '/teacher', label: 'Guru', icon: '👨‍🏫' });
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 px-2 py-2">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => soundFX.playClick()}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive 
                  ? 'text-amber-400 bg-amber-500/10 font-bold scale-105' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
