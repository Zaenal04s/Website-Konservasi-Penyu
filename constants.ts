
import { NewsItem, GalleryItem, TurtleStat } from './types';

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
    date: '10 Mei 2024',
    title: 'Ratusan Tukik Dilepasliarkan di Pantai Trisik Kulon Progo',
    excerpt: 'Kegiatan rutin pelestarian penyu di Pantai Trisik melibatkan berbagai elemen masyarakat untuk menjaga ekosistem laut.',
    imageUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Pelepasan',
    url: 'https://jateng.antaranews.com/berita/489434/ratusan-tukik-dilepasliarkan-di-pantai-trisik-kulon-progo'
  },
  {
    id: 'n2',
    date: '12 Juni 2023',
    title: 'Musim Penyu Bertelur di Pantai Trisik Kulon Progo Dimulai',
    excerpt: 'Petugas dan relawan mulai meningkatkan intensitas patroli malam hari seiring masuknya musim pendaratan penyu.',
    imageUrl: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&w=800&q=80',
    category: 'Monitoring',
    url: 'https://www.harianjogja.com/news/read/2023/06/12/514/1138332/musim-penyu-bertelur-di-pantai-trisik-kulon-progo-dimulai'
  },
  {
    id: 'n3',
    date: '2022',
    title: 'Pendaratan Penyu di Pantai Trisik Banaran Meningkat',
    excerpt: 'Data menunjukkan tren positif pendaratan penyu hijau di pesisir selatan Galur berkat upaya konservasi yang konsisten.',
    imageUrl: 'https://images.unsplash.com/photo-1610473068524-ba4296b63390?auto=format&fit=crop&w=800&q=80',
    category: 'Monitoring',
    url: 'https://sorotkulonprogo.com/berita-7104-pendaratan-penyu-di-pantai-trisik-meningkat.html'
  },
  {
    id: 'n4',
    date: '2024',
    title: 'Edukasi Lingkungan: Kunjungan Sekolah ke Pesisir Trisik',
    excerpt: 'Siswa-siswi mengenal proses penetasan telur penyu semi-alami di pusat informasi konservasi Desa Banaran.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    category: 'Edukasi',
    url: 'https://kulonprogokab.go.id/v21/index.php'
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
  }
];

export const NAV_ITEMS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Edukasi', href: '#education' },
  { label: 'Berita', href: '#news' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Hubungi Kami', href: '#contact' },
];
