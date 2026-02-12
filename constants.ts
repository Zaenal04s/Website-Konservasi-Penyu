
import { TurtleStat, GalleryItem } from './types';

export const TURTLE_STATS: TurtleStat[] = [
  { year: 2019, nests: 45, eggs: 4500, hatchlings: 3800 },
  { year: 2020, nests: 58, eggs: 6000, hatchlings: 5100 },
  { year: 2021, nests: 72, eggs: 7500, hatchlings: 6400 },
  { year: 2022, nests: 95, eggs: 9800, hatchlings: 8200 },
  { year: 2023, nests: 110, eggs: 11500, hatchlings: 9800 },
  { year: 2024, nests: 125, eggs: 13000, hatchlings: 11200 },
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
  { label: 'Statistik', href: '#stats' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Hubungi Kami', href: '#contact' },
];
