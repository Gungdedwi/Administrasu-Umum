// =====================================================
// BAB 3 — DASAR SURAT MENYURAT
// 30 Soal: Pemahaman | Penerapan | Analisis | HOTS
// Sumber: eBook Administrasi Umum Kelas X SMK
// =====================================================

import type { Question } from '../../types';

const bab3Questions: Question[] = [
  // Pemahaman (12 soal)
  {
    id: 'b3-q001', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Surat adalah sarana komunikasi tertulis yang digunakan untuk menyampaikan informasi dari satu pihak kepada pihak lain. Pengertian utama surat adalah sarana ....',
    options: ['A. Komunikasi lisan', 'B. Komunikasi tertulis', 'C. Komunikasi visual saja', 'D. Transaksi perbankan', 'E. Hiburan'],
    answer: 'B. Komunikasi tertulis',
    explanation: 'Surat merupakan salah satu sarana komunikasi tertulis untuk menyampaikan pesan, warta, atau kabar.',
    xp: 100
  },
  {
    id: 'b3-q002', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Berikut yang BUKAN merupakan fungsi surat dalam administrasi kantor adalah ....',
    options: ['A. Alat bukti tertulis', 'B. Pedoman pelaksanaan tugas', 'C. Alat pengingat / dokumentasi', 'D. Alat pembayaran sah di toko', 'E. Duta/wakil pengirim'],
    answer: 'D. Alat pembayaran sah di toko',
    explanation: 'Fungsi surat mencakup alat bukti tertulis, pedoman tugas, alat pengingat, dan wakil organisasi, bukan alat pembayaran tunai.',
    xp: 100
  },
  {
    id: 'b3-q003', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Bentuk surat yang seluruh bagiannya diketik rata di margin kiri dinamakan bentuk ....',
    options: ['A. Full Block Style (Lurus Penuh)', 'B. Block Style (Lurus)', 'C. Semi Block Style (Setengah Lurus)', 'D. Indented Style (Lekuk)', 'E. Hanging Paragraph'],
    answer: 'A. Full Block Style (Lurus Penuh)',
    explanation: 'Full Block Style mengawali semua bagian surat (kop, tanggal, nomor, alamat, isi, salam penutup, tanda tangan) rata margin kiri.',
    xp: 100
  },
  {
    id: 'b3-q004', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Bagian surat yang berisi nama perusahaan, alamat, nomor telepon, logo, dan email dinamakan ....',
    options: ['A. Kepala Surat / Kop Surat', 'B. Perihal Surat', 'C. Salam Pembuka', 'D. Lampiran Surat', 'E. Tembusan'],
    answer: 'A. Kepala Surat / Kop Surat',
    explanation: 'Kepala surat (Kop Surat) berisi identitas lengkap organisasi/perusahaan pengirim.',
    xp: 100
  },
  {
    id: 'b3-q005', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dalam surat resmi dinas/niaga, ucapan "Dengan hormat," berfungsi sebagai ....',
    options: ['A. Salam Pembuka', 'B. Salam Penutup', 'C. Kop Surat', 'D. Alinea Pembuka', 'E. Catatan Kaki'],
    answer: 'A. Salam Pembuka',
    explanation: '"Dengan hormat," adalah contoh baku salam pembuka dalam komunikasi tertulis formal di Indonesia.',
    xp: 100
  },
  {
    id: 'b3-q006', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Jenis surat yang diterbitkan oleh perusahaan commercial untuk urusan jual beli dan penawaran barang/jasa disebut ....',
    options: ['A. Surat Dinas', 'B. Surat Niaga / Bisnis', 'C. Surat Pribadi', 'D. Surat Rahasia Negara', 'E. Surat Keputusan'],
    answer: 'B. Surat Niaga / Bisnis',
    explanation: 'Surat niaga berkaitan dengan perdagangan, transaksi, atau aktivitas perbisnisan.',
    xp: 100
  },
  {
    id: 'b3-q007', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Surat penawaran kamar hotel yang dikirim marketing ke perusahaan mitra masuk dalam kategori surat ....',
    options: ['A. Surat Niaga', 'B. Surat Dinas Pemerintahan', 'C. Surat Keterangan Kerja', 'D. Surat Keputusan Manajemen', 'E. Surat Pribadi'],
    answer: 'A. Surat Niaga',
    explanation: 'Penawaran jasa kamar hotel bertujuan bisnis/komersial sehingga termasuk surat niaga.',
    xp: 100
  },
  {
    id: 'b3-q008', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Bagian surat yang menunjukkan kepada siapa saja salinan surat tersebut disampaikan selain penerima utama dinamakan ....',
    options: ['A. Lampiran', 'B. Tembusan (Carbon Copy / CC)', 'C. Inisial', 'D. Perihal', 'E. Footer'],
    answer: 'B. Tembusan (Carbon Copy / CC)',
    explanation: 'Tembusan (CC) ditulis di bagian kiri bawah untuk menginfokan pihak penerima salinan surat.',
    xp: 100
  },
  {
    id: 'b3-q009', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dalam surat resmi Indonesia, format tanggal surat yang BENAR adalah ....',
    options: ['A. 15-09-2026', 'B. Jakarta, 15 September 2026', 'C. 15/Sept/2026', 'D. Jakarta: 15-Sep-2026', 'E. 2026, 15 September'],
    answer: 'B. Jakarta, 15 September 2026',
    explanation: 'Penulisan tanggal resmi adalah Nama Tempat, Tanggal Bulan(huruf) Tahun (contoh: Jakarta, 15 September 2026). Jika ada kop surat, tempat boleh dihilangkan.',
    xp: 100
  },
  {
    id: 'b3-q010', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Singkatan "Up." dalam alamat surat resmi memiliki arti ....',
    options: ['A. Untuk perhatian', 'B. Urusan penting', 'C. Utamanya pimpinan', 'D. Untuk pengirim', 'E. Usulan pribadi'],
    answer: 'A. Untuk perhatian',
    explanation: 'u.p. singkatan dari "untuk perhatian", digunakan jika surat ditujukan ke pejabat/staf spesifik di suatu organisasi.',
    xp: 100
  },
  {
    id: 'b3-q011', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Kertas yang umumnya dipakai untuk surat resmi dinas dan bisnis berukuran ....',
    options: ['A. A4 (210 x 297 mm)', 'B. A6', 'C. Kartu Pos', 'D. A0', 'E. Kertas Kasir'],
    answer: 'A. A4 (210 x 297 mm)',
    explanation: 'Standar kertas surat resmi internasional dan Indonesia menggunakan ukuran A4 atau F4 (Folio).',
    xp: 100
  },
  {
    id: 'b3-q012', chapter: 3, type: 'multiple_choice', difficulty: 'easy',
    question: 'Peralatan untuk menyatukan beberapa lembar kertas dokumen surat dengan kawat klip dinamakan ....',
    options: ['A. Perforator', 'B. Stapler (Staples)', 'C. Stempel', 'D. Amplop', 'E. Binder Clip'],
    answer: 'B. Stapler (Staples)',
    explanation: 'Stapler digunakan untuk menjepit atau menggabungkan lembaran surat.',
    xp: 100
  },

  // Penerapan (10 soal)
  {
    id: 'b3-q013', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Sebuah hotel ingin memesan 50 set linen baru kepada supplier. Jenis surat yang dikirimkan hotel tersebut adalah ....',
    options: ['A. Surat Penawaran', 'B. Surat Pesanan (Purchase Order / PO)', 'C. Surat Perjanjian Kerja', 'D. Surat Teguran', 'E. Surat Keterangan'],
    answer: 'B. Surat Pesanan (Purchase Order / PO)',
    explanation: 'Surat pesanan dibuat pembeli untuk memesan barang/jasa kepada penjual berdasarkan harga/penawaran.',
    xp: 150
  },
  {
    id: 'b3-q014', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Perhatikan kalimat salam penutup berikut: "Hormat kami,". Posisi salam penutup pada bentuk Semi Block Style ditempatkan di ....',
    options: ['A. Margin kiri rapat', 'B. Sebelah kanan atau tengah kanan', 'C. Tengah-tengah halaman (center)', 'D. Di dalam kop surat', 'E. Dibawah tembusan'],
    answer: 'B. Sebelah kanan atau tengah kanan',
    explanation: 'Pada Semi Block Style (setengah lurus), tanggal, salam penutup, dan tanda tangan berada di sebelah kanan.',
    xp: 150
  },
  {
    id: 'b3-q015', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Jika surat menyertakan 3 lembar brosur tarif kamar, maka pada baris Lampiran ditulis ....',
    options: ['A. Lampiran: 3 lembar', 'B. Lampiran: 3 buah brosur', 'C. Lampiran: Tiga (3) berkas', 'D. Lampiran: Banyak', 'E. Lampiran: -'],
    answer: 'A. Lampiran: 3 lembar',
    explanation: 'Lampiran diisi jumlah lembar/berkas dokumen pendukung yang disertakan.',
    xp: 150
  },
  {
    id: 'b3-q016', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Staf sekretaris menulis surat permintaan penawaran harga perlengkapan kamar mandi hotel. Langkah pertama penyusunan surat tersebut adalah ....',
    options: ['A. Menulis tanda tangan General Manager', 'B. Mempersiapkan draf/konsep surat dan menentukan tujuan surat', 'C. Memasukkan surat ke amplop', 'D. Meminta nomor resi pos', 'E. Menempelkan prangko'],
    answer: 'B. Mempersiapkan draf/konsep surat dan menentukan tujuan surat',
    explanation: 'Prosedur pertama pembuatan surat adalah menentukan tujuan dan membuat konsep/draf surat.',
    xp: 150
  },
  {
    id: 'b3-q017', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Bagaimana penulisan kata sapaan penerima surat yang benar menurut PUEBI / EYD?',
    options: ['A. Kepada Yth. Bapak HRD Manager', 'B. Yth. Direktur PT Nusra Hotel', 'C. Kepada Yth: Ibu Sinta', 'D. Kepada Yth Bapak/Ibu H. Ahmad', 'E. Yth Bapak Direktur PT Maju'],
    answer: 'B. Yth. Direktur PT Nusra Hotel',
    explanation: 'Hindari penggunaan gabungan "Kepada Yth." cukup "Yth.", dan jangan gunakan "Bapak/Ibu" jika diikuti jabatan (seperti Direktur).',
    xp: 150
  },
  {
    id: 'b3-q018', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Perbedaan utama antara bentuk Surat Lurus (Block Style) dan Setengah Lurus (Semi Block Style) terletak pada ....',
    options: ['A. Penulisan paragraf isi (Semi Block awal paragraf menjorok ke dalam)', 'B. Bentuk logo kop surat', 'C. Jenis kertas yang digunakan', 'D. Warna tinta tanda tangan', 'E. Bahasa yang dipakai'],
    answer: 'A. Penulisan paragraf isi (Semi Block awal paragraf menjorok ke dalam)',
    explanation: 'Pada Semi Block Style, setiap alinea/paragraf baru diketik menjorok ke dalam (5 spaces/ tab), sedangkan Block Style rata kiri.',
    xp: 150
  },
  {
    id: 'b3-q019', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Alat kelengkapan surat yang berfungsi menjaga kerahasiaan isi surat saat pengiriman adalah ....',
    options: ['A. Map Snelhefter', 'B. Amplop Surat (Envelope)', 'C. Perforator', 'D. Disket', 'E. Paperclip'],
    answer: 'B. Amplop Surat (Envelope)',
    explanation: 'Amplop surat melindungi dan membungkus dokumen surat agar rahasia dan aman.',
    xp: 150
  },
  {
    id: 'b3-q020', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Penulisan nomor surat "015/HRD-NH/IX/2026". Angka "IX" dalam nomor surat tersebut menunjukkan ....',
    options: ['A. Tanggal surat dibuat', 'B. Bulan pembuatan surat (Bulan September)', 'C. Kode wilayah perhotelan', 'D. Nomor urut pengirim', 'E. Jumlah dokumen lampiran'],
    answer: 'B. Bulan pembuatan surat (Bulan September)',
    explanation: 'Angka romawi IX menunjukkan bulan ke-9 (September) saat surat diterbitkan.',
    xp: 150
  },
  {
    id: 'b3-q021', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Ketika membalas surat pengaduan (komplain) tamu hotel mengenai pendingin ruangan yang rusak, bahasa surat harus ....',
    options: ['A. Keras dan membela diri', 'B. Sopan, empati, persuasif, dan menawarkan solusi jelas', 'C. Singkat tanpa salam penutup', 'D. Menuduh balik kesalahan tamu', 'E. Menggunakan bahasa daerah'],
    answer: 'B. Sopan, empati, persuasif, dan menawarkan solusi jelas',
    explanation: 'Surat balasan komplain harus menunjukkan sikap empati, permohonan maaf, serta solusi konkret untuk menjaga reputasi usaha.',
    xp: 150
  },
  {
    id: 'b3-q022', chapter: 3, type: 'multiple_choice', difficulty: 'medium',
    question: 'Singkatan "c.q." dalam surat resmi adalah kepanjangan dari ....',
    options: ['A. casu quo (dalam hal ini / spesifik ke pimpinan/divisi terkait)', 'B. charge quest', 'C. central quality', 'D. company question', 'E. check order'],
    answer: 'A. casu quo (dalam hal ini / spesifik ke pimpinan/divisi terkait)',
    explanation: 'c.q. (casu quo) digunakan untuk meneruskan surat ke unit/pejabat spesifik dalam institusi tujuan.',
    xp: 150
  },

  // Analisis & HOTS (8 soal)
  {
    id: 'b3-q023', chapter: 3, type: 'multiple_choice', difficulty: 'hard',
    question: 'Sebuah hotel menerima surat dari agen perjalanan berisi komplain kamar kotor. Staf administrasi segera mengonfirmasi ke Housekeeping sebelum membalas surat. Tindakan ini mencerminkan fungsi surat sebagai ....',
    options: ['A. Alat promosi gratis', 'B. Alat pengingat dan dasar pengambil keputusan/tindakan', 'C. Hiasan arsip kantor', 'D. Pengurang beban pajak', 'E. Syarat perizinan usaha'],
    answer: 'B. Alat pengingat dan dasar pengambil keputusan/tindakan',
    explanation: 'Isi surat menjadi bukti tertulis dan dasar bagi manajemen untuk melakukan investigasi serta mengambil keputusan operasional.',
    xp: 200
  },
  {
    id: 'b3-q024', chapter: 3, type: 'multiple_choice', difficulty: 'hard',
    question: 'Analisis kesalahan pada alamat surat berikut: "Kepada Yth. Bapak Ir. Budi Santoso, M.M. / General Manager Hotel Agung / Di Tempat". Manakah perbaikan yang PALING tepat sesuai kaidah?',
    options: ['A. Hapus kata "Kepada" dan kata "Di Tempat" (ganti dengan kota/alamat jelas)', 'B. Tambahkan koma di belakang Kepada', 'C. Singkat General Manager menjadi GM', 'D. Ganti Yth dengan Yth.', 'E. Hapus gelar akademik'],
    answer: 'A. Hapus kata "Kepada" dan kata "Di Tempat" (ganti dengan kota/alamat jelas)',
    explanation: 'Penulisan baku tidak menggunakan kata "Kepada" jika sudah ada "Yth.", serta tidak memakai "Di Tempat" melainkan nama kota tujuan yang spesifik.',
    xp: 200
  },
  {
    id: 'b3-q025', chapter: 3, type: 'multiple_choice', difficulty: 'hard',
    question: 'Apa risiko terbesar bagi hotel jika mengirimkan surat penawaran kerjasama tanpa menyantumkan batas berlaku harga (validity date)?',
    options: ['A. Surat dianggap tidak memiliki estetika', 'B. Hotel wajib memenuhi harga penawaran lama meski biaya operasional/inflasi naik di kemudian hari', 'C. Surat tidak bisa dikirim oleh kurir', 'D. Kertas surat menjadi kuning', 'E. Tanda tangan menjadi tidak sah'],
    answer: 'B. Hotel wajib memenuhi harga penawaran lama meski biaya operasional/inflasi naik di kemudian hari',
    explanation: 'Surat niaga berfungsi sebagai alat bukti hukum dan komitmen kerja sama. Tanpa masa berlaku, pihak calon pembeli dapat menuntut harga lama.',
    xp: 200
  },
  {
    id: 'b3-q026', chapter: 3, type: 'multiple_choice', difficulty: 'hard',
    question: 'Suatu perusahaan membalas penawaran barang dari supplier dengan kata-kata: "Kami menolak barang Saudara karena jelek sekali". Penilaian terhadap kalimat surat ini adalah ....',
    options: ['A. Tepat karena lugas dan singkat', 'B. Kurang etis dan tidak memenuhi standar bahasa surat bisnis yang santun', 'C. Sangat profesional', 'D. Sesuai PUEBI', 'E. Menunjukkan ketegasan bisnis'],
    answer: 'B. Kurang etis dan tidak memenuhi standar bahasa surat bisnis yang santun',
    explanation: 'Bahasa surat bisnis harus menggunakan kalimat yang santun, menghargai mitra, dan objektif tanpa emosional atau menjatuhkan.',
    xp: 200
  },
  {
    id: 'b3-q027', chapter: 3, type: 'multiple_choice', difficulty: 'hard',
    question: 'Perhatikan format penulisan alinea isi surat. Apabila sebuah surat ditulis dengan paragraf pertama menjorok 5 ketukan, paragraf kedua rata kiri, dan paragraf ketiga menjorok 5 ketukan, hal ini tergolong kesalahan ....',
    options: ['A. Konsistensi format/bentuk surat (Style Inconsistency)', 'B. Kesalahan ejaan nama', 'C. Kesalahan nomor surat', 'D. Kesalahan jenis amplop', 'E. Kesalahan stempel'],
    answer: 'A. Konsistensi format/bentuk surat (Style Inconsistency)',
    explanation: 'Format bentuk surat harus konsisten dari awal hingga akhir dokumen.',
    xp: 200
  },
  {
    id: 'b3-q028', chapter: 3, type: 'multiple_choice', difficulty: 'hard',
    question: 'Mengapa pada surat dinas/niaga resmi, inisial pembuat konsep (drafter) dan pengetik (typist) dicantumkan di pojok kiri bawah (contoh: WS/rr)?',
    options: ['A. Untuk promosi staf', 'B. Sebagai bentuk pertanggungjawaban internal jika terjadi kesalahan ketik/konsep', 'C. Agar penerima mengenal pengetik', 'D. Syarat wajib POS Indonesia', 'E. Syarat legalitas hukum pajak'],
    answer: 'B. Sebagai bentuk pertanggungjawaban internal jika terjadi kesalahan ketik/konsep',
    explanation: 'Inisial memudahkan pelacakan internal organisasi mengenai siapa yang merancang (WS) dan siapa yang mengetik (rr) surat tersebut.',
    xp: 200
  },
  {
    id: 'b3-q029', chapter: 3, type: 'multiple_choice', difficulty: 'hard',
    question: 'Manakah urutan struktur surat resmi yang paling sistematis dari atas ke bawah?',
    options: ['A. Kepala Surat -> Nomor/Tanggal/Hal -> Alamat Tujuan -> Salam Pembuka -> Isi Surat -> Salam Penutup -> Tanda Tangan & Nama Jelas -> Tembusan', 'B. Tanggal -> Kepala Surat -> Salam Pembuka -> Isi -> Tanda Tangan', 'C. Alamat Tujuan -> Kepala Surat -> Nomor -> Isi -> Salam Penutup', 'D. Kepala Surat -> Isi Surat -> Tanggal -> Alamat -> Tanda Tangan', 'E. Salam Pembuka -> Kepala Surat -> Tanggal -> Isi -> Tembusan'],
    answer: 'A. Kepala Surat -> Nomor/Tanggal/Hal -> Alamat Tujuan -> Salam Pembuka -> Isi Surat -> Salam Penutup -> Tanda Tangan & Nama Jelas -> Tembusan',
    explanation: 'Urutan baku struktur surat resmi selalu dimulai dari Kop Surat, identitas surat & tanggal, alamat, salam pembuka, isi, salam penutup, penandatangan, serta tembusan.',
    xp: 200
  },
  {
    id: 'b3-q030', chapter: 3, type: 'multiple_choice', difficulty: 'hard',
    question: 'Di era digital, komunikasi surat banyak beralih ke Email Bisnis. Namun dokumen fisik ber-kop dan bertanda tangan resmi tetap dibutuhkan untuk ....',
    options: ['A. Menambah tumpukan sampah kertas', 'B. Legalitas hukum sah pertanggungjawaban audit dan kontrak kerja sama formal', 'C. Menghabiskan anggaran pembelian tinta', 'D. Syarat pengiriman foto via WA', 'E. Pengganti kartu identitas karyawan'],
    answer: 'B. Legalitas hukum sah pertanggungjawaban audit dan kontrak kerja sama formal',
    explanation: 'Dokumen ber stempel dan tanda tangan fisik atau e-meterai resmi memberikan kepastian legalitas dalam pemeriksaan audit dan persidangan hukum.',
    xp: 200
  }
];

export default bab3Questions;
