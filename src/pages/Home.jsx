import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench, Zap, Grid3X3, Paintbrush2, Armchair, Wind, Layers,
  Star, ChevronRight, MapPin, Sparkles, ArrowLeft, Filter,
  CheckCircle2, ShieldCheck, Clock, Award
} from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { getMasters } from '../../javascript/panel';
import { Link } from 'react-router-dom';


// Kateqoriya Məlumatları (Yenilənmiş Santexnika ikonu ilə)
const categoryData = [
  { name: 'Santexnika', icon: <Wrench size={22} className="text-blue-500" /> },
  { name: 'Elektrik', icon: <Zap size={22} className="text-yellow-500" /> },
  { name: 'Kafel-Metlax', icon: <Grid3X3 size={22} className="text-orange-500" /> },
  { name: 'Malyar', icon: <Paintbrush2 size={22} className="text-pink-500" /> },
  { name: 'Mebel', icon: <Armchair size={22} className="text-amber-700" /> },
  { name: 'Kondisioner', icon: <Wind size={22} className="text-cyan-500" /> },
  { name: 'Döşəmə', icon: <Layers size={22} className="text-stone-500" /> },
];

export default function SmartDashboard() {
  const [allMasters, setAllMasters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const slides = [
    {
      title: "Evinizin Ustası, Sizin Rahatlığınız",
      desc: "Təmir işlərində peşəkar yanaşma. İndi sifariş et, vaxtına qənaət et.",
      img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000",
      tag: "Peşəkar Xidmət",
      icon: <Award className="text-orange-500" />
    },
    {
      title: "Yüksək Keyfiyyət, Şəffaf Qiymət",
      desc: "Gizli xərclər yoxdur. Qiyməti usta ilə danışmazdan əvvəl bil.",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069",
      tag: "Güvənli Ödəniş",
      icon: <ShieldCheck className="text-orange-500" />
    },
    {
      title: "7/24 Təcili Usta Xidməti",
      desc: "Gözlənilməz texniki problemlər? Bizim ustalar hər an yanınızdadır.",
      img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2070",
      tag: "Sürətli Müdaxilə",
      icon: <Clock className="text-orange-500" />
    },
    {
      title: "Zəmanətli Təmir İşləri",
      desc: "Görülən hər bir işə UstaGo tərəfindən keyfiyyət zəmanəti verilir.",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
      tag: "100% Zəmanət",
      icon: <CheckCircle2 className="text-orange-500" />
    }
  ];

  useEffect(() => {
    getMasters().then(data => {
      const sortedByRating = [...data].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      setAllMasters(sortedByRating);
    });
  }, []);

  const filteredMasters = allMasters.filter(m => {
    const matchesCategory = m.category === selectedCategory;
    const price = parseFloat(m.price);
    const matchesMin = minPrice === "" || price >= parseFloat(minPrice);
    const matchesMax = maxPrice === "" || price <= parseFloat(maxPrice);
    return matchesCategory && matchesMin && matchesMax;
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-24 px-4 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* --- MÜASİR NARINCI SLIDER --- */}
        {!selectedCategory && (
          <div className="pt-8">
            <Swiper
              effect={'fade'}
              spaceBetween={0}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              modules={[Pagination, Autoplay, EffectFade]}
              className="h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-100"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full flex items-center bg-slate-900">
                    <div className="absolute inset-0 opacity-60">
                      <img src={slide.img} className="w-full h-full object-cover" alt="bg" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                    <div className="relative z-10 px-8 md:px-20 max-w-2xl space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 px-4 py-2 rounded-full w-fit"
                      >
                        {slide.icon}
                        <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest">{slide.tag}</span>
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white text-3xl md:text-5xl font-black leading-tight"
                      >
                        {slide.title}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-300 text-sm md:text-lg font-medium max-w-md"
                      >
                        {slide.desc}
                      </motion.p>

                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm transition-all shadow-lg shadow-orange-500/40 active:scale-95">
                        Xidmətləri Kəşf Et
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* --- LOGO & HEADER --- */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-orange-50 px-6 py-2 rounded-full mb-4 shadow-sm"
          >
            <Sparkles className="text-orange-500" size={18} />
            <span className="text-orange-600 font-black italic text-xl tracking-tight">UstaGo</span>
          </motion.div>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[5px] ">
            {selectedCategory ? `${selectedCategory} Bölməsi` : "Eviniz üçün Peşəkar Həllər"}
          </p>
        </div>

        {/* --- KATEQORİYA SEÇİMİ --- */}
        {!selectedCategory && (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5">
            {categoryData.map((cat) => (
              <motion.div
                key={cat.name}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCategory(cat.name)}
                className="bg-white p-7 rounded-[35px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col items-center gap-4 cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 transition-all duration-300">
                  {cat.icon}
                </div>
                <span className="text-[12px] font-black text-slate-700 text-center group-hover:text-orange-600 transition-colors">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* --- USTA SİYAHiSİ & FİLTER --- */}
        {selectedCategory && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-5 rounded-[30px] shadow-sm border border-slate-100">
              <button
                onClick={() => { setSelectedCategory(null); setMinPrice(""); setMaxPrice(""); }}
                className="flex items-center gap-2 text-slate-400 font-black hover:text-orange-500 transition-colors text-[11px] tracking-widest"
              >
                <ArrowLeft size={18} /> GERİ QAYIT
              </button>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-100 focus-within:border-orange-300 transition-all">
                  <span className="text-[10px] font-black text-orange-500">AZN</span>
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-16 bg-transparent outline-none text-sm font-black text-slate-800"
                  />
                </div>
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-100 focus-within:border-orange-300 transition-all">
                  <span className="text-[10px] font-black text-orange-500 text-right">AZN</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-16 bg-transparent outline-none text-sm font-black text-slate-800"
                  />
                </div>
                <div className="p-3 bg-orange-500 text-white rounded-2xl shadow-lg shadow-orange-200">
                  <Filter size={18} />
                </div>
              </div>
            </div>

            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredMasters.map(master => (
                  <UstaCard key={master.id} master={master} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

function UstaCard({ master }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-[32px] p-3.5 shadow-sm border border-slate-100 group hover:shadow-2xl hover:shadow-pink-100/50 hover:border-pink-200 transition-all duration-500 flex flex-col h-full"
    >
      {/* Şəkil və reytinq */}
      <div className="relative aspect-square rounded-[26px] overflow-hidden mb-4">
        <Link to={`/masters/${master?.id}`} className=" cursor-pointer">
          <img
            src={master?.profilimage}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            alt=""
          />
        </Link>
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-sm border border-pink-100">
          <Star size={11} className="text-orange-500 fill-orange-500" />
          <span className="text-[11px] font-black text-slate-800">{master?.rating || "5.0"}</span>
        </div>
      </div>

      {/* Əsas məlumatlar */}
      <div className="px-2 flex-1 mb-4">
        <Link to={`/masters/${master?.id}`} className=" cursor-pointer">
          <h3 className="text-[14px] font-black text-orange-600 truncate">
            {master?.fullname}
          </h3>
        </Link>

        {/* Adres */}
        <div className="flex items-center gap-1 text-slate-400 text-[9px] font-bold uppercase tracking-tight mb-3">
          <MapPin size={11} className="text-orange-400" />
          <span>{master?.address || "BAKI"}</span>
        </div>

        {/* Saatlıq qiymət - ADRESİN ALTINDA */}
        <div className="bg-gradient-to-r from-orange-50 to-rose-50 p-2.5 rounded-xl border border-orange-100 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] text-slate-500 font-black uppercase tracking-wider">SAATLIQ</span>
              <span className="text-lg font-black text-orange-600 leading-none mt-0.5">
                {master?.price || "25"} ₼
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* MÜRACİƏT ET BUTONU - AŞAĞIDA */}
      <Link to={`/masters/${master?.id}`} className="mt-auto">
        <div className="bg-[#FF7A1C] h-[40px] hover:bg-orange-600 text-white p-3 rounded-3xl flex items-center justify-center gap-2 transition-all">
          <span className="font-bold text-sm uppercase tracking-wide">Müraciət et</span>
          <ChevronRight size={16} />
        </div>
      </Link>
    </motion.div>
  );
}
