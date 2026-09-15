// =====================================================
// ADMIN QUEST — Teacher PIN Verification Modal
// =====================================================

import React, { useState } from 'react';
import { soundFX } from '../utils/audio';

interface TeacherPinModalProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const TeacherPinModal: React.FC<TeacherPinModalProps> = ({ onSuccess, onCancel }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: 1234
    if (pin === '1234') {
      soundFX.playClick();
      onSuccess();
    } else {
      soundFX.playWrong();
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 animate-scale-up">
        
        <div className="text-center space-y-1">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl border border-amber-500/30 mb-2">
            🔒
          </div>
          <h3 className="font-bold text-lg text-slate-100">Verifikasi PIN Guru</h3>
          <p className="text-xs text-slate-400">
            Masukkan PIN Pengampu untuk mengakses Panel Guru.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              autoFocus
              placeholder="PIN (Default: 1234)"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError(false);
              }}
              className={`w-full bg-slate-800 border rounded-xl px-4 py-3 text-sm font-extrabold tracking-widest text-center text-slate-100 focus:outline-none ${
                error ? 'border-rose-500 text-rose-300 animate-shake' : 'border-slate-700 focus:border-amber-500'
              }`}
            />
            {error && (
              <p className="text-[11px] text-rose-400 font-bold mt-1 text-center">
                ⚠️ PIN Salah! Akses ditolak.
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                soundFX.playClick();
                onCancel();
              }}
              className="py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            >
              Batal
            </button>

            <button
              type="submit"
              className="py-2.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md"
            >
              Verifikasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
