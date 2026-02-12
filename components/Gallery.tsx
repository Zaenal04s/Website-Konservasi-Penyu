
import React, { useState } from 'react';
import { GALLERY_DATA } from '../constants';
import { Search } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'kegiatan' | 'pelepasan' | 'monitoring'>('all');

  const filteredData = activeTab === 'all' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeTab);

  const tabs = [
    { id: 'all', label: 'Semua' },
    { id: 'kegiatan', label: 'Edukasi' },
    { id: 'pelepasan', label: 'Pelepasan' },
    { id: 'monitoring', label: 'Monitoring' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-emerald-600 uppercase tracking-widest mb-3">Dokumentasi</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Galeri Kegiatan</h3>
          <p className="max-w-2xl mx-auto text-slate-600">
            Kumpulan momen berharga dalam upaya kami melestarikan penyu di Desa Banaran.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-3xl overflow-hidden aspect-square bg-slate-100"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-300 text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
