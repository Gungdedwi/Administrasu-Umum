// =====================================================
// ADMIN QUEST — XP & Level System
// =====================================================

import type { Level } from '../../types';

export const LEVELS: Level[] = [
  { level: 1, title: 'Office Rookie',              minXP: 0,     maxXP: 399,   color: '#94a3b8' },
  { level: 2, title: 'Document Handler',           minXP: 400,   maxXP: 999,   color: '#60a5fa' },
  { level: 3, title: 'Correspondence Specialist',  minXP: 1000,  maxXP: 1999,  color: '#a78bfa' },
  { level: 4, title: 'Archive Master',             minXP: 2000,  maxXP: 3499,  color: '#f59e0b' },
  { level: 5, title: 'Business Administrator',     minXP: 3500,  maxXP: 5999,  color: '#f97316' },
  { level: 6, title: 'Organization Strategist',    minXP: 6000,  maxXP: 9999,  color: '#ec4899' },
  { level: 7, title: 'Administration Master',      minXP: 10000, maxXP: 99999, color: '#eab308' },
];

export function getLevelInfo(xp: number): Level {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) return LEVELS[i];
  }
  return LEVELS[0];
}

export function getNextLevelXP(xp: number): number {
  const current = getLevelInfo(xp);
  return current.maxXP + 1;
}

export function calculateXpForAnswer(difficulty: string, streak: number): number {
  let base = 100;
  if (difficulty === 'medium') base = 150;
  if (difficulty === 'hard' || difficulty === 'hots') base = 200;

  const streakBonus = Math.min(streak * 20, 100);
  return base + streakBonus;
}
