import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ChevronRight, MapPin, Banknote, LayoutGrid } from 'lucide-react';
import { getMasters } from '../../javascript/panel';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const cardVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function SmartDashboard() {
  const [allMasters, setAllMasters] = useState([]);
  const [filteredMasters, setFilteredMasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'Hamısı',
    location: 'Hamısı',
    minPrice: 0,
    maxPrice: 500,
    search: ''
  });

  useEffect(() => {
    getMasters().then((res) => {
      const data = Array.isArray(res) ? res : [];
      setAllMasters(data);
      setFilteredMasters(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const result = allMasters.filter(m => {
      const name = (m?.fullname || '').toLowerCase();
      const job = (m?.job || '').toLowerCase();
      const city = (m?.address || m?.location || 'Bakı').toLowerCase();
      const priceValue = parseInt(m?.price?.toString().replace(/[^0-9]/g, "")) || 0;

      const matchSearch = name.includes(filters.search.toLowerCase()) || job.includes(filters.search.toLowerCase());
      const matchCat = filters.category === 'Hamısı' || m?.category === filters.category;
      const matchLoc = filters.location === 'Hamısı' || city.includes(filters.location.toLowerCase());
      const matchPrice = priceValue >= filters.minPrice && priceValue <= filters.maxPrice;

      return matchSearch && matchCat && matchLoc && matchPrice;
    });
    setFilteredMasters(result);
  }, [filters, allMasters]);

  const categories = ['Hamısı', 'Santexnika', 'Elektrik', 'Kafel-Metlax', 'Malyar', 'Mebel', 'Kondisioner', 'Döşəmə'];
  const locations = ['Hamısı', 'Bakı', 'Sumqayıt', 'Gəncə', 'Xırdalan'];

  return (
    <div className="min-h-screen bg-[#F4F7FA] pb-20 pt-10 px-4 md:px-8">

      {/* FILTER PANEL */}
      <div className="max-w-7xl mx-auto mb-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white p-5 rounded-[30px]  border shadow-[0_0_5px_#00a6f4] border-gray-100 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={16} />
              <input
                type="text"
                placeholder="Axtar..."
                className="w-full bg-gray-50 border-none p-3.5 pl-11 rounded-xl outline-none focus:ring-2 ring-blue-400 text-sm font-medium"
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              />
            </div>

            <div className="relative">
              <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <select
                className="w-full bg-gray-50 p-3.5 pl-11 rounded-xl outline-none cursor-pointer appearance-none text-sm font-semibold text-gray-600"
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400" size={16} />
              <select
                className="w-full bg-gray-50 p-3.5 pl-11 rounded-xl outline-none cursor-pointer appearance-none text-sm font-semibold text-gray-600"
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>

          {/* Qiymət Aralığı - YAN YANA */}
          <div className="flex flex-col md:flex-row items-center gap-4 px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 min-w-max">
              <Banknote className="text-green-500" size={18} />
              <span className="text-xs font-bold text-gray-600">Qiymət:</span>
            </div>

            <div className="flex flex-row w-full gap-8">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] font-bold text-orange-500 uppercase">Min</span>
                  <span className="text-[10px] font-bold text-gray-700">{filters.minPrice} AZN</span>
                </div>
                <input
                  type="range" min="0" max="200" step="5" value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] font-bold text-orange-500 uppercase">Max</span>
                  <span className="text-[10px] font-bold text-gray-700">{filters.maxPrice} AZN</span>
                </div>
                <input
                  type="range" min="0" max="1000" step="10" value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* USTALAR SİYAHISI - Sütun sayı artırıldı (xl:grid-cols-5) */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-64 bg-white animate-pulse rounded-[20px]" />)}
          </div>
        ) : (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredMasters.map(master => (
                <UstaCard key={master.id} master={master} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function UstaCard({ master }) {
  return (
    <motion.div
      layout variants={cardVariants}
      whileHover={{ y: -4 }}
      className="bg-white rounded-[24px] p-2.5 border border-gray-100 group flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-md w-full max-w-[240px] mx-auto"
    >
      {/* ŞƏKİL BÖLMƏSİ - Daha portret (3/4) və baş hissəyə fokus */}
      <div className="relative aspect-[3/4] w-full h-[230px] rounded-[18px] overflow-hidden mb-3 bg-gray-100 border border-gray-100">
        <img
          src={master?.profilimage}
          className="w-full h-[230px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
          alt={master?.fullname}
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(master?.fullname)}&background=random`;
          }}
        />
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
          <MapPin size={8} className="text-red-500" />
          <span className="text-[8px] font-bold text-gray-700">{master?.address || "Bakı"}</span>
        </div>
      </div>

      <div className="px-1 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1.5">
          <span className="text-blue-600 text-[8px] font-black uppercase tracking-wider bg-blue-50 px-1.5 py-0.5 rounded-md">
            {master?.job}
          </span>
          <div className="flex items-center gap-0.5">
            <Star size={10} className="text-orange-400" fill="currentColor" />
            <span className="text-[10px] font-black">{master?.rating || "5.0"}</span>
          </div>
        </div>

        <h3 className="text-[13px] font-bold text-gray-800 mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {master?.fullname}
        </h3>

        <div className="mt-auto flex items-center justify-between bg-blue-50/50 rounded-xl p-2 group-hover:bg-orange-500 transition-all duration-300">
          <div className="text-left">
            <p className="text-[7px] text-gray-400 font-bold uppercase group-hover:text-white transition-colors">Qiymət</p>
            <span className="text-[11px] font-extrabold text-blue-700 group-hover:text-white transition-colors">
              {master?.price}
            </span>
          </div>
          <button className="bg-white text-blue-600 p-1.5 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}