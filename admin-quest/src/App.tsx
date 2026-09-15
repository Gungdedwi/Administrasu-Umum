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

export const App: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [allStudents, setAllStudents] = useState<User[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [showPrintReport, setShowPrintReport] = useState<boolean>(false);

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

  const handleRoleSwitch = (newRole: 'student' | 'teacher') => {
    if (!user) return;
    const updated = { ...user, role: newRole };
    setUser(updated);
    storageService.saveCurrentUser(updated);
    if (newRole === 'teacher') {
      navigate('/teacher');
    } else {
      navigate('/');
    }
  };

  const handleSoundToggle = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFX.setEnabled(next);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-20 md:pb-8 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Global Navbar Header */}
      <Navbar
        user={user}
        onRoleSwitch={handleRoleSwitch}
        onSoundToggle={handleSoundToggle}
        soundEnabled={soundEnabled}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
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
              <TeacherDashboard
                allStudents={allStudents}
                onExportReport={() => setShowPrintReport(true)}
              />
            }
          />
        </Routes>
      </main>

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
