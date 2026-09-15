// =====================================================
// ADMIN QUEST — Formal Printable Class Progress Report (PDF Ready)
// =====================================================

import React from 'react';
import type { User } from '../types';

interface PrintableReportProps {
  students: User[];
  onClose: () => void;
}

export const PrintableReport: React.FC<PrintableReportProps> = ({ students, onClose }) => {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md overflow-y-auto p-4 sm:p-8 flex justify-center">
      
      {/* Floating Action Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3 print:hidden">
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 rounded-xl font-extrabold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl flex items-center gap-2"
        >
          <span>🖨️</span>
          <span>Cetak / Simpan PDF</span>
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shadow-xl"
        >
          Tutup ✖
        </button>
      </div>

      {/* Printable Sheet A4 Document Container */}
      <div className="w-full max-w-4xl bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl my-auto print:shadow-none print:m-0 print:p-0 print:w-full">
        
        {/* Official Letterhead (Kop Laporan Resmi Guru) */}
        <div className="border-b-4 border-double border-slate-900 pb-4 mb-6 text-center">
          <h2 className="text-xl font-black uppercase tracking-wider text-slate-900">
            LAPORAN REKAPITULASI HASIL BELAJAR APLIKASI ADMIN QUEST
          </h2>
          <h3 className="text-base font-bold text-slate-800">
            MATA PELAJARAN ADMINISTRASI DASAR / ADMINISTRASI UMUM
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Kelas X SMK Perhotelan dan Jasa Pariwisata • Tahun Ajaran 2026/2027
          </p>
        </div>

        {/* Metadata Information */}
        <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700 mb-6 bg-slate-100 p-4 rounded-xl">
          <div>
            <p><span className="text-slate-500">Guru Pengampu:</span> Anak Agung Gde Agung Dwi Angga N, S.Pd.</p>
            <p><span className="text-slate-500">Tanggal Cetak:</span> {currentDate}</p>
          </div>
          <div>
            <p><span className="text-slate-500">Total Peserta Didik:</span> {students.length} Siswa</p>
            <p><span className="text-slate-500">Jumlah Bab Diuji:</span> 6 Bab Semester Ganjil</p>
          </div>
        </div>

        {/* Grades Table */}
        <table className="w-full border-collapse text-left text-xs mb-8">
          <thead>
            <tr className="bg-slate-900 text-white font-bold text-[11px]">
              <th className="border border-slate-900 p-2 text-center w-10">No</th>
              <th className="border border-slate-900 p-2">Nama Siswa</th>
              <th className="border border-slate-900 p-2 text-center">Kelas</th>
              <th className="border border-slate-900 p-2 text-center">Total XP</th>
              <th className="border border-slate-900 p-2 text-center">Level</th>
              <th className="border border-slate-900 p-2 text-center">B1</th>
              <th className="border border-slate-900 p-2 text-center">B2</th>
              <th className="border border-slate-900 p-2 text-center">B3</th>
              <th className="border border-slate-900 p-2 text-center">B4</th>
              <th className="border border-slate-900 p-2 text-center">B5</th>
              <th className="border border-slate-900 p-2 text-center">B6</th>
            </tr>
          </thead>
          <tbody>
            {students.map((st, idx) => (
              <tr key={st.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="border border-slate-400 p-2 text-center font-bold">{idx + 1}</td>
                <td className="border border-slate-400 p-2 font-bold">{st.name}</td>
                <td className="border border-slate-400 p-2 text-center">{st.className}</td>
                <td className="border border-slate-400 p-2 text-center font-bold text-amber-700">{st.xp}</td>
                <td className="border border-slate-400 p-2 text-center">Lv.{st.level}</td>
                {[1, 2, 3, 4, 5, 6].map((chId) => {
                  const chProg = st.progress?.find((p) => p.chapterId === chId);
                  return (
                    <td key={chId} className="border border-slate-400 p-2 text-center font-semibold">
                      {chProg ? `${chProg.highScore}` : '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Signature Box */}
        <div className="flex justify-between items-end text-xs text-slate-800 pt-8 border-t border-slate-300">
          <div>
            <p>Mengetahui,</p>
            <p className="font-bold mt-1">Kepala Sekolah SMK</p>
            <div className="h-16" />
            <p className="font-bold underline">( ________________________ )</p>
            <p className="text-[10px] text-slate-500">NIP. -----------------------</p>
          </div>

          <div className="text-right">
            <p>Klungkung, {currentDate}</p>
            <p className="font-bold mt-1">Guru Pengampu Mata Pelajaran</p>
            <div className="h-16" />
            <p className="font-bold underline">Anak Agung Gde Agung Dwi Angga N, S.Pd.</p>
            <p className="text-[10px] text-slate-500">NIP. -----------------------</p>
          </div>
        </div>
      </div>
    </div>
  );
};
