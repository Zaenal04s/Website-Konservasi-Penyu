import React from "react";
import { Info, Heart, Sprout, ShieldAlert } from "lucide-react";

const Education: React.FC = () => {
  const features = [
    {
      icon: <Info size={24} className="text-emerald-600" />,
      title: "Apa Itu Konservasi Penyu?",
      desc: "Upaya terpadu untuk melindungi habitat, proses bertelur, hingga pelepasan tukik ke laut bebas guna mencegah kepunahan spesies.",
      color: "bg-emerald-50",
    },
    {
      icon: <ShieldAlert size={24} className="text-blue-600" />,
      title: "Mengapa Sangat Penting?",
      desc: "Penyu adalah penjaga kesehatan ekosistem laut. Mereka menjaga populasi ubur-ubur dan kesehatan padang lamun serta terumbu karang.",
      color: "bg-blue-50",
    },
    {
      icon: <Sprout size={24} className="text-orange-600" />,
      title: "Langkah Pelestarian",
      desc: "Kami melakukan monitoring pantai malam hari, pemindahan telur ke sarang semi-alami, hingga program edukasi masyarakat pesisir.",
      color: "bg-orange-50",
    },
    {
      icon: <Heart size={24} className="text-rose-600" />,
      title: "Bagaimana Anda Membantu?",
      desc: "Mulai dari tidak membuang sampah plastik, menghindari lampu terang di pantai saat musim bertelur, hingga mendukung program adopsi sarang.",
      color: "bg-rose-50",
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">Edukasi</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Mengenal Lebih Dekat</h3>
          <p className="max-w-2xl mx-auto text-slate-500 text-base sm:text-lg leading-relaxed">Memahami peran krusial penyu dalam menjaga keseimbangan alam dan bagaimana upaya kita di Desa Banaran dapat membuat perubahan nyata.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((f, i) => (
            <div key={i} className="p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 hover:border-emerald-100 hover:bg-emerald-50/10 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 group">
              <div className={`w-16 h-16 ${f.color} rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>{f.icon}</div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight">{f.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 sm:mt-32 bg-slate-900 rounded-[3rem] p-8 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 sm:gap-20">
            <div className="flex-1">
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 tracking-tight">Fakta Menarik: Penyu Desa Banaran</h4>
              <ul className="space-y-6">
                {[
                  "Penyu Hijau (Chelonia mydas) adalah tamu paling sering di Pantai Trisik.",
                  "Satu sarang dapat berisi 80-120 butir telur yang membutuhkan 50-60 hari untuk menetas.",
                  "Penyu memiliki GPS alami yang luar biasa, kembali ke pantai yang sama tempat mereka lahir.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-5 text-slate-300 group">
                    <span className="text-emerald-400 font-black text-xl leading-none">0{i + 1}.</span>
                    <span className="text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <div className="aspect-[4/3] sm:aspect-video rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img src="Assets/Penyu-Hijau.jpg" alt="Turtle Conservation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
