import {
  BookOpenCheck,
  ClipboardCheck,
  Cog,
  FileText,
  Handshake,
  HeartHandshake,
  Image,
  Lightbulb,
  RefreshCcw,
  Rocket,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Target,
  Compass,
  Layers,
  Sparkles,
  Eye,
  Flag,
  UserCheck,
  Building2,
} from 'lucide-react'

export const navigationItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Identitas', href: '#identifikasi-diri' },
  { label: 'Refleksi', href: '#refleksi-belajar' },
  { label: 'Inovasi & Seminar', href: '#inovasi-seminar' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
]

export const ppgAboutCards = [
  {
    icon: UserCheck,
    title: 'Data Diri',
    description:
      'Satriya Nugraha, mahasiswa PPG Prajabatan bidang studi Teknik Mesin di Universitas Sarjanawiyata Tamansiswa.',
  },
  {
    icon: GraduationCap,
    title: 'Latar Akademik',
    description:
      'Mengembangkan kompetensi pedagogik dan profesional untuk menghubungkan keilmuan teknik mesin dengan kebutuhan belajar peserta didik SMK.',
  },
  {
    icon: Compass,
    title: 'Arah Pengembangan',
    description:
      'Bertumbuh menjadi pendidik vokasi yang reflektif, adaptif, inovatif, dan berpihak pada keselamatan serta perkembangan peserta didik.',
  },
]

export const ppgStats = [
  {
    icon: UserCheck,
    value: 'Satriya',
    label: 'Satriya Nugraha',
  },
  {
    icon: GraduationCap,
    value: 'PPG',
    label: 'Prajabatan',
  },
  {
    icon: Cog,
    value: 'Teknik',
    label: 'Bidang Studi Teknik Mesin',
  },
  {
    icon: Building2,
    value: 'UST',
    label: 'Yogyakarta',
  },
]

export const coreValues = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Mata Kuliah Inti',
    description:
      'Pembelajaran inti memperkuat pemahaman tentang peserta didik, prinsip pengajaran dan asesmen, pembelajaran sosial-emosional, serta filosofi pendidikan Indonesia.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Mata Kuliah Selektif',
    description:
      'Mata kuliah selektif memberi ruang untuk mendalami strategi pembelajaran yang relevan dengan konteks vokasi, teknologi, dan kebutuhan belajar yang beragam.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Pengalaman Bermakna',
    description:
      'Diskusi, demonstrasi kontekstual, kerja kolaboratif, dan penyusunan perangkat ajar membantu menghubungkan teori pedagogik dengan praktik Teknik Mesin.',
  },
  {
    number: '04',
    icon: RefreshCcw,
    title: 'Refleksi & Tindak Lanjut',
    description:
      'Pengalaman belajar menjadi dasar untuk memperbaiki perencanaan, diferensiasi, asesmen, serta kualitas umpan balik dalam pembelajaran berikutnya.',
  },
]

export const reflectionDocuments = [
  {
    number: '01',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 1',
    title: 'Filosofi Pendidikan & Pendidikan Nilai',
    description:
      'Perubahan fokus dari hasil tugas menuju pemahaman manusia, konteks, nilai, etika, dan tindakan yang mendidik.',
    image: '/assets/reflections/filosofi-pendidikan.png',
    href:
      'https://drive.google.com/file/d/1YqAoSWknsiEvcs7f4_KlYZ-4FeZj-vbv/view?usp=drive_link',
  },
  {
    number: '02',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 1',
    title: 'Pembelajaran Mendalam & Asesmen',
    description:
      'Pergeseran dari metode dan aktivitas menuju tujuan, bukti belajar, asesmen, serta tindak lanjut yang selaras.',
    image: '/assets/reflections/pembelajaran-mendalam.png',
    href:
      'https://drive.google.com/file/d/1mfvt65lGPLunXHGMJYk4AZD9xh3q4Gib/view?usp=drive_link',
  },
  {
    number: '03',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 1',
    title: 'Pemahaman Peserta Didik & Pembelajarannya',
    description:
      'Memahami peserta didik secara holistik serta menyiapkan diferensiasi, scaffolding, dan dukungan yang sesuai.',
    image: '/assets/reflections/pemahaman-peserta-didik.png',
    href:
      'https://drive.google.com/file/d/1Q9Dx-_faHGk_i_WGcOo7ZsLWys1ZZytU/view?usp=drive_link',
  },
  {
    number: '04',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Selektif · Semester 1',
    title: 'Inovasi Pembelajaran Berbasis Ajaran Tamansiswa',
    description:
      'Penerapan tuntunan, keteladanan, dan kemandirian dalam pembelajaran Teknik Mesin.',
    image: '/assets/reflections/inovasi-tamansiswa.jpg',
    href:
      'https://drive.google.com/file/d/162aa32AqfCeR-kOhPPCfc_YiOuNgzmd_/view?usp=drive_link',
  },
  {
    number: '05',
    type: 'PDF · 10 halaman',
    category: 'Praktik Pengalaman Lapangan · Semester 1',
    title: 'PPL Terbimbing di SMK Negeri 2 Depok Sleman',
    description:
      'Perjalanan observasi, asistensi, praktik mengajar, umpan balik, dan refleksi perbaikan pembelajaran.',
    image: '/assets/reflections/ppl-smkn2-depok.jpg',
    href:
      'https://drive.google.com/file/d/1NRA11BcNHdURwaH74OkrcloRYfDKh5V4/view?usp=drive_link',
  },
  {
    number: '06',
    type: 'PDF · 10 halaman',
    category: 'Refleksi Akhir · Semester 2',
    title: 'Refleksi PPG',
    description:
      'Sintesis perjalanan belajar PPG: sebelum, selama, dan rencana pengembangan diri sebagai guru profesional.',
    image: '/assets/reflections/refleksi-ppg.png',
    href:
      'https://drive.google.com/file/d/1Q2HbhezPuty_GiG5ps_0kTuk14wCaNv0/view?usp=drive_link',
  },
  {
    number: '07',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 2',
    title: 'Pembelajaran Sosial Emosional',
    description:
      'Penerapan CASEL, keteladanan guru, experiential learning, dan school well-being di kelas Gambar Teknik.',
    image: '/assets/reflections/pembelajaran-sosial-emosional.png',
    href:
      'https://drive.google.com/file/d/14TLNq28mheTNYeIu0VftPLg8yvjGwPDm/view?usp=drive_link',
  },
  {
    number: '08',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 2',
    title: 'PMA Lanjut: Pembelajaran Mendalam & Asesmen',
    description:
      'Dari rancangan pembelajaran menuju keputusan yang berbasis bukti, asesmen, dan tindak lanjut di ruang kelas.',
    image: '/assets/reflections/pma-lanjut.png',
    href:
      'https://drive.google.com/file/d/1tN52-ftHOEWo4EWeaJHpx-FefK9iGF9J/view?usp=drive_link',
  },
  {
    number: '09',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Selektif · Semester 2',
    title: 'Inovasi Kejuruan',
    description:
      'Dari kebutuhan nyata di bengkel menuju rancangan media pembelajaran kejuruan yang siap diuji.',
    image: '/assets/reflections/inovasi-kejuruan.png',
    href:
      'https://drive.google.com/file/d/1k87fnFgCPbW6yItudxLL0Qipi3sXc14A/view?usp=drive_link',
  },
  {
    number: '10',
    type: 'PDF · 10 halaman',
    category: 'Praktik Pengalaman Lapangan · Semester 2',
    title: 'PPL Mandiri',
    description:
      'Pengelolaan kelas secara mandiri pada Gambar Teknik dan CNC menuju guru yang lebih percaya diri.',
    image: '/assets/reflections/ppl-mandiri.png',
    href:
      'https://drive.google.com/file/d/1u1D6_slM7ZfDxBdkUiFCh9w_K9rVUmXl/view?usp=drive_link',
  },
  {
    number: '11',
    type: 'PDF · 10 halaman',
    category: 'Projek Kepemimpinan · Semester 2',
    title: 'Refleksi Projek Kepemimpinan',
    description:
      'Kolaborasi bersama Komunitas Elingo Jogja dalam projek Java Edu Culture serta analisis 4C atas dampaknya.',
    image: '/assets/reflections/refleksi-projek-kepemimpinan.png',
    href:
      'https://drive.google.com/file/d/1mQhlPnIn_cDYrYqzEyxlbUykr1CzwIyl/view?usp=drive_link',
  },
]

