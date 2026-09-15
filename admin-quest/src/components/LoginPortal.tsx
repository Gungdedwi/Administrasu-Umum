// =====================================================
// ADMIN QUEST — Login & Role Portal Component
// =====================================================

import React, { useState } from 'react';
import type { User } from '../types';
import { soundFX } from '../utils/audio';

interface LoginPortalProps {
  existingStudents: User[];
  onLoginAsStudent: (name: string, className: string, selectedUserId?: string) => void;
  onLoginAsTeacher: (pin: string) => boolean;
}

export const LoginPortal: React.FC<LoginPortalProps> = ({
  existingStudents,
  onLoginAsStudent,
  onLoginAsTeacher,
}) => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('student');
  
  // Student form state
  const [selectedStudentId, setSelectedStudentId] = useState<string>(existingStudents[0]?.id || '');
  const [newStudentName, setNewStudentName] = useState<string>('');
  const [newClassName, setNewClassName] = useState<string>('X PH 1');
  const [isNewStudent, setIsNewStudent] = useState<boolean>(false);

  // Teacher PIN state
  const [teacherPin, setTeacherPin] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClick();

    if (isNewStudent) {
      if (!newStudentName.trim()) return;
      onLoginAsStudent(newStudentName.trim(), newClassName);
    } else {
      const existing = existingStudents.find((s) => s.id === selectedStudentId);
      if (existing) {
        onLoginAsStudent(existing.name, existing.className, existing.id);
      }
    }
  };

  const handleTeacherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClick();
    const success = onLoginAsTeacher(teacherPin);
    if (!success) {
      setPinError(true);
      soundFX.playWrong();
    } else {
      setPinError(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Background Glow Effects */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10 space-y-6 animate-fade-in">
        
        {/* App Title Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-black text-3xl text-white shadow-xl shadow-indigo-500/20 mb-3">
            AQ
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-100">
            ADMIN QUEST
          </h1>
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            "Learn • Play • Challenge • Master"
          </p>
          <p className="text-xs text-slate-400">
            Media Pembelajaran Administrasi Dasar (Kelas X SMK)
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => {
              soundFX.playClick();
              setActiveTab('student');
              setPinError(false);
            }}
            className={`py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'student'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>🎒 Portal Siswa</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundFX.playClick();
              setActiveTab('teacher');
            }}
            className={`py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'teacher'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>🔒 Panel Guru</span>
          </button>
        </div>

        {/* Tab 1: Student Login */}
        {activeTab === 'student' && (
          <form onSubmit={handleStudentSubmit} className="space-y-4">
            
            {/* Choose between Existing vs New Profile */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-1">
              <span>Pilih Akun Siswa:</span>
              <button
                type="button"
                onClick={() => setIsNewStudent(!isNewStudent)}
                className="text-amber-400 hover:underline font-bold"
              >
                {isNewStudent ? '← Pilih Profile Ada' : '+ Tambah Siswa Baru'}
              </button>
            </div>

            {!isNewStudent ? (
              <div className="space-y-2">
                <label className="block text-xs font-medium text-slate-300">
                  Nama Siswa / Profil Terdaftar:
                </label>
                <select
                  value={selectedStudentId}
                  onChange={(e) => setSelectedStudentId(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-indigo-500"
                >
                  {existingStudents.map((st) => (
                    <option key={st.id} value={st.id}>
                      {st.name} ({st.className}) — Lv.{st.level}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nama Lengkap Siswa:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama lengkap..."
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Kelas SMK:
                  </label>
                  <select
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-indigo-500"
                  >
                    <option value="X PH 1">X PH 1 (Perhotelan 1)</option>
                    <option value="X PH 2">X PH 2 (Perhotelan 2)</option>
                    <option value="X PH 3">X PH 3 (Perhotelan 3)</option>
                    <option value="X JP 1">X JP 1 (Jasa Pariwisata)</option>
                  </select>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>🚀 Mulai Petualangan Belajar</span>
            </button>
          </form>
        )}

        {/* Tab 2: Teacher Login (PIN Protected) */}
        {activeTab === 'teacher' && (
          <form onSubmit={handleTeacherSubmit} className="space-y-4">
            
            <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-2xl text-xs text-amber-300 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <span>🔒 Masuk Mode Pengampu Guru</span>
              </div>
              <p className="text-[11px] text-amber-200/80">
                Akses ini dilindungi PIN keamanan agar siswa tidak dapat mengubah nilai atau bank soal.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Masukkan PIN Pengampu Guru:
              </label>
              <input
                type="password"
                required
                placeholder="Masukkan PIN (Default: 1234)"
                value={teacherPin}
                onChange={(e) => {
                  setTeacherPin(e.target.value);
                  setPinError(false);
                }}
                className={`w-full bg-slate-800 border rounded-xl px-4 py-3 text-sm font-extrabold tracking-widest text-center text-slate-100 focus:outline-none ${
                  pinError ? 'border-rose-500 text-rose-300 animate-shake' : 'border-slate-700 focus:border-amber-500'
                }`}
              />
              {pinError && (
                <p className="text-[11px] text-rose-400 font-bold mt-1.5 text-center">
                  ⚠️ PIN Guru Salah! Akses ditolak.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>🔓 Masuk ke Panel Guru</span>
            </button>
          </form>
        )}

        <div className="text-center pt-2 text-[11px] text-slate-500">
          Pengampu: Anak Agung Gde Agung Dwi Angga N, S.Pd.
        </div>
      </div>
    </div>
  );
};
