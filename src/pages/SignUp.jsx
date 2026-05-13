import React, { useState } from 'react';
import { Mail, User, Lock, Phone, ArrowRight, UserCircle, Wrench, ShieldCheck } from 'lucide-react';

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-6 bg-slate-50/50">
      <div className="w-full max-w-lg bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 p-10 md:p-12 border border-slate-100">
        
        {/* Başlıq */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-2xl text-orange-500 mb-4">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">Hesab Yaradın</h2>
          <p className="text-slate-500 font-medium italic">UstaGo ailəsinə qoşulun!</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ad */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                required
                type="text" 
                placeholder="Ad"
                className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-semibold text-slate-700 placeholder:text-slate-400"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Soyad */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                required
                type="text" 
                placeholder="Soyad"
                className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-semibold text-slate-700 placeholder:text-slate-400"
                onChange={(e) => setFormData({...formData, surname: e.target.value})}
              />
            </div>
          </div>

          {/* Mail */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              type="email" 
              placeholder="E-mail ünvanınız"
              className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-semibold text-slate-700 placeholder:text-slate-400"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Telefon */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              type="tel" 
              placeholder="Telefon nömrəsi (050...)"
              className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-semibold text-slate-700 placeholder:text-slate-400"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          {/* Şifrə */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              type="password" 
              placeholder="Şifrə təyin edin"
              className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-semibold text-slate-700 placeholder:text-slate-400"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {/* Qeydiyyat Button */}
          <button 
            type="submit"
            className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-6 group"
          >
            Qeydiyyatı Tamamla 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-center mt-6 text-slate-500 text-sm font-semibold">
          Artıq hesabınız var? <a href="/login" className="text-orange-500 hover:underline">Giriş edin</a>
        </p>
      </div>

      {/* --- SEÇİM MODAL-I (SignUp üçün) --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-slate-900/60 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-xl rounded-[3.5rem] p-10 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="text-center mb-10">
              <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Təhlükəsiz Qeydiyyat</span>
              <h3 className="text-3xl font-black text-slate-800 mt-4">Hansı məqsədlə qoşulursunuz?</h3>
              <p className="text-slate-500 mt-2 font-medium italic">Seçiminizə uyğun olaraq profiliniz fərdiləşdiriləcək.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Müştəri Seçimi */}
              <div 
                onClick={() => { console.log("Müştəri qeydiyyatı", formData); setShowModal(false); }}
                className="cursor-pointer group p-10 rounded-[2.5rem] border-2 border-slate-50 hover:border-orange-500 hover:bg-orange-50 transition-all flex flex-col items-center gap-5 text-center shadow-sm"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <UserCircle size={48} />
                </div>
                <div>
                  <span className="block font-black text-slate-800 text-xl uppercase tracking-tight">Müştəri</span>
                  <span className="text-sm text-slate-400 font-bold">Usta axtarıram, elan yerləşdirirəm</span>
                </div>
              </div>

              {/* Usta Seçimi */}
              <div 
                onClick={() => { console.log("Usta qeydiyyatı", formData); setShowModal(false); }}
                className="cursor-pointer group p-10 rounded-[2.5rem] border-2 border-slate-50 hover:border-orange-500 hover:bg-orange-50 transition-all flex flex-col items-center gap-5 text-center shadow-sm"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all transform group-hover:-rotate-6">
                  <Wrench size={48} />
                </div>
                <div>
                  <span className="block font-black text-slate-800 text-xl uppercase tracking-tight">Usta</span>
                  <span className="text-sm text-slate-400 font-bold">Xidmət göstərirəm, iş axtarıram</span>
                </div>
              </div>
            </div>

            <p className="text-center mt-8 text-xs text-slate-400 font-medium px-10">
              Qeydiyyatdan keçməklə siz UstaGo-nun <span className="underline cursor-pointer">İstifadə Şərtləri</span> ilə razılaşmış olursunuz.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;