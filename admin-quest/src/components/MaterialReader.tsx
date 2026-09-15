// =====================================================
// ADMIN QUEST — Interactive Material Summary Reader
// Direct content from Textbook Administrasi Umum Kelas X SMK
// =====================================================

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CHAPTERS } from '../data/questions';
import { soundFX } from '../utils/audio';

// Material summaries extracted from textbook
const CHAPTER_MATERIALS: Record<number, {
  title: string;
  summary: string;
  points: { title: string; content: string }[];
  keyTerms: { term: string; definition: string }[];
}> = {
  1: {
    title: 'Ruang Lingkup Administrasi',
    summary: 'Administrasi berasal dari bahasa Latin "ad" (kepada/untuk) dan "ministrare" (melayani/membantu). Dalam arti luas, administrasi adalah seluruh proses kerja sama antara dua orang atau lebih yang rasional untuk mencapai tujuan secara efektif dan efisien.',
    points: [
      { title: '1. Pengertian Administrasi', content: 'Administrasi mencakup arti sempit (tata usaha: catat-mencatat, surat-menyurat, mengetik) dan arti luas (seluruh proses kerja sama kelompok manusia untuk mencapai tujuan).' },
      { title: '2. 7 Tahapan Kegiatan Administrasi', content: 'Menghimpun (collecting), Mencatat (recording), Mengolah (processing), Menggandakan (duplicating), Mengirim (sending), Menyimpan (storing), Mengatur (organizing).' },
      { title: '3. Fungsi Administrasi', content: 'Fungsi Rutin, Fungsi Teknis, Fungsi Analitis, Fungsi Interpersonal, dan Fungsi Manajerial (Planning, Organizing, Directing, Controlling).' },
      { title: '4. Tujuan Utama Administrasi', content: 'Menyediakan data/informasi akurat bagi pimpinan, mempermudah pengawasan operasional, serta efisiensi penggunaan sumber daya kantor.' }
    ],
    keyTerms: [
      { term: 'Efektif', definition: 'Tercapainya sasaran atau tujuan yang telah ditetapkan tepat waktu.' },
      { term: 'Efisien', definition: 'Penggunaan sumber daya (daya, dana, waktu) secara hemat dan tepat tanpa pemborosan.' },
      { term: 'Tata Usaha', definition: 'Kegiatan administrasi dalam arti sempit yang berfokus pada warta dan catatan kantor.' }
    ]
  },
  2: {
    title: 'Dokumen Kantor & Industri Perhotelan',
    summary: 'Dokumen adalah surat atau berkas berharga yang dapat dijadikan bukti keterangan resmi. Di industri perhotelan, dokumen terbagi atas dokumen administratif umum dan dokumen khusus operasional kamar/F&B.',
    points: [
      { title: '1. Jenis Dokumen Berdasarkan Fisik', content: 'Dokumen Literar (buku/majalah), Dokumen Korporal (benda bersejarah/patung), Dokumen Privat (surat/ijazah/kontrak).' },
      { title: '2. Dokumen Khusus Industri Perhotelan', content: 'Registration Card (Kartu Registrasi Tamu), Guest Folio (Tagihan Rekening Tamu), VOUCHER Reservasi, Room Count Sheet, dan Housekeeping Report.' },
      { title: '3. Mesin Penggandaan Dokumen', content: 'Mesin Mesin Fotokopi (Copier), Risograph, Printer Multifungsi, dan Mesin Stensil.' }
    ],
    keyTerms: [
      { term: 'Registration Card', definition: 'Formulir data diri yang diisi tamu saat check-in di Front Office.' },
      { term: 'Guest Folio', definition: 'Catatan seluruh transaksi tagihan kamar dan pengeluaran tamu selama menginap.' },
      { term: 'Risograph', definition: 'Mesin pengganda dokumen kecepatan tinggi untuk jumlah salinan sangat banyak.' }
    ]
  },
  3: {
    title: 'Dasar Surat Menyurat Resmi',
    summary: 'Surat merupakan sarana komunikasi tertulis untuk menyampaikan pesan/informasi resmi dari satu pihak ke pihak lain. Surat berfungsi sebagai alat bukti tertulis, pedoman tugas, dan wakil organisasi.',
    points: [
      { title: '1. Bentuk-Bentuk Surat (Style)', content: 'Full Block Style (Lurus Penuh), Block Style (Lurus), Semi Block Style (Setengah Lurus - paragraf menjorok), Indented Style (Lekuk).' },
      { title: '2. Struktur Bagian Surat Resmi', content: 'Kepala Surat (Kop), Nomor/Tanggal/Lampiran/Hal, Alamat Tujuan (Yth.), Salam Pembuka, Paragraf Pembuka/Isi/Penutup, Salam Penutup, Tanda Tangan & Nama Jelas, Tembusan (CC).' },
      { title: '3. Bahasa Surat Dinas & Niaga', content: 'Wajib menggunakan bahasa Indonesia baku (PUEBI/EYD), lugas, jelas, santun, dan menghindari kalimat ambigu.' }
    ],
    keyTerms: [
      { term: 'Kop Surat', definition: 'Kepala surat resmi yang memuat nama lembaga, logo, alamat lengkap, dan nomor kontak.' },
      { term: 'u.p. (untuk perhatian)', definition: 'Catatan pada alamat tujuan agar surat diteruskan langsung ke pejabat spesifik.' },
      { term: 'Tembusan (CC)', definition: 'Daftar pihak penerima salinan surat selain penerima utama.' }
    ]
  },
  4: {
    title: 'Sistem Kearsipan Perkantoran',
    summary: 'Arsip adalah rekaman kegiatan atau peristiwa dalam berbagai bentuk media. Pengelolaan kearsipan yang efektif menjamin penemuan kembali dokumen (retrieval) dalam waktu singkat (< 1 menit).',
    points: [
      { title: '1. 5 Sistem Penyimpanan Arsip Utama', content: 'Sistem Abjad (Alphabetical), Sistem Subjek (Pokok Masalah), Sistem Tanggal (Chronological), Sistem Wilayah (Geographical), dan Sistem Nomor (Numeric).' },
      { title: '2. Peralatan Kearsipan Standar', content: 'Filing Cabinet, Ordner, Map Snelhefter, Guide (Sekat Arsip), Perforator (Pelubang Kertas), dan Tickler File.' },
      { title: '3. Tahapan Penyimpanan Arsip (Filing Steps)', content: '1) Memeriksa Tanda Lepas (Release Mark) -> 2) Mengindeks -> 3) Memberi Kode -> 4) Menyortir -> 5) Menempatkan Berkas.' }
    ],
    keyTerms: [
      { term: 'Guide', definition: 'Sekat kertas tebal pembatas antar kelompok arsip di laci filing cabinet.' },
      { term: 'JRA (Jadwal Retensi Arsip)', definition: 'Daftar batas jangka waktu penyimpanan dan penentuan pemusnahan arsip.' },
      { term: 'Out Slip', definition: 'Lembar bukti peminjaman arsip yang menggantikan posisi berkas yang keluar.' }
    ]
  },
  5: {
    title: 'Menyiapkan Dokumen Bisnis',
    summary: 'Dokumen bisnis mendokumentasikan transaksi perniagaan legal. Bukti fisik dan digital menjamin pertanggungjawaban audit keuangan dan keabsahan hukum bisnis perhotelan.',
    points: [
      { title: '1. Bukti Pembayaran & Tagihan', content: 'Kwitansi (bukti terima uang tunai), Faktur/Invoice (tagihan kredit), Purchase Order (surat pesanan), Nota Debet/Kredit (retur/koreksi harga).' },
      { title: '2. Alat Pembayaran Perbankan', content: 'Cek (perintah bayar tunai) dan Bilyet Giro (perintah pemindahbukuan dana antar-rekening).' },
      { title: '3. Legalitas & Perizinan Usaha', content: 'NIB (Nomor Induk Berusaha via OSS), NPWP (Nomor Pokok Wajib Pajak), PBG/IMB, dan AMDAL/UKL-UPL.' }
    ],
    keyTerms: [
      { term: 'Invoice', definition: 'Dokumen rincian tagihan barang/jasa pembelian kredit.' },
      { term: 'Bilyet Giro', definition: 'Surat perintah pemindahbukuan dana dari rekening penarik ke rekening penerima.' },
      { term: 'Three-Way Matching', definition: 'Prosedur pencocokan PO, Surat Jalan, dan Invoice sebelum pembayaran dilunasi.' }
    ]
  },
  6: {
    title: 'Struktur Organisasi Industri',
    summary: 'Struktur organisasi adalah garis wewenang, tanggung jawab, dan pembagian tugas dalam suatu badan usaha. Struktur organisasi perhotelan umumnya dipimpin General Manager dengan departemen-departemen operasional.',
    points: [
      { title: '1. Bentuk-Bentuk Struktur Organisasi', content: 'Struktur Garis/Lini (vertikal langsung), Struktur Fungsional (berdasarkan keahlian), Struktur Garis & Staf (ditambah penasihat ahli), Struktur Matriks (gabungan fungsi & proyek).' },
      { title: '2. Prinsip Organisasi Efektif', content: 'Kesatuan Komando (Unity of Command - 1 bawahan 1 atasan), Rentang Pengawasan (Span of Control), dan Pembagian Kerja (Division of Labor).' },
      { title: '3. Departemen Utama Hotel', content: 'Front Office, Housekeeping, Food & Beverage (F&B), Accounting, HRD, Sales & Marketing, Engineering, dan Security.' }
    ],
    keyTerms: [
      { term: 'General Manager (GM)', definition: 'Pimpinan eksekutif tertinggi operasional seluruh divisi hotel.' },
      { term: 'Job Description', definition: 'Dokumen tertulis rincian tugas, wewenang, dan tanggung jawab posisi pekerjaan.' },
      { term: 'Delegasi Wewenang', definition: 'Pendelegasian hak mengambil keputusan dari atasan ke bawahan.' }
    ]
  }
};

