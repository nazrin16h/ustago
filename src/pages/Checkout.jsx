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
      
      {/* 1. Hero Section (Qarşılama) */}
      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Eviniz üçün <span className="text-blue-600">təsdiqlənmiş</span> ustalar.
          </h1>
          <p className="text-gray-600 text-lg">
            Sizə ən yaxın mütəxəssisi tapın, portfoliosuna baxın və təhlükəsiz ödənişlə sifariş edin.
          </p>
          
          {/* Axtarış Paneli */}
          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            <input 
              type="text" 
              placeholder="Hansı usta lazımdır? (məs: Santexnik)" 
              className="flex-1 p-3 border rounded-xl outline-blue-500 bg-gray-50"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
              Axtar
            </button>
          </div>
        </div>
        
        <div className="flex-1 hidden md:block">
          {/* Bura layihənə uyğun bir illüstrasiya və ya usta şəkli gələcək */}
          <div className="bg-blue-50 h-64 w-full rounded-2xl border-2 border-dashed border-blue-200 flex items-center justify-center text-blue-400">
            [Usta Şəkli / Visual]
          </div>
        </div>
      </section>

      {/* 2. Sürətli Kateqoriyalar */}
      {/* 2. Sürətli Kateqoriyalar */}
<section>
  <h2 className="text-xl font-bold text-gray-800 mb-6">Populyar Xidmətlər</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {['Elektrik', 'Santexnik', 'Təmir', 'Kombi'].map((item) => (
      <motion.div 
        key={item} 
        whileHover={{ scale: 1.05 }} // Hover effekti əlavə etdik
        className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-300 cursor-pointer transition text-center"
      >
        <div className="text-3xl mb-2">🛠️</div>
        <span className="font-semibold text-gray-700">{item}</span>
      </motion.div>
    ))}
  </div>
</section>

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