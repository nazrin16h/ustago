import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, Star, Clock, MapPin, MoreHorizontal, 
  ShieldCheck, Wrench, MessageCircle, Phone, 
  CheckCircle2, Award, Zap, Send, History, ChevronDown, ChevronUp
} from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Rəy sistemi üçün state-lər
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hasReviewed, setHasReviewed] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Realistik usta rəyləri
  const [reviews, setReviews] = useState([
    { id: 1, name: "Elnur M.", rating: 5, text: "İşini çox səliqəli gördü, vaxtında gəldi. Qiymət də münasibdir.", date: "2 saat əvvəl" },
    { id: 2, name: "Fidan H.", rating: 5, text: "Mətbəxdə yaranan nasazlığı qısa müddətdə həll etdi. Çox mədəni və peşəkar ustadır.", date: "Dünən" },
    { id: 3, name: "Anar Q.", rating: 4, text: "Yaxşı ustadır, materialları özü alıb gətirdi. Keyfiyyətə söz ola bilməz.", date: "3 gün əvvəl" },
    { id: 4, name: "Sevinc A.", rating: 5, text: "Daha əvvəl başqa usta çağırmışdım, düzəldə bilməmişdi. Bu bəy gəldi və problemi kökündən həll etdi.", date: "1 həftə əvvəl" },
    { id: 5, name: "Rəşad T.", rating: 5, text: "Təmiz və sürətli işləyir. Evi necə təhvil almışdısa, elə də təmiz qoyub getdi. Halal olsun.", date: "2 həftə əvvəl" }
  ]);

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

  const handleReviewSubmit = () => {
    if (rating > 0 && comment.trim() !== "") {
      const newReview = {
        id: Date.now(),
        name: "Siz", 
        rating: rating,
        text: comment,
        date: "İndi"
      };
      setReviews([newReview, ...reviews]);
      setHasReviewed(true);
    }
  };

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
        <Wrench className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500" size={20} />
      </div>
    </div>
  );

  if (!user) return <div className="p-10 text-center font-bold text-gray-500">Usta tapılmadı.</div>;

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-900">
      
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

      <main className="max-w-6xl mx-auto px-4 -mt-20 md:-mt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
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

          {/* RIGHT COLUMN - Content & Reviews */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl"><Award size={24} /></div>
                <h3 className="text-xl font-black uppercase tracking-tighter">Haqqımda</h3>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Mən <span className="text-slate-900 font-bold">{user.fullname}</span>, {user.experience} ərzində {user.category} sahəsində peşəkar fəaliyyət göstərirəm.
              </p>
            </div>

            {/* REVIEWS SECTION WITH BLUR EFFEKT */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-yellow-50 text-orange-500 rounded-2xl"><Star size={24} fill="currentColor" /></div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">Rəylər</h3>
                </div>
                <span className="bg-slate-50 px-4 py-1 rounded-full text-slate-400 font-bold text-[10px] tracking-widest">{reviews.length} RƏY</span>
              </div>

              {/* Add Review Form */}
              {/* {!hasReviewed ? (
                <div className="bg-slate-50 rounded-[2rem] p-6 mb-10 border border-slate-100">
                  <p className="font-bold text-slate-700 mb-4 text-center text-xs uppercase">Xidməti dəyərləndir</p>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button key={s} onClick={() => setRating(s)} className="transition-transform active:scale-90">
                          <Star size={32} fill={rating >= s ? "#f97316" : "none"} className={rating >= s ? "text-orange-500" : "text-slate-300"} />
                        </button>
                      ))}
                    </div>
                    <div className="w-full relative">
                      <textarea 
                        value={comment} onChange={(e) => setComment(e.target.value)}
                        placeholder="Təcrübənizi bölüşün..."
                        className="w-full p-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-orange-400 outline-none min-h-[100px] shadow-sm"
                      />
                      <button onClick={handleReviewSubmit} disabled={!rating || !comment.trim()} className="absolute bottom-3 right-3 bg-orange-500 text-white p-2.5 rounded-xl shadow-lg hover:bg-orange-600 transition-all disabled:opacity-50">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-50 text-emerald-700 p-6 rounded-2xl mb-10 flex items-center justify-center gap-3 font-bold">
                  <CheckCircle2 size={24} /> Rəyiniz uğurla əlavə edildi!
                </div>
              )} */}

              {/* Rəy siyahısı və Dumanlı effekt */}
              <div className="relative">
                <div 
                  className="space-y-6 overflow-hidden transition-all duration-700 ease-in-out"
                  style={!showAllReviews && reviews.length > 3 ? {
                    maxHeight: '420px',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                  } : {
                    maxHeight: '3000px'
                  }}
                >
                  {reviews.map((rev) => (
                    <div key={rev.id} className="border-b border-slate-50 last:border-0 pb-6">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 text-xs">{rev.name[0]}</div>
                          <div>
                            <h4 className="font-bold text-slate-900">{rev.name}</h4>
                            <div className="flex gap-0.5 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={10} fill={i < rev.rating ? "#f97316" : "none"} className={i < rev.rating ? "text-orange-500" : "text-slate-200"} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold">{rev.date}</span>
                      </div>
                      <p className="mt-4 text-slate-500 text-sm italic leading-relaxed">"{rev.text}"</p>
                    </div>
                  ))}
                </div>

                {/* Gradient Blur Layer (Daha təbii görünüş üçün) */}
                {!showAllReviews && reviews.length > 3 && (
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
                )}

                {/* "Daha çox gör" Düyməsi */}
                {reviews.length > 3 && (
                  <div className={`text-center relative z-20 ${!showAllReviews ? '-mt-10' : 'mt-8'}`}>
                    <button 
                      onClick={() => setShowAllReviews(!showAllReviews)}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200  rounded-full text-slate-900 font-bold text-xs uppercase tracking-widest shadow-md transition-all active:scale-95"
                    >
                      {showAllReviews ? (
                        <>Daha az gör <ChevronUp size={16} /></>
                      ) : (
                        <>Daha çox gör ({reviews.length - 3}+) <ChevronDown size={16} /></>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ərazi</h4>
                  <p className="text-slate-900 font-bold">Bakı və Abşeron</p>
                </div>
              </div>
              <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center"><Clock size={24} /></div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Zaman</h4>
                  <p className="text-slate-900 font-bold">Maksimum 60 dəqiqə</p>
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