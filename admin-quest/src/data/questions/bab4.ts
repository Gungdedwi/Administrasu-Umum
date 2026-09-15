// =====================================================
// BAB 4 — SISTEM KEARSIPAN
// 30 Soal: Pemahaman | Penerapan | Analisis | HOTS
// Sumber: eBook Administrasi Umum Kelas X SMK
// =====================================================

import type { Question } from '../../types';

const bab4Questions: Question[] = [
  // Pemahaman (12 soal)
  {
    id: 'b4-q001', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Arsip adalah rekaman kegiatan atau peristiwa dalam berbagai bentuk dan media sesuai dengan perkembangan teknologi informasi. Kata "arsip" berasal dari bahasa Yunani, yaitu ....',
    options: ['A. Arche / Archium', 'B. Archive', 'C. Arken', 'D. Artis', 'E. Administrator'],
    answer: 'A. Arche / Archium',
    explanation: 'Kata arsip berasal dari bahasa Yunani "Arche" atau "Archium" yang berarti permulaan, jabatan, atau gedung pemerintahan.',
    xp: 100
  },
  {
    id: 'b4-q002', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Sistem penyimpanan arsip yang didasarkan pada urutan abjad A sampai Z nama orang, perusahaan, atau organisasi disebut sistem ....',
    options: ['A. Sistem Abjad (Alphabetical System)', 'B. Sistem Subjek', 'C. Sistem Tanggal (Chronological)', 'D. Sistem Wilayah (Geographical)', 'E. Sistem Nomor'],
    answer: 'A. Sistem Abjad (Alphabetical System)',
    explanation: 'Sistem abjad menyusun arsip menurut urutan abjad nama orang/badan usaha.',
    xp: 100
  },
  {
    id: 'b4-q003', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Sistem kearsipan yang mengelompokkan dokumen berdasarkan lokasi tempat atau daerah asal/tujuan surat dinamakan ....',
    options: ['A. Sistem Abjad', 'B. Sistem Wilayah (Geografis)', 'C. Sistem Nomor (Numeric)', 'D. Sistem Pokok Masalah', 'E. Sistem Kronologis'],
    answer: 'B. Sistem Wilayah (Geografis)',
    explanation: 'Sistem geografis/wilayah mengelompokkan arsip berdasarkan pembagian wilayah seperti provinsi, kota, atau daerah operasional.',
    xp: 100
  },
  {
    id: 'b4-q004', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Lembar pembatas yang terbuat dari kertas tebal / karton untuk memisahkan kelompok arsip dalam folder dinamakan ....',
    options: ['A. Guide / Sekat Arsip', 'B. Map Snelhefter', 'C. Perforator', 'D. Stapler', 'E. Tickler File'],
    answer: 'A. Guide / Sekat Arsip',
    explanation: 'Guide adalah lembaran sekat petunjuk untuk memisahkan kelompok arsip dalam filing cabinet.',
    xp: 100
  },
  {
    id: 'b4-q005', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Alat penyimpanan arsip berbentuk lemari besi berlaci tarik tempat meletakkan hanging folder dinamakan ....',
    options: ['A. Filing Cabinet', 'B. Ordner', 'C. Rotary Filing', 'D. Box File', 'E. HVS Rack'],
    answer: 'A. Filing Cabinet',
    explanation: 'Filing Cabinet adalah lemari khusus arsip dengan beberapa laci tarik vertikal.',
    xp: 100
  },
  {
    id: 'b4-q006', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Peralatan kantor berlubang dua yang digunakan untuk melubangi tepi kertas dokumen agar bisa dimasukkan ke ordner adalah ....',
    options: ['A. Perforator / Pelubang Kertas', 'B. Stapler', 'C. Numerator', 'D. Cutter', 'E. Stempel'],
    answer: 'A. Perforator / Pelubang Kertas',
    explanation: 'Perforator digunakan untuk melubangi kertas dokumen secara rapi.',
    xp: 100
  },
  {
    id: 'b4-q007', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Arsip yang masih sering dipergunakan dalam kegiatan operasional sehari-hari kantor tergolong jenis arsip ....',
    options: ['A. Arsip Aktif', 'B. Arsip Inaktif', 'C. Arsip Statis', 'D. Arsip Musnah', 'E. Arsip Gelap'],
    answer: 'A. Arsip Aktif',
    explanation: 'Arsip aktif adalah arsip yang frequensi penggunaannya masih tinggi dalam pekerjaan sehari-hari.',
    xp: 100
  },
  {
    id: 'b4-q008', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Map arsip yang memiliki jepitan besi di dalamnya untuk menjepit dokumen yang telah dilubangi dinamakan ....',
    options: ['A. Map Snelhefter', 'B. Stopmap Folio', 'C. Folder gantung', 'D. Amplop cokelat', 'E. Map gantung'],
    answer: 'A. Map Snelhefter',
    explanation: 'Map snelhefter dilengkapi jepitan kawat/plastik di bagian tengahnya.',
    xp: 100
  },
  {
    id: 'b4-q009', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dua metode utama penyimpanan arsip berdasarkan lokasi pemusatan data yaitu ....',
    options: ['A. Sentralisasi dan Desentralisasi', 'B. Modern dan Tradisional', 'C. Otomatis dan Manual', 'D. Lokal dan Internasional', 'E. Rahasia dan Umum'],
    answer: 'A. Sentralisasi dan Desentralisasi',
    explanation: 'Sentralisasi memusatkan seluruh arsip di unit kearsipan pusat, sedangkan desentralisasi membagi arsip di masing-masing unit kerja.',
    xp: 100
  },
  {
    id: 'b4-q010', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Alat pengingat tanggal yang terdiri dari kotak-kotak berlabel angka tanggal (1-31) dan bulan (Jan-Des) disebut ....',
    options: ['A. Tickler File (Kotak Pengingat)', 'B. Filing Cabinet', 'C. Cardex', 'D. Ordner', 'E. Map Gantung'],
    answer: 'A. Tickler File (Kotak Pengingat)',
    explanation: 'Tickler file digunakan untuk menyimpan kartu atau dokumen pengingat jatuh tempo tugas/tagihan.',
    xp: 100
  },
  {
    id: 'b4-q011', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Prosedur pemusnahan dokumen arsip yang sudah tidak bernilai guna dan habis masa simpan dinamakan ....',
    options: ['A. Penyusutan / Pemusnahan Arsip', 'B. Duplikasi Arsip', 'C. Digitalisasi', 'D. Restorasi Arsip', 'E. Pengkodean'],
    answer: 'A. Penyusutan / Pemusnahan Arsip',
    explanation: 'Pemusnahan arsip dilakukan terhadap dokumen yang telah habis Jadwal Retensi Arsip-nya (JRA).',
    xp: 100
  },
  {
    id: 'b4-q012', chapter: 4, type: 'multiple_choice', difficulty: 'easy',
    question: 'Map besar berbahan karton tebal berdinding kokoh dengan kaitan tuas pengunci besi dinamakan ....',
    options: ['A. Ordner', 'B. Map Plastik', 'C. Stopmap', 'D. Amplop', 'E. Portofolio'],
    answer: 'A. Ordner',
    explanation: 'Ordner adalah map besar dengan kawat pengunci mekanis untuk menyimpan berkas jumlah banyak.',
    xp: 100
  },

  // Penerapan (10 soal)
  {
    id: 'b4-q013', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Mengindeks nama perorangan "Dr. Agung Dwi Angga, S.Pd." untuk sistem abjad yang BENAR adalah ....',
    options: ['A. Angga, Agung Dwi (Dr., S.Pd.)', 'B. Dr. Agung Dwi Angga, S.Pd.', 'C. Agung Dwi Angga Dr S.Pd', 'D. S.Pd., Dr. Angga Agung Dwi', 'E. Dwi Angga Agung Dr.'],
    answer: 'A. Angga, Agung Dwi (Dr., S.Pd.)',
    explanation: 'Aturan mengindeks nama orang: Nama belakang (Angga) -> Nama depan & tengah (Agung Dwi) -> Gelar diletakkan di dalam kurung di paling belakang.',
    xp: 150
  },
  {
    id: 'b4-q014', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Mengindeks nama badan usaha "PT Hotel Sanur Bali" yang BENAR untuk kearsipan sistem abjad adalah ....',
    options: ['A. Hotel Sanur Bali, PT', 'B. PT Hotel Sanur Bali', 'C. Sanur Bali Hotel PT', 'D. Bali Hotel Sanur PT', 'E. Perseroan Terbatas Hotel Sanur Bali'],
    answer: 'A. Hotel Sanur Bali, PT',
    explanation: 'Untuk nama badan hukum perusahaan, bentuk PT/CV diindeks di belakang nama utama perusahaan.',
    xp: 150
  },
  {
    id: 'b4-q015', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Urutan langkah-langkah penyimpanan arsip (filing steps) yang tepat adalah ....',
    options: ['A. Memeriksa -> Mengindeks -> Memberi Kode -> Menyortir -> Menempatkan', 'B. Menempatkan -> Memeriksa -> Mengindeks -> Menyortir', 'C. Mengindeks -> Memeriksa -> Menempatkan -> Menyortir', 'D. Menyortir -> Memeriksa -> Memberi Kode -> Menempatkan', 'E. Memeriksa -> Menempatkan -> Mengindeks'],
    answer: 'A. Memeriksa -> Mengindeks -> Memberi Kode -> Menyortir -> Menempatkan',
    explanation: 'Langkah baku kearsipan: 1. Inspecting (Memeriksa tanda pelepas), 2. Indexing (Mengindeks), 3. Coding (Mengkode), 4. Sorting (Menyortir), 5. Filing (Menempatkan).',
    xp: 150
  },
  {
    id: 'b4-q016', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Apabila staf Front Office hotel menyertakan tanda pelepasan (release mark) berupa tulisan "Depost/File" dan paraf pimpinan di pojok surat, hal ini menandakan surat tersebut ....',
    options: ['A. Siap untuk disimpan ke dalam arsip', 'B. Harus segera dibuang ke tempat sampah', 'C. Harus dikirim ulang ke ekspedisi', 'D. Belum dibaca sama sekali', 'E. Rahasia negara'],
    answer: 'A. Siap untuk disimpan ke dalam arsip',
    explanation: 'Release mark adalah tanda dari pimpinan bahwa surat sudah selesai diproses dan dapat diarsipkan.',
    xp: 150
  },
  {
    id: 'b4-q017', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Dalam kearsipan sistem tanggal (kronologis), jika ada surat tertanggal 15 September 2026, maka urutan penyimpanannya adalah ....',
    options: ['A. Laci 2026 -> Sekat Bulan September -> Folder Tanggal 15', 'B. Laci Tanggal 15 -> Sekat September -> Folder 2026', 'C. Laci September -> Sekat 2026 -> Folder 15', 'D. Folder 15 -> Laci 2026 -> Sekat Sep', 'E. Bebas ditaruh di laci mana saja'],
    answer: 'A. Laci 2026 -> Sekat Bulan September -> Folder Tanggal 15',
    explanation: 'Hierarki sistem tanggal: Tahun sebagai Judul Laci -> Bulan sebagai Sekat (Guide) -> Tanggal sebagai Folder.',
    xp: 150
  },
  {
    id: 'b4-q018', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Kartu pinjam arsip yang diisi peminjam saat meminjam berkas dinamakan ....',
    options: ['A. Out Slip / Lembar Pinjam Arsip (Out Card)', 'B. Karcis parkir', 'C. Bon tunai', 'D. Kartu persediaan', 'E. Index Card'],
    answer: 'A. Out Slip / Lembar Pinjam Arsip (Out Card)',
    explanation: 'Out slip diletakkan di posisi berkas yang dipinjam untuk melacak siapa peminjam dan kapan harus dikembalikan.',
    xp: 150
  },
  {
    id: 'b4-q019', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Hotel Grand Hyatt ingin mengarsipkan berkas reservasi berdasarkan daerah asal negara/kota tamu (Jakarta, Surabaya, Denpasar, Tokyo). Sistem arsip yang PALING cocok adalah ....',
    options: ['A. Sistem Wilayah (Geografis)', 'B. Sistem Nomor Urut', 'C. Sistem Warna', 'D. Sistem Abjad Nama Tamu', 'E. Sistem Tanggal Lahir'],
    answer: 'A. Sistem Wilayah (Geografis)',
    explanation: 'Karena pengelompokan berdasarkan domisili/daerah asal, sistem geografis adalah pilihan tepat.',
    xp: 150
  },
  {
    id: 'b4-q020', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Alat mekanis berputar yang digunakan untuk menyimpan ribuan kartu indeks pelanggan/tamu dinamakan ....',
    options: ['A. Rotary Filing Cabinet', 'B. Printer 3D', 'C. Mesin Fax', 'D. Scanner', 'E. Ordner Duduk'],
    answer: 'A. Rotary Filing Cabinet',
    explanation: 'Rotary Filing adalah alat penyimpanan arsip berputar hemat tempat untuk kartu indeks.',
    xp: 150
  },
  {
    id: 'b4-q021', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Jadwal yang memuat jangka waktu penyimpanan arsip serta pedoman nasib akhir arsip (dimusnahkan atau diperpanjang) dinamakan ....',
    options: ['A. Jadwal Retensi Arsip (JRA)', 'B. Jadwal Dinas Malam', 'C. Kalender Akademik', 'D. Daftar Inventaris Kertas', 'E. Agenda Kerja'],
    answer: 'A. Jadwal Retensi Arsip (JRA)',
    explanation: 'JRA menentukan masa simpan aktif, inaktif, dan penentuan akhir arsip.',
    xp: 150
  },
  {
    id: 'b4-q022', chapter: 4, type: 'multiple_choice', difficulty: 'medium',
    question: 'Proses mengubah arsip fisik lembaran kertas menjadi berkas digital (PDF/JPG) melalui perangkat komputer dinamakan ....',
    options: ['A. Digitalisasi / Alih Media Arsip', 'B. Fotokopi', 'C. Perforasi', 'D. Destruksi', 'E. Laminasi'],
    answer: 'A. Digitalisasi / Alih Media Arsip',
    explanation: 'Alih media atau digitalisasi arsip menyimpan berkas fisik dalam format file komputer.',
    xp: 150
  },

  // Analisis & HOTS (8 soal)
  {
    id: 'b4-q023', chapter: 4, type: 'multiple_choice', difficulty: 'hard',
    question: 'Sebuah kantor sering mengalami masalah sulit menemukan kembali (retrieval time) berkas penting yang dibutuhkan direksi (memakan waktu lebih dari 15 menit). Masalah utama dari sistem kearsipan kantor tersebut adalah ....',
    options: ['A. Kurang menerapkan standar penyusunan dan pengkodean arsip yang konsisten', 'B. Kertas surat terlalu tebal', 'C. AC ruangan terlalu dingin', 'D. Lampu penerangan kurang terang', 'E. Jumlah meja kantor terlalu banyak'],
    answer: 'A. Kurang menerapkan standar penyusunan dan pengkodean arsip yang konsisten',
    explanation: 'Sistem kearsipan yang baik wajib memenuhi kriteria penemuan kembali dokumen dalam waktu cepat (di bawah 1 menit). Kuncinya adalah klasifikasi dan pengkodean konsisten.',
    xp: 200
  },
  {
    id: 'b4-q024', chapter: 4, type: 'multiple_choice', difficulty: 'hard',
    question: 'Manakah keuntungan utama penerapan sistem kearsipan Sentralisasi dibanding Desentralisasi bagi perusahaan skala besar?',
    options: ['A. Penanganan arsip ditangani oleh tenaga profesional terpusat, penghematan peralatan dan penyeragaman sistem', 'B. Kerahasiaan masing-masing divisi terjamin 100%', 'C. Setiap pegawai bebas menaruh berkas di meja sendiri', 'D. Tidak memerlukan ruang khusus', 'E. Bebas dari pemeriksaan audit'],
    answer: 'A. Penanganan arsip ditangani oleh tenaga profesional terpusat, penghematan peralatan dan penyeragaman sistem',
    explanation: 'Sentralisasi mencegah duplikasi berkas, menghemat biaya peralatan (filing cabinet), dan memusatkan tenaga ahli kearsipan.',
    xp: 200
  },
  {
    id: 'b4-q025', chapter: 4, type: 'multiple_choice', difficulty: 'hard',
    question: 'Dalam mengindeks nama "Yayasan Pendidikan Handayani Utama", kata tangkap (caption) pertama yang digunakan adalah ....',
    options: ['A. Pendidikan', 'B. Handayani', 'C. Utama', 'D. Yayasan', 'E. Handayani Utama Pendidikan Yayasan'],
    answer: 'B. Handayani',
    explanation: 'Pada nama lembaga/yayasan pendidikan, jenis bentuk "Yayasan Pendidikan" diindeks setelah nama khas lembaga ("Handayani Utama, Yayasan Pendidikan").',
    xp: 200
  },
  {
    id: 'b4-q026', chapter: 4, type: 'multiple_choice', difficulty: 'hard',
    question: 'Mengapa dokumen keuangan seperti Laporan Pajak dan Laporan Keuangan Audit wajib disimpan minimal 5 hingga 10 tahun sebelum dimusnahkan?',
    options: ['A. Mengikuti aturan undang-undang pertanggungjawaban hukum dan ketentuan pemeriksaan perpajakan', 'B. Agar ruangan kearsipan terlihat penuh', 'C. Menunggu harga kertas bekas naik', 'D. Syarat perpanjangan sertifikat ISO', 'E. Perintah staf administrasi'],
    answer: 'A. Mengikuti aturan undang-undang pertanggungjawaban hukum dan ketentuan pemeriksaan perpajakan',
    explanation: 'Dokumen keuangan memiliki nilai guna hukum dan finansial yang diatur undang-undang perpajakan mengenai masa kadaluarsa pemeriksaan.',
    xp: 200
  },
  {
    id: 'b4-q027', chapter: 4, type: 'multiple_choice', difficulty: 'hard',
    question: 'Metode pemusnahan arsip yang PALING aman untuk dokumen rahasia negara / rahasia bisnis tingkat tinggi adalah ....',
    options: ['A. Pencacahan / Cacah Kertas (Shredding) atau Pembakaran total (Insinerasi)', 'B. Dibuang ke tempat sampah umum', 'C. Dijual ke penampung kertas bekas tanpa dihancurkan', 'D. Dibiarkan basah di gudang', 'E. Dilipat menjadi pesawat kertas'],
    answer: 'A. Pencacahan / Cacah Kertas (Shredding) atau Pembakaran total (Insinerasi)',
    explanation: 'Pencacahan dengan paper shredder micro-cut atau insinerasi menjamin informasi rahasia tidak dapat dirangkai/dibaca kembali.',
    xp: 200
  },
  {
    id: 'b4-q028', chapter: 4, type: 'multiple_choice', difficulty: 'hard',
    question: 'Bandingkan kearsipan fisik dan kearsipan elektronik (E-Archiving). Risiko terbesar kearsipan elektronik yang HARUS diantisipasi dengan sistem backup adalah ....',
    options: ['A. Kerusakan file akibat virus/cyber attack dan kegagalan hardware (harddisk crash)', 'B. Rayap memakan kertas', 'C. Tinta kertas pudar', 'D. Membutuhkan lemari besi besar', 'E. Kertas menjadi lembab'],
    answer: 'A. Kerusakan file akibat virus/cyber attack dan kegagalan hardware (harddisk crash)',
    explanation: 'Arsip elektronik rentan terhadap ancaman siber, korupsi data, dan kerusakan media simpan digital.',
    xp: 200
  },
  {
    id: 'b4-q029', chapter: 4, type: 'multiple_choice', difficulty: 'hard',
    question: 'Jika folder arsip berlabel "AG" memuat dokumen Agung, Agustina, dan Agnes. Urutan letak dokumen dari paling depan ke belakang dalam folder tersebut adalah ....',
    options: ['A. Agnes -> Agung -> Agustina', 'B. Agung -> Agustina -> Agnes', 'C. Agustina -> Agnes -> Agung', 'D. Agnes -> Agustina -> Agung', 'E. Bebas tanpa urutan'],
    answer: 'A. Agnes -> Agung -> Agustina',
    explanation: 'Berdasarkan huruf berikutnya: Ag-n-es (n), Ag-u-n-g (u-n-g), Ag-u-s-t-i-n-a (u-s). Urutan abjad: Agnes -> Agung -> Agustina.',
    xp: 200
  },
  {
    id: 'b4-q030', chapter: 4, type: 'multiple_choice', difficulty: 'hard',
    question: 'Seorang petugas arsip menemukan 2 surat tanpa lembar pengantar dan tanpa tanggal di meja kerja. Tindakan profesional yang tepat adalah ....',
    options: ['A. Melacak asal surat melalui stempel penerimaan/buku agenda dan konfirmasi ke konseptor', 'B. Membuang kedua surat tersebut', 'C. Menyimpan langsung ke laci acak', 'D. Menuliskan tanggal hari ini sembarangan', 'E. Menyalahkan pimpinan'],
    answer: 'A. Melacak asal surat melalui stempel penerimaan/buku agenda dan konfirmasi ke konseptor',
    explanation: 'Etika kearsipan menuntut penelusuran riwayat berkas melalui buku agenda penerimaan agar pengkodean dan penyimpanan tetap akurat.',
    xp: 200
  }
];

export default bab4Questions;
