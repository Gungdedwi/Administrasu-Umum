// =====================================================
// ADMIN QUEST — TypeScript Types & Interfaces
// =====================================================

export interface User {
  id: string;
  name: string;
  className: string;
  role: 'student' | 'teacher';
  xp: number;
  level: number;
  levelTitle: string;
  nextLevelXp: number;
  avatarColor?: string;
  joinedAt?: string;
  progress?: StudentProgress[];
  achievements?: string[];
}

export interface StudentProgress {
  chapterId: number;
  isCompleted: boolean;
  highScore: number;
  starsEarned: number;
  lastAttempted: string;
}

export interface QuizResult {
  chapterId: number;
  score: number;
  maxScore: number;
  xpEarned: number;
  correctCount: number;
  totalQuestions: number;
  starsEarned: number;
  completedAt: string;
}

export interface Question {
  id: string;
  chapter: number;
  type: 'multiple_choice' | 'true_false' | 'matching';
  difficulty: 'easy' | 'medium' | 'hard' | 'hots';
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  xp: number;
}

export interface ChapterInfo {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  totalQuestions: number;
  minXpToUnlock: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  condition?: string;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Level {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
  badge?: string;
  color?: string;
}
