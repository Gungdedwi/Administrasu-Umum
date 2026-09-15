// =====================================================
// ADMIN QUEST — Teacher Dashboard (Panel Guru)
// =====================================================

import React, { useState } from 'react';
import type { Question, User } from '../types';
import { CHAPTERS, getAllQuestions } from '../data/questions';
import { soundFX } from '../utils/audio';

interface TeacherDashboardProps {
  allStudents: User[];
  onExportReport: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  allStudents,
  onExportReport,
}) => {
  const [selectedTab, setSelectedTab] = useState<'recap' | 'questions'>('recap');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');
  const [questions] = useState<Question[]>(getAllQuestions());
  const [searchQuestion, setSearchQuestion] = useState('');

  const classes = Array.from(new Set(allStudents.map((s) => s.className)));

  const filteredStudents = allStudents.filter(
    (s) => selectedClassFilter === 'all' || s.className === selectedClassFilter
  );

  // Export CSV / Excel file
  const handleExportCSV = () => {
    soundFX.playClick();
    const headers = ['No', 'Nama Siswa', 'Kelas', 'Level', 'Gelar', 'Total XP', 'Bab Selesai'];
    const rows = filteredStudents.map((s, idx) => [
      idx + 1,
      `"${s.name}"`,
      `"${s.className}"`,
      s.level,
      `"${s.levelTitle}"`,
      s.xp,
      s.progress?.filter((p) => p.isCompleted).length || 0,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Rekap_Nilai_AdminQuest_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredQuestions = questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuestion.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchQuestion.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Teacher Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 border border-amber-500/30 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 mb-2">
            👨‍🏫 Mode Pengampu — Anak Agung Gde Agung Dwi Angga N, S.Pd.
          </div>
          <h1 className="text-2xl font-extrabold text-slate-100">
            Panel Manajemen Pembelajaran Guru
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Pantau perkembangan nilai siswa kelas X SMK, unduh rekapitulasi nilai PDF/Excel, dan kelola bank soal.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center gap-1.5 transition-all"
          >
            <span>📊</span>
            <span>Ekspor Excel (.CSV)</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              onExportReport();
            }}
            className="px-4 py-2.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md flex items-center gap-1.5 transition-all"
          >
            <span>🖨️</span>
            <span>Cetak / PDF Nilai</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => {
            soundFX.playClick();
            setSelectedTab('recap');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedTab === 'recap'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          📋 Rekapitulasi Nilai Siswa
        </button>

        <button
          onClick={() => {
            soundFX.playClick();
            setSelectedTab('questions');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedTab === 'questions'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          📚 Bank Soal eBook ({questions.length} Soal)
        </button>
      </div>

      {/* Tab Content: Student Recap */}
      {selectedTab === 'recap' && (
        <div className="space-y-4">
          
          {/* Filter Bar */}
          <div className="flex items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">Filter Kelas:</span>
              <select
                value={selectedClassFilter}
                onChange={(e) => setSelectedClassFilter(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 rounded-xl text-xs px-3 py-1.5 font-bold focus:outline-none focus:border-amber-500"
              >
                <option value="all">Semua Kelas ({allStudents.length} Siswa)</option>
                {classes.map((c) => (
                  <option key={c} value={c}>
                    Kelas {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xs text-slate-400">
              Menampilkan <span className="font-bold text-amber-400">{filteredStudents.length}</span> siswa
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] border-b border-slate-700">
                <tr>
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Nama Siswa</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Level & Gelar</th>
                  <th className="px-4 py-3 text-center">Total XP</th>
                  <th className="px-4 py-3 text-center">Bab 1</th>
                  <th className="px-4 py-3 text-center">Bab 2</th>
                  <th className="px-4 py-3 text-center">Bab 3</th>
                  <th className="px-4 py-3 text-center">Bab 4</th>
                  <th className="px-4 py-3 text-center">Bab 5</th>
                  <th className="px-4 py-3 text-center">Bab 6</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {filteredStudents.map((st, idx) => (
                  <tr key={st.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="px-4 py-3 text-slate-500 font-bold">{idx + 1}</td>
                    <td className="px-4 py-3 font-bold text-slate-100 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center font-bold text-xs border border-slate-700">
                        {st.name.charAt(0)}
                      </div>
                      <span>{st.name}</span>
                    </td>
                    <td className="px-4 py-3 text-slate-400">{st.className}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        Lv.{st.level} - {st.levelTitle}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center font-extrabold text-amber-400">{st.xp}</td>
                    {[1, 2, 3, 4, 5, 6].map((chId) => {
                      const chProg = st.progress?.find((p) => p.chapterId === chId);
                      return (
                        <td key={chId} className="px-4 py-3 text-center">
                          {chProg ? (
                            <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              {chProg.highScore} pts
                            </span>
                          ) : (
                            <span className="text-slate-600">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab Content: Question Bank */}
      {selectedTab === 'questions' && (
        <div className="space-y-4">
          
          {/* Search Bar */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
            <input
              type="text"
              placeholder="Cari kata kunci soal atau penjelasan..."
              value={searchQuestion}
              onChange={(e) => setSearchQuestion(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            />
            <div className="text-xs text-slate-400 shrink-0">
              Total <span className="font-bold text-amber-400">{filteredQuestions.length}</span> Soal
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-3">
            {filteredQuestions.map((q, idx) => (
              <div key={q.id} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-amber-400 uppercase">
                    BAB {q.chapter} • Soal #{idx + 1} ({q.id})
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold border border-slate-700">
                    Difficulty: {q.difficulty} ({q.xp} XP)
                  </span>
                </div>
                <div className="font-bold text-sm text-slate-100">{q.question}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pt-1">
                  {q.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className={`p-2 rounded-xl border text-[11px] ${
                        opt === q.answer
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                          : 'bg-slate-800/50 border-slate-700/50 text-slate-400'
                      }`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
                <div className="text-xs bg-slate-800/80 p-2.5 rounded-xl text-slate-300 border border-slate-700/50 mt-2">
                  <span className="font-bold text-amber-400">💡 Penjelasan Buku:</span> {q.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
