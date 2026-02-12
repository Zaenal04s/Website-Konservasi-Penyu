
import React from 'react';
import { Waves, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Waves className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">PenyuBanaran</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Pusat pelestarian dan edukasi penyu di Desa Banaran. Berdedikasi penuh untuk ekosistem laut yang lebih sehat di Pantai Trisik, Kulon Progo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Statistik', 'Galeri'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 text-sm hover:text-emerald-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm">
                <MapPin size={20} className="text-emerald-500 shrink-0" />
                <span>Desa Banaran, Kec. Galur, Kulon Progo, DIY</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Phone size={20} className="text-emerald-500 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Mail size={20} className="text-emerald-500 shrink-0" />
                <span>halo@penyubanaran</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 Konservasi Penyu Desa Banaran. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400">Kebijakan Privasi</a>
            <a href="#" className="hover:text-emerald-400">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
