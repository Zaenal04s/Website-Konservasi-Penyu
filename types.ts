
export interface TurtleStat {
  year: number;
  nests: number;
  eggs: number;
  hatchlings: number;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: 'Event' | 'Edukasi' | 'Monitoring' | 'Pelepasan';
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'kegiatan' | 'pelepasan' | 'monitoring';
}

export interface NavItem {
  label: string;
  href: string;
}
