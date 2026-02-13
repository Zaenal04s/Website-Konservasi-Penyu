import React from "react";
import { Waves, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const logoPath = "/Assets/Logo2.png";

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg flex items-center justify-center overflow-hidden w-10 h-10">
                <img
                  src={logoPath}
                  alt="Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = "block";
                  }}
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Konservasi Penyu<span className="text-emerald-400"> Abadi</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Konservasi Penyu Abadi adalah pusat pelestarian dan edukasi penyu di Desa Banaran. Berdedikasi penuh untuk ekosistem laut yang lebih sehat di Pantai Trisik, Kulon Progo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {[
                { label: "Beranda", href: "#home" },
                { label: "Edukasi", href: "#education" },
                { label: "Berita", href: "#news" },
                { label: "Galeri", href: "#gallery" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 text-sm hover:text-emerald-400 transition-colors">
                    {item.label}
                  </a>
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
                <span>halo@penyuabadi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Konservasi Penyu Abadi - Desa Banaran. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-emerald-400">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
