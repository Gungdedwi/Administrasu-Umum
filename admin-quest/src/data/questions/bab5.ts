// =====================================================
// BAB 5 — MENSIAPKAN DOKUMEN BISNIS
// 30 Soal: Pemahaman | Penerapan | Analisis | HOTS
// Sumber: eBook Administrasi Umum Kelas X SMK
// =====================================================

import type { Question } from '../../types';

const bab5Questions: Question[] = [
  // Pemahaman (12 soal)
  {
    id: 'b5-q001', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dokumen bisnis adalah dokumen tertulis yang digunakan dalam transaksi dan operasional perbisnisan. Bukti pembayaran tunai yang dikeluarkan oleh penjual kepada pembeli dinamakan ....',
    options: ['A. Kwitansi (Receipt)', 'B. Faktur (Invoice)', 'C. Cek', 'D. Giro', 'E. Nota Debet'],
    answer: 'A. Kwitansi (Receipt)',
    explanation: 'Kwitansi adalah bukti penerimaan uang tunai yang ditandatangani oleh penerima pembayaran.',
    xp: 100
  },
  {
    id: 'b5-q002', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dokumen tagihan atas pembelian barang/jasa secara kredit yang dikirimkan penjual kepada pembeli dinamakan ....',
    options: ['A. Faktur / Tagihan (Invoice)', 'B. Kwitansi', 'C. Bilyet Giro', 'D. Rekening Koran', 'E. Surat Jalan'],
    answer: 'A. Faktur / Tagihan (Invoice)',
    explanation: 'Faktur (Invoice) memuat rincian barang/jasa, harga per unit, total pembayaran, dan syarat pembayaran kredit.',
    xp: 100
  },
  {
    id: 'b5-q003', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dokumen perizinan utama untuk mendirikan bangunan tempat usaha di Indonesia adalah ....',
    options: ['A. IMB / PBG (Persetujuan Bangunan Gedung)', 'B. SIM C', 'C. KTP', 'D. Paspor', 'E. STNK'],
    answer: 'A. IMB / PBG (Persetujuan Bangunan Gedung)',
    explanation: 'IMB/PBG adalah izin resmi mendirikan dan menggunakan bangunan usaha.',
    xp: 100
  },
  {
    id: 'b5-q004', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Singkatan NPWP dalam administrasi bisnis dan perpajakan Indonesia adalah ....',
    options: ['A. Nomor Pokok Wajib Pajak', 'B. Nomor Pengesahan Wajib Pengusaha', 'C. Nomor Pusat Pengawasan Pajak', 'D. Nota Pajak Wajib Pengusaha', 'E. Nomor Pernyataan Wajib Pajak'],
    answer: 'A. Nomor Pokok Wajib Pajak',
    explanation: 'NPWP adalah sarana administrasi perpajakan bagi Wajib Pajak pribadi maupun badan usaha.',
    xp: 100
  },
  {
    id: 'b5-q005', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dokumen perjanjian jual beli barang/jasa yang ditandatangani di atas meterai oleh pihak penjual dan pembeli dinamakan ....',
    options: ['A. Surat Perjanjian / Kontrak Kerja Sama', 'B. Nota Pembelian', 'C. Kwitansi Kosong', 'D. Brosur Promosi', 'E. Tiket Masuk'],
    answer: 'A. Surat Perjanjian / Kontrak Kerja Sama',
    explanation: 'Kontrak kerja sama mengikat para pihak secara hukum atas hak dan kewajiban transaksi bisnis.',
    xp: 100
  },
  {
    id: 'b5-q006', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Perizinan usaha berbasis risiko yang dikeluarkan melalui sistem Online Single Submission (OSS) dinamakan ....',
    options: ['A. NIB (Nomor Induk Berusaha)', 'B. SIUP Lama', 'C. TDP Saja', 'D. SKCK', 'E. AMDAL'],
    answer: 'A. NIB (Nomor Induk Berusaha)',
    explanation: 'NIB berlaku sebagai identitas registrasi legalitas usaha resmi berbasis OSS di Indonesia.',
    xp: 100
  },
  {
    id: 'b5-q007', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Surat perintah mutlak dari nasabah bank kepada bank untuk membayar sejumlah uang kepada penerima dinamakan ....',
    options: ['A. Cek (Cheque)', 'B. Kwitansi', 'C. Invoice', 'D. Nota Kontan', 'E. Surat Pengantar'],
    answer: 'A. Cek (Cheque)',
    explanation: 'Cek adalah surat perintah pembayaran tunai atas beban rekening nasabah penarik.',
    xp: 100
  },
  {
    id: 'b5-q008', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dokumen pengiriman barang yang dibawa pengemudi/kurir untuk diserahkan dan ditandatangani penerima barang dinamakan ....',
    options: ['A. Surat Jalan (Delivery Order)', 'B. Kwitansi Pembayaran', 'C. Cek Bank', 'D. Polis Asuransi', 'E. Akta Notaris'],
    answer: 'A. Surat Jalan (Delivery Order)',
    explanation: 'Surat jalan menyertai fisik pengiriman barang untuk memverifikasi kesesuaian barang saat diterima.',
    xp: 100
  },
  {
    id: 'b5-q009', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Bukti pembelian tunai secara langsung di toko/supermarket yang dicetak dari mesin kasir (POS) dinamakan ....',
    options: ['A. Nota Kontan / Struk Kasir', 'B. Bilyet Giro', 'C. Rekening Koran', 'D. Obligasi', 'E. Saham'],
    answer: 'A. Nota Kontan / Struk Kasir',
    explanation: 'Nota kontan / struk kasir dikeluarkan atas transaksi jual beli tunai langsung.',
    xp: 100
  },
  {
    id: 'b5-q0010', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Penggunaan Bea Meterai pada dokumen perjanjian bisnis berfungsi untuk ....',
    options: ['A. Memberikan kekuatan pembuktian hukum sebagai alat bukti di pengadilan', 'B. Membayar komisi penjualan', 'C. Syarat diskon barang', 'D. Menambah keindahan dokumen', 'E. Mengganti biaya cetak'],
    answer: 'A. Memberikan kekuatan pembuktian hukum sebagai alat bukti di pengadilan',
    explanation: 'Bea meterai adalah pajak atas dokumen perdata agar sah diajukan di muka pengadilan.',
    xp: 100
  },
  {
    id: 'b5-q011', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Dokumen yang memuat catatan rinci mutasi rekening tabungan/giro perusahaan dari bank selama periode tertentu dinamakan ....',
    options: ['A. Rekening Koran (Bank Statement)', 'B. Kwitansi', 'C. Polis Asuransi', 'D. Faktur Pajak', 'E. Surat Izin'],
    answer: 'A. Rekening Koran (Bank Statement)',
    explanation: 'Rekening koran memuat saldo awal, mutasi debet/kredit, dan saldo akhir akun bank.',
    xp: 100
  },
  {
    id: 'b5-q012', chapter: 5, type: 'multiple_choice', difficulty: 'easy',
    question: 'Akta pendirian perusahaan PT (Perseroan Terbatas) dibuat dan disahkan di hadapan pejabat ....',
    options: ['A. Notaris', 'B. Camat', 'C. Kepala Desa', 'D. Polisi', 'E. Kasir Hotel'],
    answer: 'A. Notaris',
    explanation: 'Akta pendirian PT wajib dibuat oleh Notaris dan disahkan oleh Kementerian Hukum dan HAM.',
    xp: 100
  },

  // Penerapan (10 soal)
  {
    id: 'b5-q013', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Hotel Agung menerima pelunasan sewa ball room sebesar Rp 15.000.000,- dari PT Telkom secara tunai. Dokumen transaksi yang HARUS diserahkan hotel kepada PT Telkom adalah ....',
    options: ['A. Kwitansi bermeterai dengan tanda tangan kasir/keuangan hotel', 'B. Surat jalan', 'C. Nota debet', 'D. Cek mundur', 'E. Brosur hotel'],
    answer: 'A. Kwitansi bermeterai dengan tanda tangan kasir/keuangan hotel',
    explanation: 'Untuk penerimaan pembayaran di atas batas Bea Meterai, kwitansi harus ditempeli meterai dan ditandatangani penerima.',
    xp: 150
  },
  {
    id: 'b5-q014', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Syarat pembayaran faktur tertulis "2/10, n/30". Maksud dari syarat tersebut adalah ....',
    options: ['A. Potongan 2% jika melunasi dalam 10 hari, batas waktu pelunasan 30 hari', 'B. Potongan 10% jika melunasi 2 hari', 'C. Bunga 2% per 10 bulan', 'D. Denda Rp 10.000', 'E. Bayar 2 kali dalam 30 hari'],
    answer: 'A. Potongan 2% jika melunasi dalam 10 hari, batas waktu pelunasan 30 hari',
    explanation: '2/10 n/30 adalah syarat potongan tunai 2% bila dibayar <= 10 hari, jangka waktu kredit maksimal 30 hari.',
    xp: 150
  },
  {
    id: 'b5-q015', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Penyusunan Faktur Pajak oleh Pengusaha Kena Pajak (PKP) wajib menyantumkan identitas nomor resmi berupa ....',
    options: ['A. NPWP Penjual dan Pembeli', 'B. Nomor Kartu Keluarga', 'C. Nomor SIM', 'D. Nomor Rekening Pribadi', 'E. Kode Pos'],
    answer: 'A. NPWP Penjual dan Pembeli',
    explanation: 'Faktur Pajak resmi mensyaratkan identitas NPWP kedua belah pihak sebagai validasi PPN.',
    xp: 150
  },
  {
    id: 'b5-q016', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Ketika barang pesanan yang diterima oleh hotel mengalami kerusakan, staf purchasing mengirim dokumen permohonan pengurangan harga dinamakan ....',
    options: ['A. Nota Debet (Debet Note)', 'B. Kwitansi', 'C. Cek Silang', 'D. Surat Kuasa', 'E. Giro'],
    answer: 'A. Nota Debet (Debet Note)',
    explanation: 'Nota debet dikirim pembeli ke penjual untuk menginformasikan pendebetan utang karena retur/kerusakan.',
    xp: 150
  },
  {
    id: 'b5-q017', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Perhatikan pengisian lembar kwitansi: "Sudah terima dari: Budi Santoso. Uang sejumlah: Dua Juta Rupiah. Untuk Pembayaran: DP Reservasi Kamar". Bagian penulisan angka Rp di pojok bawah diisi ....',
    options: ['A. Rp 2.000.000,-', 'B. Rp 200.000,-', 'C. 2000000', 'D. USD 2,000', 'E. Rp 20.000,-'],
    answer: 'A. Rp 2.000.000,-',
    explanation: 'Nominal angka harus sama persis dengan terbilang kalimat (Dua Juta Rupiah = Rp 2.000.000,-).',
    xp: 150
  },
  {
    id: 'b5-q018', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Bilyet Giro berbeda dengan Cek Bank karena Bilyet Giro ....',
    options: ['A. Tidak dapat dicairkan secara tunai, melainkan dipindahbukukan antarrekening', 'B. Boleh dicairkan uang tunai di kasir bank', 'C. Berbentuk koin emas', 'D. Tidak memerlukan tanda tangan', 'E. Tidak memiliki tenggat waktu'],
    answer: 'A. Tidak dapat dicairkan secara tunai, melainkan dipindahbukukan antarrekening',
    explanation: 'Bilyet Giro adalah surat perintah pemindahbukuan dana dari rekening penarik ke rekening penerima.',
    xp: 150
  },
  {
    id: 'b5-q019', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Sertifikat Standar dan Izin Operasional Restoran Hotel diterbitkan pemerintah melalui sistem legalitas ....',
    options: ['A. OSS (Online Single Submission)', 'B. POS Indonesia', 'C. Bank Indonesia', 'D. Pegadaian', 'E. Kementerian Pariwisata saja'],
    answer: 'A. OSS (Online Single Submission)',
    explanation: 'Sistem OSS menerbitkan perizinan berusaha berbasis risiko terintegrasi secara elektronik.',
    xp: 150
  },
  {
    id: 'b5-q020', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Dokumen penawaran harga resmi (Quotation) yang dikirim agen perjalanan ke calon klien tur mencantumkan rincian ....',
    options: ['A. Item layanan, harga per orang, fasilitas inklusif, dan syarat ketentuan', 'B. Daftar nama riwayat hidup direksi', 'C. Catatan utang pribadi', 'D. Hasil tes kesehatan tour guide', 'E. Denah rumah pemilik agen'],
    answer: 'A. Item layanan, harga per orang, fasilitas inklusif, dan syarat ketentuan',
    explanation: 'Quotation / penawaran harga memuat komponen produk, tarif, durasi berlaku, dan benefit.',
    xp: 150
  },
  {
    id: 'b5-q021', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Dokumen bukti penerimaan kas kecil (Petty Cash Voucher) digunakan untuk transaksi ....',
    options: ['A. Pengeluaran kas bernilai relatif kecil dan rutin (seperti beli alat tulis, bayar kurir)', 'B. Pembelian gedung hotel', 'C. Pembayaran gaji direksi bulanan', 'D. Transaksi impor alat masak hotel', 'E. Pelunasan pinjaman bank besar'],
    answer: 'A. Pengeluaran kas bernilai relatif kecil dan rutin (seperti beli alat tulis, bayar kurir)',
    explanation: 'Petty cash voucher mendokumentasikan pengeluaran kas kecil operasional sehari-hari.',
    xp: 150
  },
  {
    id: 'b5-q022', chapter: 5, type: 'multiple_choice', difficulty: 'medium',
    question: 'Ketika dokumen Surat Perjanjian disahihkan di hadapan Notaris, perjanjian tersebut dikategorikan sebagai ....',
    options: ['A. Akta Otentik', 'B. Akta Bawah Tangan', 'C. Surat Biasa', 'D. Dokumen Rahasia', 'E. Berkas Sementara'],
    answer: 'A. Akta Otentik',
    explanation: 'Akta otentik adalah akta yang dibuat dalam bentuk yang ditentukan undang-undang di hadapan pejabat umum berwenang (Notaris).',
    xp: 150
  },

  // Analisis & HOTS (8 soal)
  {
    id: 'b5-q023', chapter: 5, type: 'multiple_choice', difficulty: 'hard',
    question: 'Sebuah hotel melakukan transaksi pembelian bahan makanan senilai Rp 50.000.000 secara kredit. Penjual mengirim Invoice dan Surat Jalan. Setelah dicek, 5 kg daging sapi busuk. Tindakan administrasi dokumen bisnis yang tepat adalah ....',
    options: ['A. Menerbitkan Nota Debet melampirkan bukti retur daging sebelum membayar Faktur/Invoice', 'B. Membayar lunas Invoice tanpa catatan', 'C. Membuang Surat Jalan', 'D. Langsung membakar seluruh bahan makanan', 'E. Membatalkan NPWP penjual'],
    answer: 'A. Menerbitkan Nota Debet melampirkan bukti retur daging sebelum membayar Faktur/Invoice',
    explanation: 'Nota debet mengurangi tagihan pada invoice sebesar nilai barang yang rusak/diretur.',
    xp: 200
  },
  {
    id: 'b5-q024', chapter: 5, type: 'multiple_choice', difficulty: 'hard',
    question: 'Mengapa pencatatan nomor urut dokumen transaksi (seperti Nomor Faktur dan Nomor Kwitansi) harus berurutan secara sistematis (sequential number)?',
    options: ['A. Mencegah manipulasi/penggelapan dana dan memudahkan pelacakan audit internal/eksternal', 'B. Agar tampilan kwitansi terlihat keren', 'C. Syarat mendapatkan stempel toko', 'D. Agar harga barang bisa dinaikkan', 'E. Menghindari pajak daerah'],
    answer: 'A. Mencegah manipulasi/penggelapan dana dan memudahkan pelacakan audit internal/eksternal',
    explanation: 'Nomor urut tercetak mencegah adanya kwitansi ganda atau transaksi yang disembunyikan dalam pembukuan keuangan.',
    xp: 200
  },
  {
    id: 'b5-q025', chapter: 5, type: 'multiple_choice', difficulty: 'hard',
    question: 'Sebuah perusahaan menandatangani Kontrak Sewa Gedung bernilai Rp 200 Juta tanpa membubuhi Bea Meterai yang cukup. Dampak hukum dari Kontrak tersebut adalah ....',
    options: ['A. Perjanjian tetap sah mengikat para pihak, namun jika dijadikan bukti pengadilan wajib dilakukan Pemeteraian Kemudian (n zegelen)', 'B. Perjanjian otomatis batal demi hukum dan tidak berlaku', 'C. Direktur perusahaan langsung dipenjara', 'D. Gedung disita negara', 'E. Penyewa tidak boleh menempati gedung'],
    answer: 'A. Perjanjian tetap sah mengikat para pihak, namun jika dijadikan bukti pengadilan wajib dilakukan Pemeteraian Kemudian (n zegelen)',
    explanation: 'Meterai bukan syarat sahnya perjanjian (syarat sah diatur pasal 1320 KUHPdt), melainkan syarat pelunasan pajak dokumen untuk alat bukti pengadilan.',
    xp: 200
  },
  {
    id: 'b5-q026', chapter: 5, type: 'multiple_choice', difficulty: 'hard',
    question: 'Manakah analisis perbandingan dampak antara sistem billing/invoicing elektronik (E-Invoice) dengan invoicing manual bagi efisiensi bisnis hotel?',
    options: ['A. E-Invoice mempercepat waktu penagihan, meminimalkan error hitung, serta terintegrasi langsung dengan pembukuan', 'B. Invoicing manual lebih aman dari banjir', 'C. E-Invoice membutuhkan biaya kertas lebih mahal', 'D. Invoicing manual otomatis terhubung ke sistem perpajakan', 'E. Tidak ada perbedaan efisiensi'],
    answer: 'A. E-Invoice mempercepat waktu penagihan, meminimalkan error hitung, serta terintegrasi langsung dengan pembukuan',
    explanation: 'E-Invoice otomatis merekap data transaksi ke POS/ERP hotel dan mengurangi keterlambatan pembayaran.',
    xp: 200
  },
  {
    id: 'b5-q027', chapter: 5, type: 'multiple_choice', difficulty: 'hard',
    question: 'Perhatikan dokumen Cek Bank yang diterima staf kasir hotel. Tanggal penulisan Cek tercantum "20 Oktober 2026", padahal hari ini baru "15 September 2026". Cek jenis ini disebut ....',
    options: ['A. Cek Mundur (Post-dated Cheque)', 'B. Cek Kosong', 'C. Cek Silang', 'D. Cek Melingkar', 'E. Cek Kadaluarsa'],
    answer: 'A. Cek Mundur (Post-dated Cheque)',
    explanation: 'Cek mundur memuat tanggal pembayaran di masa mendatang, sehingga bank baru bisa mencairkan pada/setelah tanggal tersebut.',
    xp: 200
  },
  {
    id: 'b5-q028', chapter: 5, type: 'multiple_choice', difficulty: 'hard',
    question: 'Risiko fatal menerima Cek Kosong (Bounced Cheque) dari pelanggan bisnis dan langkah antisipasi terbaik adalah ....',
    options: ['A. Uang tidak dapat dicairkan karena dana di rekening nasabah kurang; antisipasinya meminta Bilyet Giro / transfer lunas sebelum check-in', 'B. Uang berlipat ganda; antisipasinya membiarkan saja', 'C. Rekening bank kasir diblokir', 'D. Bank memberi hadiah bonus', 'E. Bebas potongan pajak'],
    answer: 'A. Uang tidak dapat dicairkan karena dana di rekening nasabah kurang; antisipasinya meminta Bilyet Giro / transfer lunas sebelum check-in',
    explanation: 'Cek kosong ditolak bank karena saldo rekening penarik tidak mencukupi, menyebabkan kerugian finansial hotel.',
    xp: 200
  },
  {
    id: 'b5-q029', chapter: 5, type: 'multiple_choice', difficulty: 'hard',
    question: 'Apa konsekuensi utama jika sebuah hotel beroperasi tanpa memiliki Dokumen AMDAL (Analisis Mengenai Dampak Lingkungan) / UKL-UPL?',
    options: ['A. Terancam sanksi administratif, pembekuan izin usaha, dan pencemaran lingkungan sekitar hotel', 'B. Hanya ditegur lisan', 'C. Bebas bayar listrik', 'D. Jumlah tamu meningkat pesat', 'E. Dianggap hotel ramah lingkungan'],
    answer: 'A. Terancam sanksi administratif, pembekuan izin usaha, dan pencemaran lingkungan sekitar hotel',
    explanation: 'AMDAL / UKL-UPL adalah dokumen legalitas pengelolaan lingkungan wajib bagi usaha perhotelan.',
    xp: 200
  },
  {
    id: 'b5-q030', chapter: 5, type: 'multiple_choice', difficulty: 'hard',
    question: 'Dalam verifikasi dokumen bisnis, staf administrasi mencocokkan Purchase Order (PO) dari pembeli, Surat Jalan (DO) dari gudang, dan Faktur (Invoice) dari penjual. Prosedur pencocokan 3 dokumen ini disebut ....',
    options: ['A. Three-Way Matching Process', 'B. Triple Check Sign', 'C. Cross Test', 'D. Audit Kasir', 'E. Rekonsiliasi Otomatis'],
    answer: 'A. Three-Way Matching Process',
    explanation: 'Three-way matching memastikan jumlah, spesifikasi, dan harga barang di PO, DO, dan Invoice cocok sebelum pembayaran dilunasi.',
    xp: 200
  }
];

export default bab5Questions;
