
import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 sm:py-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-full w-fit mb-6 sm:mb-8 animate-pulse">
            <ShieldCheck size={14} className="sm:size-16" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Penyelamat Ekosistem Laut</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Menjaga Kehidupan di <span className="text-emerald-400 relative inline-block">
              Banaran.
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-emerald-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-xl">
            Selamat datang di pusat pelestarian penyu Desa Banaran, Kulon Progo. Bersama masyarakat dan relawan, kami berdedikasi menjaga kelestarian penyu di Pantai Trisik untuk generasi mendatang.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a href="#education" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-600/20">
              Pelajari Lebih Lanjut
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#news" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all text-center">
              Berita Kegiatan
            </a>
          </div>
        </div>
      </div>

      {/* Stats Quick Look - Hidden on Mobile, Shown on Large Screens */}
      <div className="absolute bottom-8 right-0 left-0 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-end gap-6">
          {[
            { label: 'Tukik Dilepaskan', value: '11.200+' },
            { label: 'Nesting Site', value: 'Trisik Beach' },
            { label: 'Relawan Aktif', value: '50+' }
          ].map((stat, i) => (
            <div key={i} className="glass-effect p-6 rounded-3xl min-w-[220px] shadow-2xl">
              <p className="text-emerald-400 text-[10px] font-bold mb-1 uppercase tracking-[0.2em]">{stat.label}</p>
              <p className="text-white text-3xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
