import React, { useState } from 'react';
import { Mail, User, ArrowRight, UserCircle, Wrench } from 'lucide-react';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Modal-ı açırıq
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-50/50">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-10 border border-slate-100">
        
        {/* Başlıq */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-800 mb-2">Xoş Gəldiniz!</h2>
          <p className="text-slate-500 font-medium">Məlumatlarınızı daxil edərək davam edin</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Ad */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              required
              type="text" 
              placeholder="Adınız"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-semibold text-slate-700"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Soyad */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              required
              type="text" 
              placeholder="Soyadınız"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-semibold text-slate-700"
              onChange={(e) => setFormData({...formData, surname: e.target.value})}
            />
          </div>

          {/* Mail */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              required
              type="email" 
              placeholder="E-mail ünvanınız"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-semibold text-slate-700"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Tamamla Button */}
          <button 
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
          >
            Tamamla <ArrowRight size={20} />
          </button>
        </form>
      </div>

      {/* --- SEÇİM MODAL-I --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-slate-900/40 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-[3rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-slate-800">Son bir addım!</h3>
              <p className="text-slate-500 mt-2 font-medium">UstaGo-dan necə istifadə etmək istəyirsiniz?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Müştəri Seçimi */}
              <button 
                onClick={() => { console.log("Müştəri seçildi"); setShowModal(false); }}
                className="group p-8 rounded-[2rem] border-2 border-slate-50 hover:border-orange-500 hover:bg-orange-50 transition-all flex flex-col items-center gap-4 text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <UserCircle size={40} />
                </div>
                <div>
                  <span className="block font-black text-slate-800 text-lg uppercase tracking-tight">Müştəri</span>
                  <span className="text-xs text-slate-400 font-bold">Usta axtarıram</span>
                </div>
              </button>

              {/* Usta Seçimi */}
              <button 
                onClick={() => { console.log("Usta seçildi"); setShowModal(false); }}
                className="group p-8 rounded-[2rem] border-2 border-slate-50 hover:border-orange-500 hover:bg-orange-50 transition-all flex flex-col items-center gap-4 text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Wrench size={40} />
                </div>
                <div>
                  <span className="block font-black text-slate-800 text-lg uppercase tracking-tight">Usta</span>
                  <span className="text-xs text-slate-400 font-bold">Xidmət göstərirəm</span>
                </div>
              </button>
            </div>

            <button 
              onClick={() => setShowModal(false)}
              className="w-full mt-6 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
            >
              Geri qayıt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;