export const MaterialReader: React.FC = () => {
  const { chapterIdStr } = useParams<{ chapterIdStr: string }>();
  const [activeChapter, setActiveChapter] = useState<number>(
    chapterIdStr ? parseInt(chapterIdStr, 10) : 1
  );

  const material = CHAPTER_MATERIALS[activeChapter] || CHAPTER_MATERIALS[1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Chapter Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CHAPTERS.map((ch) => (
          <button
            key={ch.id}
            onClick={() => {
              soundFX.playClick();
              setActiveChapter(ch.id);
            }}
            className={`shrink-0 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeChapter === ch.id
                ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 scale-105'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>{ch.icon}</span>
            <span>Bab {ch.id}</span>
          </button>
        ))}
      </div>

      {/* Main Material Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="border-b border-slate-800 pb-4">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            MODUL MATERI — BAB {activeChapter}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            {material.title}
          </h1>
          <p className="text-slate-300 text-sm mt-2 leading-relaxed bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
            {material.summary}
          </p>
        </div>

        {/* Key Points */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span>📌</span>
            <span>Poin-Poin Utama Pembelajaran</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {material.points.map((pt, idx) => (
              <div key={idx} className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-4 space-y-1">
                <div className="font-bold text-amber-400 text-sm">{pt.title}</div>
                <div className="text-xs text-slate-300 leading-relaxed">{pt.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Glossary Terms */}
        <div className="space-y-4 border-t border-slate-800 pt-6">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span>📖</span>
            <span>Glosarium Istilah Penting</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {material.keyTerms.map((kt, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-800 rounded-2xl p-3.5 space-y-1">
                <div className="font-extrabold text-indigo-300 text-xs">{kt.term}</div>
                <div className="text-[11px] text-slate-400 leading-normal">{kt.definition}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Start Quiz Quest Footer CTA */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Sudah menguasai materi Bab {activeChapter}? Uji pemahamanmu sekarang!
          </div>

          <Link
            to={`/quiz/${activeChapter}`}
            onClick={() => soundFX.playClick()}
            className="w-full sm:w-auto py-3 px-6 rounded-2xl font-bold text-xs bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/20 text-center transition-all flex items-center justify-center gap-2"
          >
            <span>⚡ Mulai Quest Bab {activeChapter}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
