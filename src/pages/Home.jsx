import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faWrench,
  faArrowRight,
  faCheckCircle,
  faCompass,
  faTools,
  faPaintRoller,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://69bfc34f72ca04f3bcb92a0d.mockapi.io/category";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Məlumat gətirilərkən xəta:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const categories = [...new Set(services.map(s => s.job))].slice(0, 5);
  
  const getIcon = (job) => {
    const lowerJob = job?.toLowerCase();
    if (lowerJob?.includes("təmir") || lowerJob?.includes("usta")) return faTools;
    if (lowerJob?.includes("rəng")) return faPaintRoller;
    if (lowerJob?.includes("elektrik")) return faLightbulb;
    return faCompass;
  };

  const slides = [
    {
      title: "Eviniz üçün Peşəkar Həllər",
      desc: "Təcrübəli ustalarımızla təmir işləri indi daha sürətli və keyfiyyətli.",
      // Birinci slayd üçün daha canlı usta/təmir şəkli
      img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2070", 
      tag: "Güvənli Xidmət"
    },
    {
      title: "Yüksək Keyfiyyət, Münasib Qiymət",
      desc: "Elektrik, santexnik və digər məişət xidmətləri üçün bir kliklə sifariş et.",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069",
      tag: "7/24 Dəstək"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto space-y-16 pb-20 px-6">
      
      {/* --- Zərif Slider Section --- */}
      <div className="pt-6">
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative w-full h-full flex items-center p-8 md:p-16 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,1) 35%, rgba(255,255,255,0)), url(${slide.img})` }}
              >
                <div className="max-w-lg space-y-4 md:space-y-6">
                  <span className="flex items-center gap-2 text-orange-600 text-xs font-bold uppercase tracking-widest">
                    <FontAwesomeIcon icon={faCheckCircle} /> {slide.tag}
                  </span>
                  <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                    {slide.title}
                  </h2>
                  <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed max-w-sm">
                    {slide.desc}
                  </p>
                  <button className="bg-slate-900 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-orange-500 transition-all duration-500 flex items-center gap-3 group">
                    Xidmətlərə bax <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- Dinamik Kateqoriya Section --- */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800 tracking-tight">Kateqoriyalar</h3>
          <div className="h-[1px] flex-1 mx-6 bg-slate-100"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {loading ? (
            [...Array(5)].map((_, i) => <div key={i} className="h-20 bg-slate-50 animate-pulse rounded-2xl" />)
          ) : (
            categories.map((job, i) => (
              <div key={i} className="group cursor-pointer flex flex-col items-center p-4 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 flex items-center justify-center mb-3 transition-colors">
                  <FontAwesomeIcon className="text-xl" icon={getIcon(job)} />
                </div>
                <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-tighter">
                  {job || "Xidmət"}
                </span>
              </div>
            ))
          )}
        </div>
      </section>

      {/* --- Populyar Ustalar Section --- */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800 tracking-tight">Tövsiyə edilənlər</h3>
          <div className="h-[1px] flex-1 mx-6 bg-slate-100"></div>
        </div>
        
        {loading ? (
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="w-[280px] h-[380px] bg-slate-50 animate-pulse rounded-[2.5rem]" />
            ))}
          </div>
        ) : (
          <div 
            className="flex flex-nowrap overflow-x-auto gap-8 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((user) => (
              <div 
                key={user.id} 
                className="group flex-none w-[280px] md:w-[300px] bg-white rounded-[2.5rem] overflow-hidden border border-slate-100/60 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700"
              >
                <div className="relative h-64 overflow-hidden rounded-b-[2rem]">
                  <img 
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                    src={user.profilimage} 
                    alt={user.fullname} 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-sm border border-white/20">
                    <FontAwesomeIcon className="text-yellow-400 text-[10px]" icon={faStar} />
                    <span className="text-[11px] font-bold text-slate-800">{user.rating || "4.9"}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-orange-500 text-[9px] font-bold uppercase tracking-[2px] mb-1 block">
                      {user.job}
                    </span>
                    <h5 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
                      {user.fullname}
                    </h5>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-400 font-bold uppercase">Xidmət haqqı</span>
                      <h6 className="text-lg font-bold text-slate-900">
                        {user.price}₼<span className="text-[10px] font-normal text-slate-400 ml-1">/saat</span>
                      </h6>
                    </div>
                    <button className="bg-slate-50 text-slate-400 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-500">
                       <FontAwesomeIcon icon={faWrench} className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;