export const featuredPrograms = [
  {
    number: '01',
    icon: Compass,
    category: 'Web Interaktif Gambar Teknik',
    title: 'ARCUS — Ruang Belajar Gambar Teknik',
    description:
      'Media pembelajaran gambar teknik manual berbasis web yang memadukan pengenalan alat dan pensil, standardisasi garis ISO, etiket, proyeksi orthogonal, model 3D, lembar kerja interaktif, hingga tes diagnostik, UTS, UAS, dan sertifikat kelulusan.',
    badge: 'ARCUS',
    image: '/assets/innovations/arcus-preview.png',
    href: 'https://satriyanugraha07-code.github.io/Lomba-Media-Pembelajaran/',
    linkLabel: 'Buka ARCUS',
  },
]

export const galleryCategories = [
  'Semua',
  'Dokumentasi',
]

export const galleryItems = [
  {
    id: 1,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 01',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-01.webp',
    featured: true,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 2,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 02',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-02.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 3,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 03',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-03.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 4,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 04',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-04.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 5,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 05',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-05.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 6,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 06',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-06.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 7,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 07',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-07.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
]

export const articleItems = [
  {
    id: 1,
    category: 'Inovasi Pembelajaran',
    title: 'Strategi Project-Based Learning pada Mata Pelajaran Pemesinan SMK',
    excerpt:
      'Bagaimana menghubungkan teori dasar teknik mesin dengan pembuatan produk riil yang menumbuhkan kreativitas dan kedisiplinan peserta didik.',
    date: '15 Januari 2025',
    readTime: '4 menit baca',
    image: '/assets/backgrounds/bg-pastel-03.png',
    featured: true,
  },
  {
    id: 2,
    category: 'Refleksi Pedagogik',
    title: 'Membangun Ekosistem Pembelajaran Vokasi yang Aman dan Empathic',
    excerpt:
      'Pentingnya integrasi kesadaran sosial-emosional dalam mengelola ruang praktik bengkel agar setiap murid merasa dihargai.',
    date: '28 Desember 2024',
    readTime: '3 menit baca',
    image: '/assets/backgrounds/bg-pastel-02.png',
    featured: false,
  },
  {
    id: 3,
    category: 'Teknologi Vokasi',
    title: 'Tantangan Transformasi Digital & CAD/CAM di Sekolah Kejuruan',
    excerpt:
      'Langkah taktis pendidik dalam menjembatani teknologi mesin konvensional menuju otomatisasi Industri 4.0.',
    date: '10 November 2024',
    readTime: '5 menit baca',
    image: '/assets/backgrounds/bg-pastel-01.png',
    featured: false,
  },
]

export const contactInfo = {
  institution: 'Universitas Sarjanawiyata Tamansiswa (UST)',
  program: 'PPG Prajabatan Teknik Mesin',
  address: 'Jl. Kusumanegara No.157, Muja Muju, Umbulharjo, Kota Yogyakarta',
  email: 'ppg.teknikmesin@ustjogja.ac.id',
  phone: '+62 274 551539',
}
