// =====================================================
// BAB 1 — RUANG LINGKUP ADMINISTRASI
// 30 Soal: 40% Pemahaman | 30% Penerapan | 20% Analisis | 10% HOTS
// Sumber: eBook Administrasi Umum Kelas X SMK (Wayan Sasmita Pratama)
// =====================================================

import type { Question } from '../../types';

const bab1Questions: Question[] = [
  // === PEMAHAMAN (12 soal) ===
  {
    id: 'b1-q001', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Administrasi adalah proses kerja sama antara dua orang atau lebih untuk mencapai tujuan secara ….',
    options: ['A. Bebas dan mandiri', 'B. Efektif dan efisien', 'C. Rahasia dan tertutup', 'D. Cepat tanpa perencanaan', 'E. Pribadi dan tidak terstruktur'],
    answer: 'B. Efektif dan efisien',
    explanation: 'Menurut buku, administrasi adalah proses kerja sama yang terencana dan terorganisir untuk mencapai tujuan tertentu secara EFEKTIF dan EFISIEN.',
    xp: 100,
  },
  {
    id: 'b1-q002', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Secara etimologis, kata administrasi berasal dari bahasa ….',
    options: ['A. Yunani', 'B. Belanda', 'C. Latin', 'D. Inggris', 'E. Jerman'],
    answer: 'C. Latin',
    explanation: 'Kata administrasi berasal dari bahasa Latin: "ad" (kepada/untuk) dan "ministrare" (melayani/membantu).',
    xp: 100,
  },
  {
    id: 'b1-q003', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Kata "ministrare" dalam bahasa Latin berarti ….',
    options: ['A. Memerintah', 'B. Mengatur', 'C. Melayani', 'D. Menghitung', 'E. Menulis'],
    answer: 'C. Melayani',
    explanation: '"Ministrare" berarti melayani, membantu, atau mengurus. Jadi administrasi pada dasarnya adalah kegiatan pelayanan untuk membantu tercapainya tujuan.',
    xp: 100,
  },
  {
    id: 'b1-q004', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Menurut Sondang P. Siagian, administrasi adalah keseluruhan proses kerja sama yang didasarkan atas ….',
    options: ['A. Keinginan pimpinan', 'B. Rasionalitas tertentu', 'C. Modal yang besar', 'D. Teknologi tinggi', 'E. Jumlah pegawai'],
    answer: 'B. Rasionalitas tertentu',
    explanation: 'Menurut Sondang P. Siagian: "Administrasi adalah keseluruhan proses kerja sama antara dua orang atau lebih yang didasarkan atas rasionalitas tertentu untuk mencapai tujuan yang telah ditentukan sebelumnya."',
    xp: 100,
  },
  {
    id: 'b1-q005', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Menurut The Liang Gie, administrasi adalah rangkaian kegiatan ….',
    options: ['A. Produksi barang', 'B. Penataan terhadap pekerjaan pokok', 'C. Distribusi hasil kerja', 'D. Promosi produk', 'E. Konsumsi sumber daya'],
    answer: 'B. Penataan terhadap pekerjaan pokok',
    explanation: 'The Liang Gie: "Administrasi adalah rangkaian kegiatan penataan terhadap pekerjaan pokok yang dilakukan oleh sekelompok orang dalam kerja sama untuk mencapai tujuan tertentu."',
    xp: 100,
  },
  {
    id: 'b1-q006', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Administrasi dalam arti sempit sering diartikan sebagai kegiatan ….',
    options: ['A. Produksi barang', 'B. Pemasaran produk', 'C. Tulis-menulis dan pencatatan', 'D. Penelitian', 'E. Distribusi barang'],
    answer: 'C. Tulis-menulis dan pencatatan',
    explanation: 'Dalam arti sempit, administrasi sering diartikan sebagai kegiatan tulis-menulis, pencatatan, dan pengelolaan dokumen.',
    xp: 100,
  },
  {
    id: 'b1-q007', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Fungsi administrasi menurut Quible (2001) terdiri dari berapa jenis?',
    options: ['A. 3 jenis', 'B. 4 jenis', 'C. 5 jenis', 'D. 6 jenis', 'E. 7 jenis'],
    answer: 'C. 5 jenis',
    explanation: 'Menurut Quible (2001), fungsi administrasi ada 5: Fungsi Rutin, Fungsi Teknis, Fungsi Analisis, Fungsi Interpersonal, dan Fungsi Manajerial.',
    xp: 100,
  },
  {
    id: 'b1-q008', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Fungsi administrasi yang membutuhkan pemikiran minimal seperti pengarsipan dan penggandaan disebut ….',
    options: ['A. Fungsi Teknis', 'B. Fungsi Manajerial', 'C. Fungsi Analisis', 'D. Fungsi Rutin', 'E. Fungsi Interpersonal'],
    answer: 'D. Fungsi Rutin',
    explanation: 'Fungsi Rutin adalah fungsi administrasi yang membutuhkan pemikiran minimal, mencakup pengarsipan dan penggandaan. Biasanya dilakukan oleh staf administrasi setiap hari.',
    xp: 100,
  },
  {
    id: 'b1-q009', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Unsur utama dalam administrasi adalah adanya ….',
    options: ['A. Modal besar', 'B. Gedung mewah', 'C. Kerja sama', 'D. Mesin canggih', 'E. Teknologi tinggi'],
    answer: 'C. Kerja sama',
    explanation: 'Unsur paling mendasar dalam administrasi adalah kerja sama antara dua orang atau lebih untuk mencapai tujuan bersama.',
    xp: 100,
  },
  {
    id: 'b1-q010', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Administrasi sangat penting dalam organisasi karena dapat ….',
    options: ['A. Menghambat pekerjaan', 'B. Menimbulkan konflik', 'C. Memperlancar kegiatan', 'D. Menambah beban kerja', 'E. Mengurangi kerja sama'],
    answer: 'C. Memperlancar kegiatan',
    explanation: 'Administrasi penting karena memperlancar kegiatan organisasi, menjaga keteraturan, dan membantu mencapai tujuan secara efektif dan efisien.',
    xp: 100,
  },
  {
    id: 'b1-q011', chapter: 1, type: 'multiple_choice', difficulty: 'easy',
    question: 'Tujuan administrasi yang berkaitan dengan penghematan waktu, tenaga, dan biaya adalah ….',
    options: ['A. Mencapai tujuan organisasi', 'B. Menciptakan efisiensi kerja', 'C. Menjaga ketertiban', 'D. Meningkatkan pelayanan', 'E. Memperluas jaringan'],
    answer: 'B. Menciptakan efisiensi kerja',
    explanation: 'Menciptakan Efisiensi Kerja adalah tujuan administrasi yang membuat pekerjaan lebih teratur sehingga waktu, tenaga, dan biaya dapat digunakan secara hemat.',
    xp: 100,
  },
  {
    id: 'b1-q012', chapter: 1, type: 'true_false', difficulty: 'easy',
    question: 'BENAR atau SALAH: Tanpa administrasi yang baik, kegiatan organisasi dapat berjalan tidak teratur dan sulit mencapai tujuan.',
    options: ['A. BENAR', 'B. SALAH'],
    answer: 'A. BENAR',
    explanation: 'BENAR. Tanpa administrasi yang baik, kegiatan organisasi akan berjalan tidak teratur, kurang efisien, dan sulit mencapai tujuan yang telah ditetapkan.',
    xp: 80,
  },

  // === PENERAPAN (9 soal) ===
  {
    id: 'b1-q013', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'Pak Rudi sebagai manajer hotel menyusun jadwal kerja karyawan untuk bulan depan. Kegiatan ini termasuk tahapan administrasi ….',
    options: ['A. Actuating', 'B. Controlling', 'C. Planning', 'D. Organizing', 'E. Staffing'],
    answer: 'C. Planning',
    explanation: 'Menyusun jadwal kerja termasuk dalam Planning (Perencanaan) — kegiatan menyusun rencana kerja agar tujuan organisasi dapat tercapai.',
    xp: 100,
  },
  {
    id: 'b1-q014', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'Seorang manajer Front Office membagi tugas kepada resepsionis, bell boy, dan concierge sesuai keahlian masing-masing. Ini adalah contoh fungsi ….',
    options: ['A. Planning', 'B. Controlling', 'C. Actuating', 'D. Organizing', 'E. Evaluating'],
    answer: 'D. Organizing',
    explanation: 'Membagi tugas dan tanggung jawab kepada setiap anggota organisasi adalah fungsi Organizing (Pengorganisasian).',
    xp: 100,
  },
  {
    id: 'b1-q015', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'Staf housekeeping sedang membersihkan kamar tamu dan mencatat hasilnya dalam cleaning checklist. Ini termasuk tahapan ….',
    options: ['A. Planning', 'B. Organizing', 'C. Actuating', 'D. Controlling', 'E. Staffing'],
    answer: 'C. Actuating',
    explanation: 'Menjalankan rencana yang telah disusun (membersihkan kamar sesuai prosedur) adalah Actuating (Pelaksanaan).',
    xp: 100,
  },
  {
    id: 'b1-q016', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'General Manager hotel memeriksa laporan kerja bulanan dan mengoreksi kesalahan administrasi. Ini adalah contoh fungsi ….',
    options: ['A. Planning', 'B. Organizing', 'C. Actuating', 'D. Controlling', 'E. Recruiting'],
    answer: 'D. Controlling',
    explanation: 'Memeriksa laporan kerja dan mengevaluasi hasil kegiatan adalah Controlling (Pengawasan) — memantau pekerjaan agar sesuai rencana.',
    xp: 100,
  },
  {
    id: 'b1-q017', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'Staf IT Hotel mengoperasikan sistem Property Management System (PMS) dan membuat laporan data tamu. Ini adalah contoh fungsi administrasi ….',
    options: ['A. Fungsi Rutin', 'B. Fungsi Teknis', 'C. Fungsi Analisis', 'D. Fungsi Interpersonal', 'E. Fungsi Manajerial'],
    answer: 'B. Fungsi Teknis',
    explanation: 'Fungsi Teknis memerlukan pendapat, keputusan, dan keterampilan seperti mengoperasikan program aplikasi komputer. Staf IT yang mengoperasikan PMS termasuk fungsi ini.',
    xp: 100,
  },
  {
    id: 'b1-q018', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'Admin hotel membuat anggaran pembelian bahan makanan, mengatur jadwal karyawan, dan mengevaluasi kinerja bulanan. Ini adalah fungsi ….',
    options: ['A. Fungsi Rutin', 'B. Fungsi Teknis', 'C. Fungsi Analisis', 'D. Fungsi Interpersonal', 'E. Fungsi Manajerial'],
    answer: 'E. Fungsi Manajerial',
    explanation: 'Fungsi Manajerial membutuhkan perencanaan, pengorganisasian, pengukuran, dan pemotivasian seperti pembuatan anggaran dan pengevaluasian karyawan.',
    xp: 100,
  },
  {
    id: 'b1-q019', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'Contoh kegiatan administrasi di hotel Front Office adalah ….',
    options: ['A. Memasak makanan tamu', 'B. Mencatat surat masuk dan keluar', 'C. Membersihkan kamar tamu', 'D. Mengantar bagasi tamu', 'E. Upacara bendera'],
    answer: 'B. Mencatat surat masuk dan keluar',
    explanation: 'Mencatat surat masuk dan keluar adalah kegiatan administrasi yang umum dilakukan di kantor, termasuk Front Office hotel.',
    xp: 100,
  },
  {
    id: 'b1-q020', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'Ruang lingkup administrasi yang berkaitan dengan pengelolaan gaji dan pembayaran karyawan hotel adalah ….',
    options: ['A. Administrasi perkantoran', 'B. Administrasi keuangan', 'C. Administrasi kepegawaian', 'D. Administrasi pelayanan', 'E. Administrasi sarana'],
    answer: 'B. Administrasi keuangan',
    explanation: 'Administrasi keuangan berkaitan dengan pengelolaan keuangan termasuk pembayaran gaji, pengeluaran, dan pemasukan hotel.',
    xp: 100,
  },
  {
    id: 'b1-q021', chapter: 1, type: 'multiple_choice', difficulty: 'medium',
    question: 'Perencanaan yang baik dalam administrasi akan menghasilkan kegiatan yang ….',
    options: ['A. Tidak terarah', 'B. Teratur dan sistematis', 'C. Kacau', 'D. Bebas aturan', 'E. Tidak terkendali'],
    answer: 'B. Teratur dan sistematis',
    explanation: 'Perencanaan yang baik akan menghasilkan kegiatan yang teratur, sistematis, dan terarah menuju pencapaian tujuan organisasi.',
    xp: 100,
  },

  // === ANALISIS (6 soal) ===
  {
    id: 'b1-q022', chapter: 1, type: 'multiple_choice', difficulty: 'hard',
    question: 'Hotel Bali Indah mengalami masalah: sering terjadi kesalahan pemesanan kamar dan kehilangan dokumen tamu. Fungsi administrasi yang paling tidak berjalan dengan baik adalah ….',
    options: ['A. Planning dan Organizing', 'B. Actuating dan Staffing', 'C. Controlling dan Evaluating', 'D. Fungsi Manajerial dan Rutin', 'E. Fungsi Teknis dan Interpersonal'],
    answer: 'D. Fungsi Manajerial dan Rutin',
    explanation: 'Kesalahan pemesanan (planning lemah) dan kehilangan dokumen (fungsi rutin/pengarsipan buruk) menunjukkan lemahnya Fungsi Manajerial dan Fungsi Rutin administrasi.',
    xp: 120,
  },
  {
    id: 'b1-q023', chapter: 1, type: 'multiple_choice', difficulty: 'hard',
    question: 'Mengapa administrasi modern banyak bergantung pada teknologi informasi?',
    options: [
      'A. Karena teknologi lebih mahal dan eksklusif',
      'B. Karena teknologi mempercepat, mengakurasikan, dan mengefisienkan pengelolaan data',
      'C. Karena pegawai tidak mau bekerja manual lagi',
      'D. Karena pemerintah mewajibkan penggunaan teknologi',
      'E. Karena teknologi dapat menggantikan seluruh fungsi manusia',
    ],
    answer: 'B. Karena teknologi mempercepat, mengakurasikan, dan mengefisienkan pengelolaan data',
    explanation: 'Administrasi modern menggunakan teknologi informasi karena dapat mempercepat proses, meningkatkan akurasi data, dan mengefisienkan pekerjaan administrasi.',
    xp: 120,
  },
  {
    id: 'b1-q024', chapter: 1, type: 'multiple_choice', difficulty: 'hard',
    question: 'Apa perbedaan utama antara fungsi administrasi dan fungsi manajemen?',
    options: [
      'A. Tidak ada perbedaan sama sekali',
      'B. Administrasi menentukan tujuan dan kebijakan; manajemen melaksanakan kegiatan dalam batas kebijakan tersebut',
      'C. Manajemen menentukan tujuan; administrasi melaksanakannya',
      'D. Administrasi hanya untuk perusahaan besar',
      'E. Manajemen hanya mengawasi keuangan',
    ],
    answer: 'B. Administrasi menentukan tujuan dan kebijakan; manajemen melaksanakan kegiatan dalam batas kebijakan tersebut',
    explanation: 'Menurut buku: Fungsi administrasi adalah untuk menentukan tujuan organisasi dan merumuskan kebijaksanaan umum, sedangkan manajemen bersifat melaksanakan kegiatan dalam rangka pencapaian tujuan.',
    xp: 120,
  },
  {
    id: 'b1-q025', chapter: 1, type: 'multiple_choice', difficulty: 'hard',
    question: 'Staf admin hotel yang mengkoordinasikan tim proyek renovasi dan mengambil keputusan teknis termasuk menjalankan fungsi ….',
    options: ['A. Fungsi Rutin', 'B. Fungsi Teknis', 'C. Fungsi Interpersonal', 'D. Fungsi Manajerial', 'E. Fungsi Analisis'],
    answer: 'C. Fungsi Interpersonal',
    explanation: 'Fungsi Interpersonal membutuhkan penilaian dan analisa sebagai dasar pengambilan keputusan serta keterampilan berhubungan dengan orang lain, seperti mengkoordinasikan tim proyek.',
    xp: 120,
  },
  {
    id: 'b1-q026', chapter: 1, type: 'multiple_choice', difficulty: 'hard',
    question: 'Sebuah hotel baru tidak memiliki sistem administrasi yang baik. Dampak yang paling mungkin terjadi adalah ….',
    options: [
      'A. Pelayanan tamu semakin meningkat',
      'B. Keuntungan hotel bertambah besar',
      'C. Operasional tidak teratur, kehilangan dokumen, dan pelayanan buruk',
      'D. Karyawan semakin produktif',
      'E. Biaya operasional berkurang',
    ],
    answer: 'C. Operasional tidak teratur, kehilangan dokumen, dan pelayanan buruk',
    explanation: 'Tanpa sistem administrasi yang baik, operasional hotel akan tidak teratur, sering terjadi kehilangan dokumen penting, dan kualitas pelayanan kepada tamu akan menurun.',
    xp: 120,
  },
  {
    id: 'b1-q027', chapter: 1, type: 'multiple_choice', difficulty: 'hard',
    question: 'Dalam konteks industri perhotelan, tujuan administrasi "Meningkatkan Pelayanan" dapat diwujudkan melalui ….',
    options: [
      'A. Mengurangi jumlah karyawan',
      'B. Pengelolaan data tamu yang akurat dan sistem pemesanan yang terorganisir',
      'C. Menaikkan harga kamar',
      'D. Membatasi waktu check-in',
      'E. Mengurangi fasilitas hotel',
    ],
    answer: 'B. Pengelolaan data tamu yang akurat dan sistem pemesanan yang terorganisir',
    explanation: 'Administrasi mendukung pelayanan yang cepat, tepat, dan memuaskan. Dalam perhotelan, ini diwujudkan melalui sistem data tamu yang akurat dan pemesanan yang terorganisir dengan baik.',
    xp: 120,
  },

  // === HOTS (3 soal) ===
  {
    id: 'b1-q028', chapter: 1, type: 'multiple_choice', difficulty: 'hots',
    question: 'Seorang manajer hotel menemukan bahwa karyawan sering bingung dengan tugas masing-masing dan sering terjadi tumpang tindih pekerjaan. Berdasarkan konsep POAC, langkah paling tepat yang harus dilakukan pertama kali adalah ….',
    options: [
      'A. Langsung memecat karyawan yang bermasalah',
      'B. Memperkuat fungsi Organizing dengan memperjelas pembagian tugas dan wewenang',
      'C. Menambah jumlah karyawan sebanyak-banyaknya',
      'D. Mengabaikan masalah dan fokus pada pelayanan tamu',
      'E. Langsung melakukan controlling tanpa perencanaan',
    ],
    answer: 'B. Memperkuat fungsi Organizing dengan memperjelas pembagian tugas dan wewenang',
    explanation: 'Tumpang tindih pekerjaan dan kebingungan tugas menunjukkan lemahnya Organizing. Solusinya adalah memperjelas pembagian tugas, wewenang, dan tanggung jawab setiap karyawan melalui struktur yang baik.',
    xp: 150,
  },
  {
    id: 'b1-q029', chapter: 1, type: 'multiple_choice', difficulty: 'hots',
    question: 'Hotel A memiliki administrasi yang sangat baik tetapi pelayanan tetap buruk. Hotel B memiliki pelayanan yang sangat baik tetapi administrasi kacau. Dalam jangka panjang, hotel mana yang lebih berpotensi sukses dan mengapa?',
    options: [
      'A. Hotel B, karena pelayanan langsung mempengaruhi kepuasan tamu',
      'B. Hotel A, karena administrasi yang baik menjadi fondasi sistematis untuk perbaikan pelayanan',
      'C. Keduanya sama saja peluangnya',
      'D. Tidak bisa ditentukan tanpa data keuangan',
      'E. Hotel B, karena tamu tidak peduli dengan administrasi',
    ],
    answer: 'B. Hotel A, karena administrasi yang baik menjadi fondasi sistematis untuk perbaikan pelayanan',
    explanation: 'Administrasi yang baik menjadi fondasi yang dapat digunakan untuk memperbaiki pelayanan secara sistematis. Hotel dengan administrasi kacau akan kesulitan menjaga konsistensi dan kualitas dalam jangka panjang.',
    xp: 150,
  },
  {
    id: 'b1-q030', chapter: 1, type: 'multiple_choice', difficulty: 'hots',
    question: 'Di era digital, seorang staf admin hotel mengusulkan penggunaan software manajemen hotel berbasis cloud. Dari perspektif fungsi administrasi, usulan ini paling berkaitan dengan ….',
    options: [
      'A. Hanya Fungsi Rutin karena menyimpan data',
      'B. Fungsi Teknis saja karena menggunakan komputer',
      'C. Kombinasi Fungsi Teknis, Analisis, dan Manajerial karena mendukung operasional, analisis data, dan pengambilan keputusan',
      'D. Fungsi Interpersonal karena melibatkan tim',
      'E. Tidak ada hubungannya dengan fungsi administrasi',
    ],
    answer: 'C. Kombinasi Fungsi Teknis, Analisis, dan Manajerial karena mendukung operasional, analisis data, dan pengambilan keputusan',
    explanation: 'Software manajemen berbasis cloud mencakup: Fungsi Teknis (mengoperasikan sistem), Fungsi Analisis (menganalisis laporan), dan Fungsi Manajerial (mendukung pengambilan keputusan strategis).',
    xp: 150,
  },
];

export default bab1Questions;

export function getRandomQuestions(count: number = 10): Question[] {
  const shuffled = [...bab1Questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
