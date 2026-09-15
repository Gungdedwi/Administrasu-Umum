// =====================================================
// ADMIN QUEST — Main React Application & State Container
// =====================================================

import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import type { User } from './types';
import { storageService } from './services/storage';
import { soundFX } from './utils/audio';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { StudentDashboard } from './components/StudentDashboard';
import { QuizEngine } from './components/QuizEngine';
import { MaterialReader } from './components/MaterialReader';
import { Leaderboard } from './components/Leaderboard';
import { AchievementsView } from './components/AchievementsView';
import { TeacherDashboard } from './components/TeacherDashboard';
import { PrintableReport } from './components/PrintableReport';
import { LoginPortal } from './components/LoginPortal';
import { TeacherPinModal } from './components/TeacherPinModal';

export const App: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [allStudents, setAllStudents] = useState<User[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [showPrintReport, setShowPrintReport] = useState<boolean>(false);
  const [showPinModal, setShowPinModal] = useState<boolean>(false);

  // Initialize data on mount
  useEffect(() => {
    storageService.initializeMockData();
    const currentUser = storageService.getCurrentUser();
    const students = storageService.getAllStudents();
    setUser(currentUser);
    setAllStudents(students);
  }, []);

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
    setAllStudents(storageService.getAllStudents());
  };

  const handleLoginAsStudent = (name: string, className: string, selectedUserId?: string) => {
    let studentUser: User;
    if (selectedUserId) {
      const found = allStudents.find((s) => s.id === selectedUserId);
      if (found) {
        studentUser = { ...found, role: 'student' };
      } else {
        studentUser = {
          id: `s-${Date.now()}`,
          name,
          className,
          role: 'student',
          xp: 0,
          level: 1,
          levelTitle: 'Office Rookie',
          nextLevelXp: 400,
          progress: [],
          achievements: [],
        };
      }
    } else {
      studentUser = {
        id: `s-${Date.now()}`,
        name,
        className,
        role: 'student',
        xp: 0,
        level: 1,
        levelTitle: 'Office Rookie',
        nextLevelXp: 400,
        progress: [],
        achievements: [],
      };
    }

    setUser(studentUser);
    storageService.saveCurrentUser(studentUser);
    setAllStudents(storageService.getAllStudents());
    navigate('/');
  };

  const handleLoginAsTeacher = (pin: string): boolean => {
    if (pin === '1234') {
      const teacherUser: User = {
        id: 'teacher-001',
        name: 'Anak Agung Gde Agung Dwi Angga N, S.Pd.',
        className: 'Guru Pengampu',
        role: 'teacher',
        xp: 9999,
        level: 7,
        levelTitle: 'Administration Master',
        nextLevelXp: 99999,
      };
      setUser(teacherUser);
      storageService.saveCurrentUser(teacherUser);
      navigate('/teacher');
      return true;
    }
    return false;
  };

  const handleVerifyTeacherPinSuccess = () => {
    setShowPinModal(false);
    if (!user) return;
    const teacherUser: User = {
      ...user,
      role: 'teacher',
      name: user.name || 'Anak Agung Gde Agung Dwi Angga N, S.Pd.',
    };
    setUser(teacherUser);
    storageService.saveCurrentUser(teacherUser);
    navigate('/teacher');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('admin_quest_current_user');
  };

  const handleSoundToggle = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFX.setEnabled(next);
  };

  // If not logged in, show Login Portal
  if (!user) {
    return (
      <LoginPortal
        existingStudents={allStudents}
        onLoginAsStudent={handleLoginAsStudent}
        onLoginAsTeacher={handleLoginAsTeacher}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-between font-sans pb-20 md:pb-8 selection:bg-amber-500 selection:text-slate-950 w-full">
      
      {/* Global Navbar Header */}
      <Navbar
        user={user}
        onRequestTeacherAccess={() => setShowPinModal(true)}
        onLogout={handleLogout}
        onSoundToggle={handleSoundToggle}
        soundEnabled={soundEnabled}
      />

      {/* Main Content Viewport - Centered */}
      <main className="flex-1 w-full flex flex-col items-center">
        <div className="w-full">
          <Routes>
            <Route
              path="/"
              element={
                <StudentDashboard
                  user={user}
                  progressList={user.progress || []}
                />
              }
            />
            <Route
              path="/quiz/:chapterIdStr"
              element={
                <QuizEngine
                  user={user}
                  onUpdateUser={handleUpdateUser}
                />
              }
            />
            <Route path="/materi" element={<MaterialReader />} />
            <Route path="/materi/:chapterIdStr" element={<MaterialReader />} />
            <Route
              path="/leaderboard"
              element={<Leaderboard students={allStudents} currentUserId={user.id} />}
            />
            <Route path="/achievements" element={<AchievementsView user={user} />} />
            <Route
              path="/teacher"
              element={
                user.role === 'teacher' ? (
                  <TeacherDashboard
                    allStudents={allStudents}
                    onExportReport={() => setShowPrintReport(true)}
                  />
                ) : (
                  <StudentDashboard
                    user={user}
                    progressList={user.progress || []}
                  />
                )
              }
            />
          </Routes>
        </div>
      </main>

      {/* Teacher PIN Verification Modal */}
      {showPinModal && (
        <TeacherPinModal
          onSuccess={handleVerifyTeacherPinSuccess}
          onCancel={() => setShowPinModal(false)}
        />
      )}

      {/* Printable Report Overlay Modal */}
      {showPrintReport && (
        <PrintableReport
          students={allStudents}
          onClose={() => setShowPrintReport(false)}
        />
      )}

      {/* Bottom Mobile Tab Navigation for smartphones */}
      <MobileNav isTeacher={user.role === 'teacher'} />
    </div>
  );
};

export default App;
