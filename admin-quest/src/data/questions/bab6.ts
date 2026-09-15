// =====================================================
// BAB 6 — STRUKTUR ORGANISASI
// 30 Soal: Pemahaman | Penerapan | Analisis | HOTS
// Sumber: eBook Administrasi Umum Kelas X SMK
// =====================================================

import type { Question } from '../../types';

const bab6Questions: Question[] = [
  // Pemahaman (12 soal)
  {
    id: 'b6-q001', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Struktur organisasi adalah susunan dan hubungan antara tiap bagian serta posisi yang ada pada suatu organisasi. Fungsi utama struktur organisasi adalah ....',
    options: ['A. Memperjelas pembagian kerja, tanggung jawab, dan garis komando', 'B. Menentukan warna seragam pegawai', 'C. Menghitung jumlah keuntungan bersih', 'D. Menentukan lokasi kantor cabang', 'E. Mengatur jam istirahat'],
    answer: 'A. Memperjelas pembagian kerja, tanggung jawab, dan garis komando',
    explanation: 'Struktur organisasi memberikan gambaran pembagian tugas, wewenang, dan hierarki komando.',
    xp: 100
  },
  {
    id: 'b6-q002', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Bentuk struktur organisasi di mana wewenang mengalir langsung secara vertikal dari atasan tertinggi ke bawahan dinamakan bentuk ....',
    options: ['A. Struktur Garis / Lini (Line Organization)', 'B. Struktur Matriks', 'C. Struktur Komite', 'D. Struktur Divisional', 'E. Struktur Bebas'],
    answer: 'A. Struktur Garis / Lini (Line Organization)',
    explanation: 'Struktur garis merupakan bentuk organisasi tertua dan paling sederhana dengan garis wewenang lurus vertikal.',
    xp: 100
  },
  {
    id: 'b6-q003', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Struktur organisasi yang mengelompokkan karyawan berdasarkan keahlian atau spesialisasi pekerjaan (seperti Pemasaran, Keuangan, HRD) disebut struktur ....',
    options: ['A. Struktur Fungsional', 'B. Struktur Garis', 'C. Struktur Proyek', 'D. Struktur Lingkaran', 'E. Struktur Informal'],
    answer: 'A. Struktur Fungsional',
    explanation: 'Struktur fungsional membagi organisasi berdasarkan fungsi-fungsi spesialisasi spesifik.',
    xp: 100
  },
  {
    id: 'b6-q004', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Struktur organisasi gabungan yang menambahkan sekelompok ahli/penasihat untuk memberikan masukan kepada pimpinan dinamakan ....',
    options: ['A. Struktur Garis dan Staf (Line and Staff)', 'B. Struktur Matriks', 'C. Struktur Fungsional murni', 'D. Struktur Horizontal', 'E. Struktur Piramida Terbalik'],
    answer: 'A. Struktur Garis dan Staf (Line and Staff)',
    explanation: 'Struktur garis dan staf memadukan komando garis dengan bantuan staf ahli penasihat.',
    xp: 100
  },
  {
    id: 'b6-q005', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Bagan organisasi yang digambar dengan kotak tertinggi di atas dan cabang menjulur ke bawah disebut bentuk bagan ....',
    options: ['A. Vertikal / Piramida', 'B. Horizontal', 'C. Melingkar (Circular)', 'D. Matriks', 'E. Bebas'],
    answer: 'A. Vertikal / Piramida',
    explanation: 'Bagan vertikal menempatkan jabatan tertinggi di puncak dan jenjang bawahan di bawahnya.',
    xp: 100
  },
  {
    id: 'b6-q006', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Pejabat eksekutif tertinggi yang memimpin seluruh operasional hotel dinamakan ....',
    options: ['A. General Manager (GM)', 'B. Front Office Manager', 'C. Chief Engineer', 'D. Executive Housekeeper', 'E. Head Waiter'],
    answer: 'A. General Manager (GM)',
    explanation: 'General Manager bertanggung jawab penuh kepada pemilik/direksi atas seluruh divisi hotel.',
    xp: 100
  },
  {
    id: 'b6-q007', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Divisi dalam organisasi hotel yang bertanggung jawab atas kebersihan, kerapian, dan kenyamanan kamar serta area umum adalah ....',
    options: ['A. Housekeeping Department', 'B. Front Office Department', 'C. Food & Beverage Department', 'D. Accounting Department', 'E. Security Department'],
    answer: 'A. Housekeeping Department',
    explanation: 'Housekeeping mengurus kebersihan dan pemeliharaan kamar tamu serta keasrian lingkungan hotel.',
    xp: 100
  },
  {
    id: 'b6-q008', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Prinsip organisasi yang menyatakan bahwa seorang bawahan seharusnya hanya menerima perintah dari satu orang atasan dinamakan ....',
    options: ['A. Kesatuan Komando (Unity of Command)', 'B. Rentang Pengawasan (Span of Control)', 'C. Pembagian Kerja', 'D. Spesialisasi Tugas', 'E. Skala Wewenang'],
    answer: 'A. Kesatuan Komando (Unity of Command)',
    explanation: 'Kesatuan komando menegaskan bahwa bawahan bertanggung jawab hanya kepada satu atasan langsung.',
    xp: 100
  },
  {
    id: 'b6-q009', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Jumlah bawahan langsung yang dapat dipimpin dan diawasi secara efektif oleh seorang atasan dinamakan ....',
    options: ['A. Rentang Pengawasan / Kendali (Span of Control)', 'B. Rantai Komando', 'C. Jenjang Karir', 'D. Pembagian Fungsi', 'E. Garis Staf'],
    answer: 'A. Rentang Pengawasan / Kendali (Span of Control)',
    explanation: 'Span of control menentukan batas jumlah bawahan optimal di bawah pengawasan seorang manajer.',
    xp: 100
  },
  {
    id: 'b6-q010', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Divisi hotel yang menyajikan makanan dan minuman bagi para tamu di restoran, bar, dan kamar dinamakan ....',
    options: ['A. Food and Beverage (F&B) Department', 'B. Human Resources Department', 'C. Sales & Marketing', 'D. Engineering', 'E. Purchasing'],
    answer: 'A. Food and Beverage (F&B) Department',
    explanation: 'F&B Department mengelola pengolahan dan pelayanan makanan-minuman.',
    xp: 100
  },
  {
    id: 'b6-q011', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Bagan organisasi yang menempatkan pimpinan tertinggi di pusat tengah lingkaran dan jajaran bawahan mengelilinginya dinamakan bagan ....',
    options: ['A. Melingkar (Circular Diagram)', 'B. Matriks', 'C. Piramida', 'D. Pohon', 'E. Horizontal'],
    answer: 'A. Melingkar (Circular Diagram)',
    explanation: 'Bagan melingkar menggambarkan puncak pimpinan di titik pusat lingkaran.',
    xp: 100
  },
  {
    id: 'b6-q012', chapter: 6, type: 'multiple_choice', difficulty: 'easy',
    question: 'Pemberian sebagian wewenang dan tanggung jawab dari atasan kepada bawahan untuk menyelesaikan tugas dinamakan ....',
    options: ['A. Delegasi Wewenang', 'B. Mutasi Jabatan', 'C. Promosi Kerja', 'D. Demosi', 'E. Pemusnahan Tugas'],
    answer: 'A. Delegasi Wewenang',
    explanation: 'Delegasi adalah pendelegasian kekuasaan pengambilan keputusan dari manajer ke staf.',
    xp: 100
  },

  // Penerapan (10 soal)
  {
    id: 'b6-q013', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Dalam bagan organisasi hotel, garis tegas lurus menghubungkan General Manager dengan Front Office Manager. Garis tegas tersebut menggambarkan ....',
    options: ['A. Garis Komando / Wewenang Langsung (Line Authority)', 'B. Garis Koordinasi Staf Ahli', 'C. Garis Hubungan Informal', 'D. Hubungan Kemitraan Luar', 'E. Garis Pembayaran Gaji'],
    answer: 'A. Garis Komando / Wewenang Langsung (Line Authority)',
    explanation: 'Garis lurus tak terputus melambangkan garis komando dan instruksi langsung, sedangkan garis putus-putus melambangkan garis koordinasi/staf.',
    xp: 150
  },
  {
    id: 'b6-q014', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Seorang Receptionist menerima instruksi pembersihan kamar dari Front Office Manager, tetapi di saat bersamaan Executive Housekeeper memberi perintah berbeda. Hal ini melanggar prinsip ....',
    options: ['A. Kesatuan Komando (Unity of Command)', 'B. Pembagian Kerja', 'C. Wewenang Terpusat', 'D. Keseimbangan Tugas', 'E. Efisiensi Biaya'],
    answer: 'A. Kesatuan Komando (Unity of Command)',
    explanation: 'Penerimaan dua instruksi berbeda dari dua manajer membingungkan bawahan dan melanggar kesatuan komando.',
    xp: 150
  },
  {
    id: 'b6-q015', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Bentuk struktur organisasi Matriks sangat cocok diterapkan pada perusahaan yang ....',
    options: ['A. Mengelola proyek-proyek khusus berskala besar yang membutuhkan kolaborasi antar-spesialis', 'B. Usaha warung kecil 1 pemilik', 'C. Toko kelontong keluarga', 'D. Pabrik dengan 2 karyawan', 'E. Sekolah dengan 1 guru'],
    answer: 'A. Mengelola proyek-proyek khusus berskala besar yang membutuhkan kolaborasi antar-spesialis',
    explanation: 'Struktur matriks memadukan manajer fungsional dan manajer proyek untuk kerja tim yang dinamis.',
    xp: 150
  },
  {
    id: 'b6-q016', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Tugas utama manajer Human Resources Department (HRD) di sebuah hotel bintang lima adalah ....',
    options: ['A. Mengelola perekrutan, pelatihan, kesejahteraan, dan pengembangan SDM karyawan', 'B. Memasak makanan di kitchen', 'C. Membersihkan kolam renang', 'D. Menyapa tamu di pintu masuk', 'E. Memperbaiki AC rusak'],
    answer: 'A. Mengelola perekrutan, pelatihan, kesejahteraan, dan pengembangan SDM karyawan',
    explanation: 'HRD berfokus pada manajemen sumber daya manusia perusahaan.',
    xp: 150
  },
  {
    id: 'b6-q017', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Apabila General Manager hotel menunjuk seorang Legal Advisor (Penasihat Hukum) untuk membantu masalah sengketa lahan, dalam bagan organisasi posisi Legal Advisor digambarkan dengan ....',
    options: ['A. Garis putus-putus (Staf Ahli / Penasihat)', 'B. Garis tebal ganda', 'C. Kotak di bawah receptionist', 'D. Lingkaran merah', 'E. Tanpa garis sama sekali'],
    answer: 'A. Garis putus-putus (Staf Ahli / Penasihat)',
    explanation: 'Posisi staf ahli penasihat dihubungkan dengan garis putus-putus ke pimpinan.',
    xp: 150
  },
  {
    id: 'b6-q018', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Struktur organisasi Divisional membagi unit perusahaan berdasarkan ....',
    options: ['A. Wilayah geografis, jenis produk, atau target segmen pasar', 'B. Nama abjad karyawan', 'C. Tingkat pendidikan formal', 'D. Jenis kelamin pegawai', 'E. Warna baju dinas'],
    answer: 'A. Wilayah geografis, jenis produk, atau target segmen pasar',
    explanation: 'Struktur divisional memecah organisasi besar menjadi divisi semi-otonom (misal: Divisi Hotel Bali, Divisi Hotel Jakarta).',
    xp: 150
  },
  {
    id: 'b6-q019', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Manakah keuntungan utama dari penerapan Struktur Organisasi Garis (Lini)?',
    options: ['A. Pengambilan keputusan cepat, disiplin tinggi, dan garis komando sangat jelas', 'B. Sangat spesialis dan canggih', 'C. Tidak membutuhkan pemimpin', 'D. Mengabaikan perintah manajer', 'E. Bebas komando'],
    answer: 'A. Pengambilan keputusan cepat, disiplin tinggi, dan garis komando sangat jelas',
    explanation: 'Struktur garis sederhana membuat keputusan langsung dari atas tanpa birokrasi rumit.',
    xp: 150
  },
  {
    id: 'b6-q020', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Jabatan Chef de Partie dalam struktur organisasi kitchen hotel bertanggung jawab langsung kepada ....',
    options: ['A. Executive Chef / Sous Chef', 'B. Chief Security', 'C. Head Housekeeper', 'D. Front Office Cashier', 'E. IT Manager'],
    answer: 'A. Executive Chef / Sous Chef',
    explanation: 'Chef de Partie memimpin seksi dapur spesifik di bawah pengarahan Executive Chef & Sous Chef.',
    xp: 150
  },
  {
    id: 'b6-q021', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Jika rentang pengawasan (Span of Control) seorang manajer terlalu luas (misal memimpin 50 bawahan langsung tanpa supervisor), akibat yang timbul adalah ....',
    options: ['A. Pengawasan menjadi tidak efektif dan kualitas kontrol kinerja bawahan menurun', 'B. Kinerja bawahan semakin sempurna', 'C. Manajer hemat waktu', 'D. Tidak perlu rapat', 'E. Gaji manajer naik otomatis'],
    answer: 'A. Pengawasan menjadi tidak efektif dan kualitas kontrol kinerja bawahan menurun',
    explanation: 'Rentang kendali terlalu luas melebihi batas kemampuan pengawasan manusia.',
    xp: 150
  },
  {
    id: 'b6-q022', chapter: 6, type: 'multiple_choice', difficulty: 'medium',
    question: 'Dokumen tertulis yang menjelaskan rincian tugas, tanggung jawab, wewenang, dan kualifikasi suatu jabatan dinamakan ....',
    options: ['A. Uraian Jabatan / Deskripsi Pekerjaan (Job Description)', 'B. Surat Peringatan (SP)', 'C. Daftar Gaji (Pay Roll)', 'D. Jadwal Shift', 'E. Pasfoto Pegawai'],
    answer: 'A. Uraian Jabatan / Deskripsi Pekerjaan (Job Description)',
    explanation: 'Job description memberi kejelasan peran dan batas tugas pegawai.',
    xp: 150
  },

  // Analisis & HOTS (8 soal)
  {
    id: 'b6-q023', chapter: 6, type: 'multiple_choice', difficulty: 'hard',
    question: 'Sebuah hotel internasional berkembang pesat dari 50 kamar menjadi 500 kamar dengan menambah layanan SPA, Convention, dan Waterpark. Mengapa hotel tersebut HARUS mengubah struktur organisasi dari Garis Sederhana menjadi Garis dan Staf / Divisional?',
    options: ['A. Kompleksitas operasional meningkat sehingga General Manager membutuhkan staf ahli spesialis di setiap divisi', 'B. Hanya untuk formalitas pamer ke tamu', 'C. Agar jumlah ruang kantor bertambah', 'D. Memenuhi syarat diskon pajak', 'E. Mengikuti tren media sosial'],
    answer: 'A. Kompleksitas operasional meningkat sehingga General Manager membutuhkan staf ahli spesialis di every divisi',
    explanation: 'Skala bisnis yang membesar membutuhkan pengelompokan divisi spesifik serta dukungan staf ahli agar operasional terkontrol.',
    xp: 200
  },
  {
    id: 'b6-q024', chapter: 6, type: 'multiple_choice', difficulty: 'hard',
    question: 'Analisis kelemahan utama dari Struktur Organisasi Matriks di mana seorang staf proyek melapor kepada Manajer Fungsional sekaligus Manajer Proyek adalah ....',
    options: ['A. Potensi konflik ganda perihal prioritas tugas dan kebingungan loyalitas komando', 'B. Karyawan kekurangan pekerjaan', 'C. Keputusan menjadi terlalu cepat', 'D. Biaya operasional menjadi Rp 0', 'E. Tidak ada pimpinan'],
    answer: 'A. Potensi konflik ganda perihal prioritas tugas dan kebingungan loyalitas komando',
    explanation: 'Dual reporting dalam struktur matriks rawan memicu konflik prioritas antara manajer divisi dan manajer proyek.',
    xp: 200
  },
  {
    id: 'b6-q025', chapter: 6, type: 'multiple_choice', difficulty: 'hard',
    question: 'Di sebuah hotel, Sales Manager langsung memerintahkan Room Attendant (Housekeeping) untuk membersihkan kamar VIP tanpa berkoordinasi dengan Executive Housekeeper. Dampak dari tindakan ini terhadap iklim organisasi adalah ....',
    options: ['A. Merusak tata hubungan kerja, memicu salah paham antar-manajer, dan merusak hierarki organisasi', 'B. Meningkatkan keakraban antar divisi', 'C. Mempercepat pembersihan kamar 100%', 'D. Diberi penghargaan oleh pemilik hotel', 'E. Tidak berpengaruh apa-apa'],
    answer: 'A. Merusak tata hubungan kerja, memicu salah paham antar-manajer, dan merusak hierarki organisasi',
    explanation: 'Melompati rantai komando (bypassing line of command) mengganggu koordinasi dan otoritas manajer departemen.',
    xp: 200
  },
  {
    id: 'b6-q026', chapter: 6, type: 'multiple_choice', difficulty: 'hard',
    question: 'Bandingkan dampak antara organisasi dengan Struktur "Tall Structure" (Banyak Tingkatan Hierarki) dan "Flat Structure" (Hierarki Datar). Keunggulan Flat Structure adalah ....',
    options: ['A. Komunikasi antar tingkat lebih cepat dan birokrasi keputusan lebih singkat', 'B. Memiliki banyak jenjang promosi jabatan', 'C. Pengawasan manajer sangat ketat', 'D. Jumlah manajer sangat banyak', 'E. Tidak memerlukan koordinasi'],
    answer: 'A. Komunikasi antar tingkat lebih cepat dan birokrasi keputusan lebih singkat',
    explanation: 'Flat structure memangkas jarak antara pimpinan dan staf sehingga informasi mengalir lebih cepat.',
    xp: 200
  },
  {
    id: 'b6-q027', chapter: 6, type: 'multiple_choice', difficulty: 'hard',
    question: 'Mengapa pembagian kerja (Division of Labor) dalam struktur organisasi perhotelan HARUS disesuaikan dengan Standar Operasional Prosedur (SOP)?',
    options: ['A. Agar tidak terjadi tumpang tindih (overlapping) tugas dan mutu pelayanan tetap terstandar', 'B. Agar karyawan cepat pulang', 'C. Mengurangi jumlah gaji', 'D. Membingungkan tamu hotel', 'E. Syarat pembelian alat kantor'],
    answer: 'A. Agar tidak terjadi tumpang tindih (overlapping) tugas dan mutu pelayanan tetap terstandar',
    explanation: 'SOP dan pembagian kerja yang presisi menjamin setiap elemen tugas terlaksana tanpa lempar tanggung jawab.',
    xp: 200
  },
  {
    id: 'b6-q028', chapter: 6, type: 'multiple_choice', difficulty: 'hard',
    question: 'Dalam situasi krisis (seperti kebakaran di hotel), jalur komando dalam struktur organisasi berubah menjadi ....',
    options: ['A. Komando Darurat Terpusat (Emergency Chain of Command) di bawah Chief Security / Incident Commander', 'B. Bebas tanpa pimpinan', 'C. Diserahkan kepada tamu hotel', 'D. Menunggu hasil rapat pemegang saham minggu depan', 'E. Mengikuti instruksi kasir'],
    answer: 'A. Komando Darurat Terpusat (Emergency Chain of Command) di bawah Chief Security / Incident Commander',
    explanation: 'Saat darurat, struktur komando dialihkan ke tim tanggap darurat keselamatan jiwa untuk instruksi cepat tanpa birokrasi biasa.',
    xp: 200
  },
  {
    id: 'b6-q029', chapter: 6, type: 'multiple_choice', difficulty: 'hard',
    question: 'Seorang manajer yang enggan melakukan delegasi wewenang dan ingin memutuskan seluruh detail kecil pekerjaan sendiri cenderung mengalami keterbatasan berupa ....',
    options: ['A. Bottleneck (kemacetan keputusan), kecapekan ekstrem (burnout), dan menghambat perkembangan bawahan', 'B. Organisasi semakin fleksibel', 'C. Karyawan menjadi sangat mandiri', 'D. Keuntungan hotel melonjak', 'E. Penghematan kertas 100%'],
    answer: 'A. Bottleneck (kemacetan keputusan), kecapekan ekstrem (burnout), dan menghambat perkembangan bawahan',
    explanation: 'Sentralisasi berlebihan tanpa delegasi menciptakan penumpukan keputusan di manajer.',
    xp: 200
  },
  {
    id: 'b6-q030', chapter: 6, type: 'multiple_choice', difficulty: 'hard',
    question: 'Bagaimana peran teknologi sistem informasi (seperti Property Management System / PMS Hotel) mempengaruhi bentuk struktur organisasi modern?',
    options: ['A. Mendorong struktur menjadi lebih ramping (flatter) karena alur data dan laporan berlangsung secara real-time digital', 'B. Membuat hierarki organisasi semakin panjang', 'C. Menghapuskan posisi General Manager', 'D. Mewajibkan penambahan 100 manajer baru', 'E. Menghilangkan fungsi kebersihan'],
    answer: 'A. Mendorong struktur menjadi lebih ramping (flatter) karena alur data dan laporan berlangsung secara real-time digital',
    explanation: 'Teknologi informasi mengotomatiskan laporan berkala, mengurangi tingkatan manajer perantara (middle management).',
    xp: 200
  }
];

export default bab6Questions;
