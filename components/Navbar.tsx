import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../constants";

/**
 * Path logo diperbarui ke file terbaru.
 * Menggunakan string path karena dijalankan langsung di browser.
 */
const logoApp = "./Assets/Logo Abadi.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-effect py-3 shadow-md" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* CONTAINER LOGO */}
            <div className={`transition-all duration-500 ${scrolled ? "scale-90" : "scale-100"}`}>
              <div className="flex items-center justify-center overflow-hidden w-10 h-10 sm:w-12 sm:h-12">
                <img
                  src={logoApp}
                  alt="Logo Konservasi Penyu Abadi"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback jika file lokal tidak ditemukan
                    (e.currentTarget as HTMLImageElement).src = "/Assets/Logo2.png";
                  }}
                />
              </div>
            </div>

            <span className={`text-lg sm:text-xl font-black tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}>
              Konservasi Penyu<span className="text-emerald-500"> Abadi</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className={`text-sm font-semibold transition-all hover:text-emerald-500 relative group ${scrolled ? "text-slate-600" : "text-slate-100"}`}>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-lg transition-colors ${scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"}`} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)}></div>

      <div className={`md:hidden fixed top-0 right-0 h-full w-[280px] z-50 bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <img src={logoApp} alt="Logo" className="w-8 h-8 object-contain" onError={(e) => ((e.currentTarget as HTMLImageElement).src = "/Assets/Logo2.png")} />
              <span className="font-bold text-emerald-600">Konservasi Penyu Abadi</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-900">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700 hover:text-emerald-600 py-2 border-b border-slate-50">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
