import React, { useState, useEffect } from 'react';
import { MapPin, Star, Sparkles, Hammer, Zap, Droplets, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_URL = "https://69bfc34f72ca04f3bcb92a0d.mockapi.io/category";

const categories = [
  { id: 'all', name: 'Hamısı', icon: <LayoutGrid size={18} /> },
  { id: 'Santexnika', name: 'Santexnik', icon: <Droplets size={18} /> },
  { id: 'Elektrik', name: 'Elektrik', icon: <Zap size={18} /> },
  { id: 'Kafel-Metlax', name: 'Kafel Ustası', icon: <Hammer size={18} /> },
  { id: 'Malyar ', name: 'Malyar ', icon: <Hammer size={18} /> },
  { id: 'Mebel', name: 'Mebel', icon: <Hammer size={18} /> },
  { id: 'Kondisioner', name: 'Kondisioner', icon: <Hammer size={18} /> },
  { id: 'Döşəmə ', name: 'Döşəmə ', icon: <Hammer size={18} /> },
];
const handleApplyClick = () => {
  // Səhifəni ən yuxarıya sürüşdürür
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rəvan keçid üçün
  });

  // Bura müraciət üçün digər kodlarını (məsələn modal açmaq) əlavə edə bilərsən
  console.log("Müraciət edildi və yuxarı qalxdı");
};
const SmartMatch = () => {
  const [allUstas, setAllUstas] = useState([]);
  const [filteredUsta, setFilteredUsta] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // API-dən datanı çəkirik
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Şəbəkə xətası!");
        const data = await response.json();
        setAllUstas(data);
        pickRandomUsta(data, 'all');
      } catch (err) {
        console.error("Məlumat çəkilərkən xəta:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const pickRandomUsta = (data, categoryId) => {
    let pool = data;
    if (categoryId !== 'all') {
      pool = data.filter(u => u.category === categoryId);
    }

    if (pool.length > 0) {
      const randomItem = pool[Math.floor(Math.random() * pool.length)];
      setFilteredUsta({
        ...randomItem,
        distance: (Math.random() * 2 + 0.5).toFixed(1) // Məsafə simulyasiyası
      });
    } else {
      setFilteredUsta(null);
    }
  };

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    pickRandomUsta(allUstas, id);
  };

  if (loading) return <div className="text-center p-10 font-bold text-orange-500">Ustalar yüklənir...</div>;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">

      {/* KATEQORİYA SEÇİMİ */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all ${activeCategory === cat.id
                ? 'bg-orange-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-100'
              }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* SMART MATCH - ÖNERİLEN USTA */}
      {filteredUsta ? (
        <div className="bg-white border-2 border-orange-100 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">

            {/* API-dən gələn profilimage */}
            <div className="relative">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={filteredUsta.profilimage}
                  alt={filteredUsta.fullname}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white p-2 rounded-full shadow-lg">
                <Sparkles size={24} />
              </div>
            </div>

            {/* API-dən gələn fullname və job */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm bg-orange-50 px-4 py-1 rounded-full mb-3">
                SİZİN ÜÇÜN EN UYĞUN SEÇİM
              </div>
              <h2 className="text-4xl font-black text-gray-800 mb-1">{filteredUsta.fullname}</h2>
              <p className="text-xl text-orange-500 font-semibold mb-4">{filteredUsta.job}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  <span className="font-bold text-lg text-gray-700">{filteredUsta.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
                  <MapPin className="text-orange-500" size={20} />
                  <span className="font-medium">Sizdən {filteredUsta.distance} km yaxında</span>
                </div>
              </div>
            </div>

            {/* API-dən gələn price */}
            <div className="text-center md:text-right space-y-4">
              <div className="text-3xl font-black text-gray-800">
                {filteredUsta.price}
              </div>
              <Link to={`/masters/${filteredUsta.id}`}>
                <button onClick={handleApplyClick} className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-200">
                  Müraciət Et
                </button>
              </Link>

            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-[2.5rem] border-2 border-dashed text-gray-400 italic">
          Bu kateqoriyada hazırda usta təklifi yoxdur.
        </div>
      )}
    </div>
  );
};

export default SmartMatch;