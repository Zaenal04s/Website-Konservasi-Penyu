
import React from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend, BarChart, Bar
} from 'recharts';
import { TURTLE_STATS } from '../constants';
import { TrendingUp, Egg, Bird } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-3">Statistik Penyu</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">Monitoring & Dampak Nyata</h3>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-4 self-start md:self-auto shadow-sm">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pertumbuhan Sarang</p>
              <p className="text-base sm:text-lg font-black text-slate-900">+177% Sejak 2019</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Chart 1: Nest Growth */}
          <div className="md:col-span-2 bg-white p-5 sm:p-8 rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">Jumlah Sarang per Tahun</h4>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> Sarang Ditemukan
              </div>
            </div>
            <div className="h-[250px] sm:h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TURTLE_STATS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorNests" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)' }}
                  />
                  <Area type="monotone" dataKey="nests" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorNests)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Indicators Sidebar - Responsive stacking */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:col-span-2 lg:col-span-1">
            <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-emerald-600/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Egg size={24} />
                </div>
                <h4 className="text-lg font-bold">Total Telur</h4>
              </div>
              <p className="text-4xl sm:text-5xl font-black mb-2">52.300+</p>
              <p className="text-emerald-100/80 text-sm leading-relaxed font-medium">Data akumulasi periode 2019-2024 di Pantai Trisik.</p>
            </div>

            <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Bird size={24} />
                </div>
                <h4 className="text-lg font-bold">Pelepasan</h4>
              </div>
              <p className="text-4xl sm:text-5xl font-black mb-2">44.500+</p>
              <p className="text-blue-100/80 text-sm leading-relaxed font-medium">Hatching rate rata-rata mencapai 85%.</p>
            </div>
          </div>

          {/* Chart 2: Hatchling Comparison - Wide on desktop */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-5 sm:p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">Telur vs Tukik Menetas</h4>
            </div>
            <div className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={TURTLE_STATS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="top" align="right" height={36} iconType="circle" wrapperStyle={{fontSize: '12px', fontWeight: 'bold'}} />
                  <Bar dataKey="eggs" name="Jumlah Telur" fill="#cbd5e1" radius={[6, 6, 0, 0]} barSize={16} />
                  <Bar dataKey="hatchlings" name="Tukik Menetas" fill="#10b981" radius={[6, 6, 0, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
