// =====================================================
// ADMIN QUEST — Achievement Definitions
// =====================================================

import type { Achievement } from '../../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_step',
    title: 'First Step',
    description: 'Menyelesaikan Bab 1 — Ruang Lingkup Administrasi',
    icon: '🏅',
    condition: 'complete_chapter_1',
    xpReward: 200,
    rarity: 'common',
  },
  {
    id: 'document_handler',
    title: 'Document Handler',
    description: 'Menyelesaikan Bab 2 — Dokumen Kantor',
    icon: '📁',
    condition: 'complete_chapter_2',
    xpReward: 200,
    rarity: 'common',
  },
  {
    id: 'letter_master',
    title: 'Letter Master',
    description: 'Menyelesaikan Bab 3 — Dasar Surat Menyurat',
    icon: '✉️',
    condition: 'complete_chapter_3',
    xpReward: 200,
    rarity: 'common',
  },
  {
    id: 'archive_master',
    title: 'Archive Master',
    description: 'Menyelesaikan Bab 4 — Sistem Kearsipan',
    icon: '🗄️',
    condition: 'complete_chapter_4',
    xpReward: 300,
    rarity: 'rare',
  },
  {
    id: 'business_expert',
    title: 'Business Expert',
    description: 'Menyelesaikan Bab 5 — Dokumen Bisnis',
    icon: '💼',
    condition: 'complete_chapter_5',
    xpReward: 300,
    rarity: 'rare',
  },
  {
    id: 'org_architect',
    title: 'Organization Architect',
    description: 'Menyelesaikan Bab 6 — Struktur Organisasi',
    icon: '🏢',
    condition: 'complete_chapter_6',
    xpReward: 300,
    rarity: 'rare',
  },
  {
    id: 'perfect_score',
    title: 'Perfect Score',
    description: 'Mendapatkan nilai 100 pada sebuah kuis',
    icon: '🔥',
    condition: 'quiz_perfect',
    xpReward: 250,
    rarity: 'rare',
  },
  {
    id: 'speed_admin',
    title: 'Speed Administrator',
    description: 'Menyelesaikan kuis dalam waktu kurang dari 1 menit',
    icon: '⚡',
    condition: 'quiz_speed',
    xpReward: 150,
    rarity: 'rare',
  },
  {
    id: 'combo_king',
    title: 'Combo King',
    description: 'Mencapai combo 5 dalam satu sesi kuis',
    icon: '🎯',
    condition: 'combo_5',
    xpReward: 150,
    rarity: 'common',
  },
  {
    id: 'admin_master',
    title: 'Administration Master',
    description: 'Menyelesaikan seluruh materi 6 Bab!',
    icon: '👑',
    condition: 'complete_all',
    xpReward: 1000,
    rarity: 'legendary',
  },
];

export function getAchievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find((a) => a.id === id);
}
