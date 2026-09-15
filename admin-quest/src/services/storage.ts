// =====================================================
// ADMIN QUEST — localStorage Storage Service
// Modular: can be swapped for Supabase later
// =====================================================

import type { User, QuizResult, StudentProgress } from '../types';
import { getLevelInfo, getNextLevelXP } from '../features/xp/xpSystem';

const STORAGE_KEYS = {
  CURRENT_USER: 'admin_quest_current_user',
  ALL_STUDENTS: 'admin_quest_all_students',
};

// Initial Mock Students for Leaderboard & Class Recap
const MOCK_STUDENTS: User[] = [
  {
    id: 's-001',
    name: 'Anak Agung Gde Agung Dwi Angga N',
    className: 'X PH 1',
    role: 'student',
    xp: 2850,
    level: 4,
    levelTitle: 'Archive Master',
    nextLevelXp: 3500,
    achievements: ['first_step', 'document_handler', 'letter_master', 'archive_master'],
    progress: [
      { chapterId: 1, isCompleted: true, highScore: 100, starsEarned: 3, lastAttempted: '2026-09-15' },
      { chapterId: 2, isCompleted: true, highScore: 90, starsEarned: 3, lastAttempted: '2026-09-15' },
      { chapterId: 3, isCompleted: true, highScore: 95, starsEarned: 3, lastAttempted: '2026-09-15' },
      { chapterId: 4, isCompleted: true, highScore: 85, starsEarned: 2, lastAttempted: '2026-09-15' },
    ],
  },
  {
    id: 's-002',
    name: 'Ni Putu Ayu Saraswati',
    className: 'X PH 1',
    role: 'student',
    xp: 2200,
    level: 4,
    levelTitle: 'Archive Master',
    nextLevelXp: 3500,
    achievements: ['first_step', 'document_handler', 'letter_master'],
    progress: [
      { chapterId: 1, isCompleted: true, highScore: 90, starsEarned: 3, lastAttempted: '2026-09-14' },
      { chapterId: 2, isCompleted: true, highScore: 85, starsEarned: 2, lastAttempted: '2026-09-14' },
      { chapterId: 3, isCompleted: true, highScore: 90, starsEarned: 3, lastAttempted: '2026-09-14' },
    ],
  },
  {
    id: 's-003',
    name: 'I Made Budi Pratama',
    className: 'X PH 1',
    role: 'student',
    xp: 1450,
    level: 3,
    levelTitle: 'Correspondence Specialist',
    nextLevelXp: 2000,
    achievements: ['first_step', 'document_handler'],
    progress: [
      { chapterId: 1, isCompleted: true, highScore: 80, starsEarned: 2, lastAttempted: '2026-09-13' },
      { chapterId: 2, isCompleted: true, highScore: 80, starsEarned: 2, lastAttempted: '2026-09-13' },
    ],
  },
  {
    id: 's-004',
    name: 'Kadek Sinta Dewi',
    className: 'X PH 2',
    role: 'student',
    xp: 1800,
    level: 3,
    levelTitle: 'Correspondence Specialist',
    nextLevelXp: 2000,
    achievements: ['first_step', 'document_handler'],
    progress: [
      { chapterId: 1, isCompleted: true, highScore: 95, starsEarned: 3, lastAttempted: '2026-09-12' },
      { chapterId: 2, isCompleted: true, highScore: 90, starsEarned: 3, lastAttempted: '2026-09-12' },
    ],
  },
  {
    id: 's-005',
    name: 'I Nyoman Dharma Yoga',
    className: 'X PH 2',
    role: 'student',
    xp: 950,
    level: 2,
    levelTitle: 'Document Handler',
    nextLevelXp: 1000,
    achievements: ['first_step'],
    progress: [
      { chapterId: 1, isCompleted: true, highScore: 75, starsEarned: 2, lastAttempted: '2026-09-11' },
    ],
  },
];

export const storageService = {
  initializeMockData(): void {
    if (!localStorage.getItem(STORAGE_KEYS.ALL_STUDENTS)) {
      localStorage.setItem(STORAGE_KEYS.ALL_STUDENTS, JSON.stringify(MOCK_STUDENTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(MOCK_STUDENTS[0]));
    }
  },

  getCurrentUser(): User {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (raw) return JSON.parse(raw);
    return MOCK_STUDENTS[0];
  },

  saveCurrentUser(user: User): void {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    this.updateStudentInList(user);
  },

  getAllStudents(): User[] {
    const raw = localStorage.getItem(STORAGE_KEYS.ALL_STUDENTS);
    if (raw) return JSON.parse(raw);
    return MOCK_STUDENTS;
  },

  updateStudentInList(updatedStudent: User): void {
    const students = this.getAllStudents();
    const idx = students.findIndex((s) => s.id === updatedStudent.id);
    if (idx >= 0) {
      students[idx] = updatedStudent;
    } else {
      students.push(updatedStudent);
    }
    localStorage.setItem(STORAGE_KEYS.ALL_STUDENTS, JSON.stringify(students));
  },

  saveQuizResult(userId: string, result: QuizResult): User {
    const currentUser = this.getCurrentUser();
    const newXp = currentUser.xp + result.xpEarned;
    const levelInfo = getLevelInfo(newXp);
    const nextXp = getNextLevelXP(newXp);

    const existingProgress = currentUser.progress || [];
    const chIdx = existingProgress.findIndex((p) => p.chapterId === result.chapterId);

    const newChProgress: StudentProgress = {
      chapterId: result.chapterId,
      isCompleted: result.score >= 60,
      highScore: chIdx >= 0 ? Math.max(existingProgress[chIdx].highScore, result.score) : result.score,
      starsEarned: chIdx >= 0 ? Math.max(existingProgress[chIdx].starsEarned, result.starsEarned) : result.starsEarned,
      lastAttempted: new Date().toISOString(),
    };

    if (chIdx >= 0) {
      existingProgress[chIdx] = newChProgress;
    } else {
      existingProgress.push(newChProgress);
    }

    const updatedUser: User = {
      ...currentUser,
      xp: newXp,
      level: levelInfo.level,
      levelTitle: levelInfo.title,
      nextLevelXp: nextXp,
      progress: existingProgress,
    };

    this.saveCurrentUser(updatedUser);
    return updatedUser;
  },
};
