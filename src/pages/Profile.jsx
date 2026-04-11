import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, Star, Clock, MapPin, MoreHorizontal, 
  ShieldCheck, Wrench, MessageCircle, Phone, 
  CheckCircle2, Award, Zap, Camera
} from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://69bfc34f72ca04f3bcb92a0d.mockapi.io/category"; 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data && Array.isArray(data) && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setUser(data[randomIndex]);
        }
      } catch (err) {
        console.error("Xəta:", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-[#fdfdfd]">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-opacity-50"></div>
        <Wrench className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500" size={20} />
      </div>
    </div>
  );

  if (!user) return <div className="p-10 text-center font-bold text-gray-500">Usta tapılmadı.</div>;

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-900">
      
      {/* HEADER SECTION (Responsive Banner) */}
      <div className="relative h-48 md:h-72 w-full bg-slate-900">
        <img 
          src={user.portfolioimage1} 
          className="w-full lg:hidden h-full object-cover opacity-40 transition-opacity duration-700" 
          alt="Work Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] to-transparent"></div>
        
        {/* Nav Controls */}
        <div className="absolute top-6 left-4 right-4 max-w-6xl mx-auto flex justify-between items-center">
          <button className="p-2.5 bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white/40 transition-all border border-white/20 shadow-xl">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            <button className="p-2.5 bg-white/20 backdrop-blur-xl rounded-full text-white border border-white/20 shadow-xl"><Camera size={20} /></button>
            <button className="p-2.5 bg-white/20 backdrop-blur-xl rounded-full text-white border border-white/20 shadow-xl"><MoreHorizontal size={24} /></button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 -mt-20 md:-mt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Profile & Trust Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 text-center overflow-hidden relative">
              {/* Active Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-tighter"> Onlayn</span>
              </div>

              <div className="relative inline-block group">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img src={user.profilimage} alt={user.fullname} className="w-full h-full  object-cover scale-110" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2.5 rounded-2xl shadow-xl border-4 border-white">
                  <ShieldCheck size={24} />
                </div>
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none">{user.fullname}</h1>
                <div className="flex items-center justify-center gap-2 mt-3 text-orange-600">
                  <Zap size={16} fill="currentColor" />
                  <span className="font-bold uppercase text-xs tracking-[0.2em]">{user.job}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 mt-10 bg-slate-50 rounded-[2rem] p-4">
                <div className="py-2">
                  <p className="text-xl font-black text-slate-900 leading-none">{user.rating}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">Ulduz</p>
                </div>
                <div className="py-2 border-x border-slate-200">
                  <p className="text-xl font-black text-slate-900 leading-none">{user.experience.split(' ')[0]}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">İl Təcrübə</p>
                </div>
                <div className="py-2">
                  <p className="text-xl font-black text-slate-900 leading-none">100%</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">Zəmanət</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-[1.8rem] font-black text-lg shadow-xl shadow-slate-200 flex items-center justify-center gap-3 transition-all active:scale-95">
                  <Phone size={20} />
                  Zəng Et
                </button>
                <button className="w-full bg-white border-2 border-slate-100 hover:border-orange-200 text-slate-900 py-5 rounded-[1.8rem] font-black flex items-center justify-center gap-3 transition-all group">
                  <MessageCircle size={20} className="text-orange-500" />
                  WhatsApp Yaz
                </button>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2rem] p-6 text-white shadow-xl shadow-orange-100">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-orange-100 text-xs font-bold uppercase tracking-wider mb-1">Xidmət haqqı</p>
                  <p className="text-3xl font-black leading-none">{user.price}</p>
                </div>
                <CheckCircle2 size={32} className="opacity-40" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Biography */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Peşəkar Profili</h3>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Mən <span className="text-slate-900 font-bold">{user.fullname}</span>, {user.experience} ərzində {user.category} sahəsində yüzlərlə uğurlu layihə icra etmişəm. 
                Hər bir müştəriyə <span className="underline decoration-orange-400 decoration-2 underline-offset-4">fərdi yanaşma</span> və görülən işə tam zəmanət təklif edirəm. 
                Evinizdəki hər hansı {user.job.toLowerCase()} problemini sürətli və təmiz şəkildə həll etməyə hazıram.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-sm font-bold text-slate-700 underline decoration-slate-200 decoration-2">Orijinal detal istifadəsi</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-sm font-bold text-slate-700 underline decoration-slate-200 decoration-2">24/7 Təcili dəstək</span>
                </div>
              </div>
            </div>

            {/* Interactive Portfolio */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">İş Nümunələri</h3>
                <span className="text-orange-600 font-black text-xs uppercase cursor-pointer hover:underline tracking-widest">Hamısı →</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg">
                  <img src={user.portfolioimage1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Work 1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                    <p className="text-white font-black text-xl leading-none italic">#TəmirÖncəsi</p>
                  </div>
                </div>
                <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg">
                  <img src={user.portfolioimage2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Work 2" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                    <p className="text-white font-black text-xl leading-none italic">#YekunNəticə</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Speed */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-[1.2rem] flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Xidmət Ərazisi</h4>
                  <p className="text-slate-500 font-medium leading-none mt-1">Baku, Azərbaycan (Bütün rayonlar)</p>
                </div>
              </div>
              <div className="h-12 w-px bg-slate-100 hidden md:block"></div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-[1.2rem] flex items-center justify-center">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Çatılma Müddəti</h4>
                  <p className="text-slate-500 font-medium leading-none mt-1">Maksimum 45 dəqiqə</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Profile;