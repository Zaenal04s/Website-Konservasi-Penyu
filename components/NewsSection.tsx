
import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { NEWS_DATA } from '../constants';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">Berita Terbaru</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">Aksi Nyata Kami di Lapangan</h3>
            <p className="mt-6 text-slate-500 text-lg leading-relaxed">
              Ikuti perkembangan terbaru upaya konservasi dan berbagai kegiatan komunitas di Desa Banaran.
            </p>
          </div>
          <a href="#gallery" className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
            Lihat Galeri Foto <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {NEWS_DATA.map((news) => (
            <div 
              key={news.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 flex flex-col sm:flex-row shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500"
            >
              <div className="sm:w-2/5 relative overflow-hidden h-48 sm:h-auto">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-1.5 shadow-sm">
                    <Tag size={10} /> {news.category}
                  </span>
                </div>
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-4">
                  <Calendar size={14} className="text-emerald-500" />
                  {news.date}
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                  {news.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {news.excerpt}
                </p>
                <button className="mt-auto text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Baca Selengkapnya <ArrowRight size={16} className="text-emerald-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#gallery" className="inline-flex items-center gap-2 text-emerald-600 font-bold">
            Lihat Galeri Foto <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
