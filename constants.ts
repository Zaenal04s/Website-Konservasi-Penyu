
import { NewsItem, GalleryItem, TurtleStat } from './types';

// Data statistik penyu untuk visualisasi di StatsSection
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
    id: 'n1',
    date: '15 Mei 2024',
    title: 'Pelepasan 500 Tukik Bersama Komunitas Lokal di Pantai Trisik',
    excerpt: 'Masyarakat Desa Banaran bersama relawan melakukan pelepasan tukik hasil penetasan alami untuk meningkatkan populasi penyu hijau.',
    imageUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Pelepasan'
  },
  {
    id: 'n2',
    date: '2 Juni 2024',
    title: 'Penemuan 12 Sarang Penyu Baru dalam Satu Malam Patroli',
    excerpt: 'Tim monitoring melaporkan pendaratan penyu yang meningkat drastis pada puncak musim bertelur tahun ini di sepanjang pesisir Banaran.',
    imageUrl: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&w=800&q=80',
    category: 'Monitoring'
  },
  {
    id: 'n3',
    date: '10 Juni 2024',
    title: 'Edukasi Siswa SD: Menjadi Sahabat Penyu Sejak Dini',
    excerpt: 'Program rutin kunjungan sekolah ke pusat konservasi untuk mengenalkan siklus hidup penyu dan cara menjaga lingkungan pantai.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    category: 'Edukasi'
  },
  {
    id: 'n4',
    date: '22 Juni 2024',
    title: 'Peresmian Ruang Display Edukasi Baru di Pusat Konservasi',
    excerpt: 'Kini pengunjung dapat melihat miniatur sarang dan alat peraga edukatif lainnya untuk memahami proses konservasi dengan lebih baik.',
    imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80',
    category: 'Event'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80',
    title: 'Pelepasan Tukik',
    description: 'Kegiatan pelepasan anak penyu (tukik) ke laut bersama masyarakat Desa Banaran.',
    category: 'pelepasan'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&w=800&q=80',
    title: 'Monitoring Malam Hari',
    description: 'Relawan melakukan pemantauan penyu bertelur di sepanjang Pantai Trisik.',
    category: 'monitoring'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    title: 'Sosialisasi Sekolah',
    description: 'Edukasi pentingnya konservasi penyu kepada siswa-siswi lokal.',
    category: 'kegiatan'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80',
    title: 'Penangkaran Tukik',
    description: 'Fasilitas penetasan telur semi-alami di pusat konservasi Banaran.',
    category: 'kegiatan'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1610473068524-ba4296b63390?auto=format&fit=crop&w=800&q=80',
    title: 'Evakuasi Telur',
    description: 'Memindahkan telur penyu ke tempat yang lebih aman dari predator dan air pasang.',
    category: 'monitoring'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
    title: 'Habitat Pantai',
    description: 'Kondisi lingkungan Pantai Trisik yang menjadi rumah bagi penyu hijau.',
    category: 'monitoring'
  }
];

export const NAV_ITEMS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Edukasi', href: '#education' },
  { label: 'Berita', href: '#news' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Hubungi Kami', href: '#contact' },
];
