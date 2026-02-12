import { NewsItem, GalleryItem, TurtleStat } from "./types";

export const TURTLE_STATS: TurtleStat[] = [
  { year: 2019, nests: 42, eggs: 3800, hatchlings: 3100 },
  { year: 2020, nests: 58, eggs: 5400, hatchlings: 4600 },
  { year: 2021, nests: 75, eggs: 7100, hatchlings: 6100 },
  { year: 2022, nests: 92, eggs: 8800, hatchlings: 7600 },
  { year: 2023, nests: 108, eggs: 10200, hatchlings: 8900 },
  { year: 2024, nests: 125, eggs: 17000, hatchlings: 14200 },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: "n1",
    date: "24 Desember 2018",
    title: "Pelepasan Tukik Selalu Menjadi Daya Tarik Pantai Trisik",
    excerpt: "Di pantai ini terdapat aktivitas pelestarian penyu yang dikerjakan secara mandiri oleh kelompok warga setempat. Mereka, mantan nelayan dan petani musiman, yang menamai diri Penyu Abadi Trisik.",
    imageUrl: "Assets/Pelepasan Penyu.jpg",
    category: "Pelepasan",
    url: "https://travel.kompas.com/read/2018/12/24/090600727/pelepasan-tukik-selalu-jadi-daya-tarik-pantai-trisik?page=all",
  },
  {
    id: "n2",
    date: "25 Oktober 2017",
    title: "Geliat Konservasi Penyu Hijau di Pantai Trisik Kulonprogo",
    excerpt: "Ketua Kelompok Konservasi Penyu Abadi Trisik, Jaka Samudra mengatakan, penyu hijau sering naik ke daratan ketika masa bertelur.",
    imageUrl: "Assets/Monitoring Penyu.webp",
    category: "Monitoring",
    url: "https://jogja.tribunnews.com/2017/10/25/geliat-konservasi-penyu-hijau-di-pantai-trisik-kulonprogo",
  },
  {
    id: "n3",
    date: "29 Oktober 2025",
    title: "Tim FKH UGM Melakukan Relokasi Tempat Konservasi Penyu",
    excerpt: "Yudhi bersama tim dari mahasiswa FKH UGM melakukan pemindahan lokasi konservasi penyu ke tempat pelelangan ikan yang lokasinya jauh dari bibir pantai dengan fasilitas yang kurang memadai.",
    imageUrl: "Assets/Relokasi Penyu.jpeg",
    category: "Event",
    url: "https://ugm.ac.id/id/berita/tim-fkh-ugm-melakukan-konservasi-penyu-di-kawasan-pantai-trisik/",
  },
  {
    id: "n4",
    date: "28 Juli 2018",
    title: "Edukasi di Konservasi Penyu Abadi",
    excerpt:
      "Salah seorang pengelola, Dwi Suryaputra, mengatakan kadar salinitas atau kadar garam dalam air begitu krusial bagi penyu, tukik dan telur. Bila kadar garam tidak sesuai, maka akan memberikan pengaruh buruk bagi tukik dan penyu.",
    imageUrl: "Assets/Edukasi Penyu.webp",
    category: "Edukasi",
    url: "https://wisata.harianjogja.com/read/2018/07/28/504/930583/yuk-belajar-konservasi-penyu-di-pantai-trisik",
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "1",
    url: "Assets/Pelepasan2.webp",
    title: "Pelepasan Tukik",
    description: "Kegiatan pelepasan anak penyu (tukik) ke laut bersama masyarakat Desa Banaran.",
    category: "pelepasan",
  },
  {
    id: "2",
    url: "Assets/Monitoring2.webp",
    title: "Monitoring Penyu",
    description: "Relawan melakukan pemantauan penyu di sepanjang Pantai Trisik.",
    category: "monitoring",
  },
  {
    id: "3",
    url: "Assets/Edukasi2.webp",
    title: "Edukasi di KPA",
    description: "Edukasi pentingnya konservasi penyu kepada masyarakat.",
    category: "kegiatan",
  },
  {
    id: "4",
    url: "Assets/Edukasi3.webp",
    title: "Edukasi di KPA",
    description: "Edukasi pelestarian penyu kepada relawan.",
    category: "kegiatan",
  },
];

export const NAV_ITEMS = [
  { label: "Beranda", href: "#home" },
  { label: "Edukasi", href: "#education" },
  { label: "Berita", href: "#news" },
  { label: "Galeri", href: "#gallery" },
  { label: "Hubungi Kami", href: "#contact" },
];
