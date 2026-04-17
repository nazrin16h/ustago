import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, CreditCard, CheckCircle2, X, ArrowRight, Cpu, Sparkles, Loader2 } from 'lucide-react';

export default function PremiumEscrow() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Ödəniş simulyasiyası
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] overflow-hidden flex items-center justify-center p-4">
      
      {/* ARXAFON ANİMASİYALI ELEMENTLƏR (Səhifəni dolu göstərir) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -150, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-emerald-400/10 blur-[120px] rounded-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* SOL TƏRƏF: CONTENT */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700 text-xs font-black uppercase tracking-widest">
              <Sparkles size={14} /> 100% Təhlükəsiz Sistem
            </div>
            <h1 className="text-5xl font-black text-[#0d1e4c] leading-[1.1]">
              Vəsaitiniz Bizimlə <br /> <span className="text-blue-600 underline decoration-emerald-400">Güvəndədir.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg">
              UstaGo Escrow sistemi ilə ödəniş edin, iş təhvil verilənə qədər pulunuzu biz qoruyaq.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { icon: <Lock className="text-blue-600" />, title: "SSL Şifrələmə", desc: "Bütün məlumatlar 256-bit AES ilə qorunur." },
               { icon: <ShieldCheck className="text-emerald-500" />, title: "Geri Ödəniş", desc: "Problem yarandıqda dərhal iadə imkanı." }
             ].map((item, i) => (
               <motion.div 
                 key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i*0.2 }}
                 className="bg-white/60 backdrop-blur-md p-6 rounded-[30px] border border-white shadow-sm hover:shadow-xl transition-all"
               >
                 <div className="mb-3">{item.icon}</div>
                 <h4 className="font-bold text-gray-800">{item.title}</h4>
                 <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>

        {/* SAĞ TƏRƏF: CARD & FORM */}
        <div className="lg:col-span-5 relative">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
             className="bg-white p-8 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden"
          >
            <div className="space-y-6">
              {/* Vizuallaşdırılmış Kart */}
              <div className="h-48 bg-[#1e293b] rounded-[28px] p-6 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                <div className="flex justify-between items-center relative z-10">
                  <Cpu size={32} className="text-yellow-500" />
                  <div className="text-[10px] font-bold tracking-widest opacity-50 uppercase">UstaGo Pay</div>
                </div>
                <div className="text-xl tracking-[4px] relative z-10 font-mono">**** **** **** 8842</div>
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <div className="text-[8px] uppercase opacity-50">Kart Sahibi</div>
                    <div className="text-xs font-bold uppercase">UstaGo İstifadəçi</div>
                  </div>
                  <div className="text-xs font-bold">09 / 28</div>
                </div>
              </div>

              {/* Form Inputlar */}
              <div className="space-y-3">
                <input type="text" placeholder="Kart Nömrəsi" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm focus:ring-2 ring-blue-500 outline-none transition-all" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm outline-none focus:ring-2 ring-blue-500" />
                  <input type="password" placeholder="CVV" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm outline-none focus:ring-2 ring-blue-500" />
                </div>
              </div>

              {/* Ödəniş Buttonu */}
              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-[#0d1e4c] hover:bg-blue-600 text-white py-5 rounded-[22px] font-black flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 disabled:opacity-70"
              >
                {isProcessing ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>ÖDƏNİŞİ TƏSDİQLƏ <ArrowRight size={20} /></>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SUCCESS MODAL (Uğurlu ödəniş) */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
              className="absolute inset-0 bg-[#0d1e4c]/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              className="relative bg-white rounded-[40px] p-10 max-w-sm w-full text-center shadow-2xl border border-white"
            >
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>

              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                >
                  <CheckCircle2 size={48} strokeWidth={3} />
                </motion.div>
              </div>

              <h2 className="text-2xl font-black text-gray-800 mb-2">Uğurlu Ödəniş!</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Vəsaitiniz qəbul edildi və <b>Escrow</b> hesabında bloklandı. Usta işi bitirdikdə təsdiqləməyi unutmayın.
              </p>

              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-200"
              >
                Bağla
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}