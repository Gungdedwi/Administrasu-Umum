// =====================================================
// ADMIN QUEST — Master Question Bank & Chapter Metadata
// Total: 180+ High Quality Questions from Textbook
// =====================================================

import type { ChapterInfo, Question } from '../../types';
import bab1Questions from './bab1';
import bab2Questions from './bab2';
import bab3Questions from './bab3';
import bab4Questions from './bab4';
import bab5Questions from './bab5';
import bab6Questions from './bab6';

export const CHAPTERS: ChapterInfo[] = [
  {
    id: 1,
    title: 'Ruang Lingkup Administrasi',
    description: 'Pengertian, tahapan kegiatan, fungsi dasar, dan tujuan administrasi kantor/perhotelan.',
    icon: '📊',
    color: 'from-blue-600 to-indigo-600',
    totalQuestions: bab1Questions.length,
    minXpToUnlock: 0,
  },
  {
    id: 2,
    title: 'Dokumen Kantor & Industri',
    description: 'Pengertian, fungsi, jenis dokumen kantor, dokumen khusus hotel, dan mesin penggandaan.',
    icon: '📂',
    color: 'from-cyan-600 to-teal-600',
    totalQuestions: bab2Questions.length,
    minXpToUnlock: 200,
  },
  {
    id: 3,
    title: 'Dasar Surat Menyurat',
    description: 'Fungsi, bentuk-bentuk surat, bagian-bagian surat resmi, bahasa niaga/dinas, dan perlengkapan.',
    icon: '✉️',
    color: 'from-emerald-600 to-green-600',
    totalQuestions: bab3Questions.length,
    minXpToUnlock: 500,
  },
  {
    id: 4,
    title: 'Sistem Kearsipan',
    description: 'Pengertian, 5 sistem penyimpanan arsip (Abjad, Subjek, Tanggal, Wilayah, Nomor), alat & penyusutan.',
    icon: '🗄️',
    color: 'from-amber-600 to-orange-600',
    totalQuestions: bab4Questions.length,
    minXpToUnlock: 900,
  },
  {
    id: 5,
    title: 'Menyiapkan Dokumen Bisnis',
    description: 'Kwitansi, Invoice, Purchase Order, Nota Debet/Kredit, Cek/Giro, dan Legalitas Usaha (NIB, NPWP).',
    icon: '📑',
    color: 'from-purple-600 to-pink-600',
    totalQuestions: bab5Questions.length,
    minXpToUnlock: 1400,
  },
  {
    id: 6,
    title: 'Struktur Organisasi',
    description: 'Bentuk struktur (Garis, Fungsional, Matriks, Divisional), unsur, bagan, dan delegasi wewenang.',
    icon: '🏛️',
    color: 'from-rose-600 to-red-600',
    totalQuestions: bab6Questions.length,
    minXpToUnlock: 2000,
  },
];

export const ALL_QUESTIONS: Record<number, Question[]> = {
  1: bab1Questions,
  2: bab2Questions,
  3: bab3Questions,
  4: bab4Questions,
  5: bab5Questions,
  6: bab6Questions,
};

export const getAllQuestions = (): Question[] => {
  return [
    ...bab1Questions,
    ...bab2Questions,
    ...bab3Questions,
    ...bab4Questions,
    ...bab5Questions,
    ...bab6Questions,
  ];
};

export const getQuestionsByChapter = (chapterId: number): Question[] => {
  return ALL_QUESTIONS[chapterId] || [];
};

export const getRandomQuestions = (chapterId: number, count: number = 10): Question[] => {
  const chapterQuestions = [...getQuestionsByChapter(chapterId)];
  // Shuffle array using Fisher-Yates algorithm
  for (let i = chapterQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chapterQuestions[i], chapterQuestions[j]] = [chapterQuestions[j], chapterQuestions[i]];
  }
  return chapterQuestions.slice(0, count);
};
