import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, Star, Clock, MapPin, MoreHorizontal,
  ShieldCheck, Wrench, MessageCircle, Phone,
  Award, Zap, History, ChevronDown, ChevronUp
} from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const [reviews, setReviews] = useState([
    { id: 1, name: "Elnur M.", rating: 5, text: "İşini çox səliqəli gördü, vaxtında gəldi.", date: "2 saat əvvəl" },
    { id: 2, name: "Fidan H.", rating: 5, text: "Mətbəxdə yaranan nasazlığı qısa müddətdə həll etdi.", date: "Dünən" },
    { id: 3, name: "Anar Q.", rating: 4, text: "Yaxşı ustadır, materialları özü alıb gətirdi.", date: "3 gün əvvəl" },
    { id: 4, name: "Sevinc A.", rating: 5, text: "Problemi kökündən həll etdi.", date: "1 həftə əvvəl" },
    { id: 4, name: "Xanim S.", rating: 5, text: "Yaxşı ustadır,Problemi kökündən həll etdi.", date: "1 həftə əvvəl" },
    { id: 4, name: "Cemil A.", rating: 5, text: "Problemi kqısa müddətdə həll etdi.", date: "1 həftə əvvəl" },
    { id: 4, name: "Furkan E.", rating: 5, text: "Problemi kökündən həll etdi.", date: "1 həftə əvvəl" }
  ]);

  const API_URL = "https://69bfc34f72ca04f3bcb92a0d.mockapi.io/category";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data && Array.isArray(data) && data.length > 0) {
          setUser(data[0]);
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
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
    </div>
  );

  if (!user) return <div className="p-10 text-center font-bold text-gray-500">Usta tapılmadı.</div>;

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900 pb-20">

      {/* HEADER */}
      <div className="relative h-48 md:h-72 w-full bg-slate-900">
        <img
          src={user.portfolioimage1}
          className="w-full h-full object-cover opacity-40"
          alt="Work Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] to-transparent"></div>
        <div className="absolute top-6 left-4 right-4 max-w-6xl mx-auto flex justify-between items-center">
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20 shadow-lg">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20 shadow-lg"><History size={20} /></button>
            <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20 shadow-lg"><MoreHorizontal size={24} /></button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* SOL TƏRƏF: Profil və Rəylər */}
          <div className="lg:col-span-4 space-y-6">

            {/* Profil Kartı */}
            {/* LEFT COLUMN - Profile Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase">Onlayn</span>
                </div>

                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden shadow-2xl rotate-3">
                    <img src={user.profilimage} alt={user.fullname} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2.5 rounded-2xl shadow-xl border-4 border-white">
                    <ShieldCheck size={24} />
                  </div>
                </div>

                <h1 className="text-2xl font-black text-slate-900 leading-none">{user.fullname}</h1>
                <div className="flex items-center justify-center gap-2 mt-3 text-orange-600">
                  <Zap size={14} fill="currentColor" />
                  <span className="font-bold uppercase text-[10px] tracking-widest">{user.job}</span>
                </div>

                <div className="grid grid-cols-3 gap-1 mt-8 bg-slate-50 rounded-[2rem] p-4">
                  <div className="text-center">
                    <p className="text-lg font-black">{user.rating}★</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase">Ulduz</p>
                  </div>
                  <div className="text-center border-x border-slate-200">
                    <p className="text-lg font-black">{user.experience?.split(' ')[0] || '5'}</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase">Təcrübə</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-black">100%</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase">Güvən</p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-slate-200">
                    <Phone size={18} /> Zəng Et
                  </button>
                  <button className="w-full bg-white border border-slate-200 hover:border-orange-500 text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all">
                    <MessageCircle size={18} className="text-orange-500" /> WhatsApp
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2rem] p-6 text-white shadow-xl shadow-orange-100">
                <p className="text-orange-100 text-[10px] font-bold uppercase tracking-widest mb-1">Xidmət haqqı</p>
                <p className="text-3xl font-black">{user.price}</p>
              </div>
            </div>

            {/* Rəylər */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-black uppercase mb-4">Rəylər ({reviews.length})</h3>
              <div className="space-y-4">
                {reviews.slice(0, showAllReviews ? reviews.length : 3).map((rev) => (
                  <div key={rev.id} className="border-b border-slate-50 pb-3 last:border-0">
                    <p className="text-xs font-bold text-slate-900">{rev.name}</p>
                    <p className="text-xs text-slate-500 italic mt-1">"{rev.text}"</p>
                  </div>
                ))}
              </div>
              {reviews.length > 3 && (
                <button onClick={() => setShowAllReviews(!showAllReviews)} className="w-full mt-4 text-xs font-bold text-orange-600 flex items-center justify-center gap-1">
                  {showAllReviews ? "Bağla" : "Daha çox"} {showAllReviews ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              )}
            </div>
          </div>

          {/* SAĞ TƏRƏF: Məlumatlar və İşlər */}
          <div className="lg:col-span-8 space-y-6">

            {/* Haqqımda */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2"><Award className="text-orange-500" /> Haqqımda</h3>
              <p className="text-slate-500 leading-relaxed">Mən {user.fullname}, {user.experience} təcrübəyə malik peşəkar ustayam. Keyfiyyət və zəmanət əsas prinsibimdir.</p>
            </div>

            {/* İş Nümunələri */}
            {/* İş Nümunələri */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
              <h3 className="text-xl font-black mb-6">İş Nümunələri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* İş 1 - Əvvəl */}
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={user.portfolioimage1}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]"
                    alt="Work 1"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-black text-lg tracking-widest uppercase bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                      Əvvəl
                    </span>
                  </div>
                </div>

                {/* İş 2 - Sonra */}
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={user.portfolioimage2}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]"
                    alt="Work 2"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-black text-lg tracking-widest uppercase bg-orange-500/80 backdrop-blur-sm px-4 py-2 rounded-xl">
                      Sonra
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Ərazi və Zaman */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white  rounded-[2rem] p-6 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12  bg-red-50 text-red-500 rounded-full flex items-center justify-center"><MapPin /></div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Ərazi</p>
                  <p className="font-bold">Bakı və Abşeron</p>
                </div>
              </div>
              <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center"><Clock /></div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Zaman</p>
                  <p className="font-bold">Maks 45 dəq</p>
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