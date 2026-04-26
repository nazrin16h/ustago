import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Image as ImageIcon, Star, Briefcase, Send, ArrowLeft, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AddElan() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    fullname: '',     // API üçün mütləqdir
    job: '',          // API üçün mütləqdir
    profilimage: '',  // API üçün mütləqdir
    category: 'Santexnika',
    experience: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Bütün sahələri mütləq göndəririk ki, API 400 xətası verməsin
    const finalData = {
      fullname: formData.fullname,
      job: formData.job,
      profilimage: formData.profilimage || "https://via.placeholder.com/150",
      category: formData.category,
      experience: formData.experience + " il",
      price: formData.price + " AZN",
      rating: "5.0", // Sabit reytinq
      portfolioimage1: "https://via.placeholder.com/300",
      portfolioimage2: "https://via.placeholder.com/300"
    };

    try {
      const response = await fetch('https://69bfc34f72ca04f3bcb92a0d.mockapi.io/category', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(finalData)
      });

      if (response.ok) {
        alert("Elan uğurla paylaşıldı!");
        navigate('/');
      } else {
        const errorText = await response.text();
        console.error("API Cavabı:", errorText);
        alert("API xətası: Məlumat formatı düzgün deyil.");
      }
    } catch (error) {
      alert("Bağlantı xətası!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-32 pt-6 px-4 md:px-0 font-sans text-slate-800">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="p-3 bg-slate-50 rounded-2xl text-slate-500 transition-all active:scale-90">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-black tracking-tight">Yeni Elan Yerləşdir</h1>
        </div>

        <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-5">
          
          {/* Ustanın Adı (fullname) */}
          <div className="space-y-1">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-3">Ustanın Adı və Soyadı</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={18} />
              <input required name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Məs: Anar Məmmədov" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 font-bold outline-none focus:ring-2 focus:ring-orange-200" />
            </div>
          </div>

          {/* Peşə (job) */}
          <div className="space-y-1">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-3">Dəqiq Peşə (Məs: Usta)</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={18} />
              <input required name="job" value={formData.job} onChange={handleChange} placeholder="Məs: Professional Santexnik" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 font-bold outline-none focus:ring-2 focus:ring-orange-200" />
            </div>
          </div>

          {/* Profil Şəkli */}
          <div className="space-y-1">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-3">Profil Şəkli (URL)</label>
            <div className="relative">
              <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={18} />
              <input required name="profilimage" value={formData.profilimage} onChange={handleChange} placeholder="https://..." className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 font-bold outline-none focus:ring-2 focus:ring-orange-200" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-black uppercase text-slate-400 ml-3">Kateqoriya</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-slate-50 border-none rounded-2xl py-4 px-4 font-bold outline-none">
                <option>Santexnika</option>
                <option>Elektrik</option>
                <option>Mebel</option>
                <option>Kafel</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-black uppercase text-slate-400 ml-3">Təcrübə (İl)</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={18} />
                <input required type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="5" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 font-bold outline-none" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-3">Qiymət (AZN)</label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={18} />
              <input required type="number" name="price" value={formData.price} onChange={handleChange} placeholder="20" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 font-bold outline-none focus:ring-2 focus:ring-orange-200" />
            </div>
          </div>

          <button disabled={loading} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-100 flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50">
            {loading ? "GÖNDƏRİLİR..." : <><Send size={20} /> ELANI PAYLAŞ</>}
          </button>
        </motion.form>
      </div>
    </div>
  );
}