import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        
        {/* Üst Grid Sistemi */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Brend və Haqqımızda (Geniş yer tutur) */}
          <div className="col-span-2">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-4">
              UstaGo<span className="text-orange-600">.</span>
            </h2>
            <p className="max-w-xs text-slate-400 text-sm leading-relaxed mb-6">
              Biz müştərilərimiz üçün ən yüksək keyfiyyətli rəqəmsal təcrübələr yaradırıq. 
              İnnovasiya və dizaynın vəhdəti ilə gələcəyi bu gün qururuq.
            </p>
            {/* Sadə Sosial Yazılar (İkon əvəzinə) */}
            <div className="flex gap-4 text-xs font-semibold uppercase tracking-widest text-orange-600">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>

          {/* Sütun 1 - Xidmətlər */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Xidmətlər</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Veb Dizayn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Mobil Tətbiqlər</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">SEO Optimizasiya</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">UI/UX Dizayn</a></li>
            </ul>
          </div>

          {/* Sütun 2 - Şirkət */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Şirkət</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Haqqımızda</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Karyera</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Müştəri Rəyləri</a></li>
            </ul>
          </div>

          {/* Sütun 3 - Dəstək */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Dəstək</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Yardım Mərkəzi</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Məxfilik Siyasəti</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">İstifadə Şərtləri</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300">Əlaqə</a></li>
            </ul>
          </div>

        </div>

        {/* Bülleten / Newsletter Abunəliyi (Opsional amma genişlik üçün əla görünür) */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-white font-medium">Xəbərlərə abunə olun</h4>
            <p className="text-xs text-slate-500">Yeniliklərdən ilk siz xəbərdar olun.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="E-poçtunuz" 
              className="bg-slate-900 border border-slate-700 text-sm px-4 py-2 rounded-l focus:outline-none focus:border-blue-500 w-full"
            />
            <button className="bg-orange-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-r transition-colors">
              Qoşul
            </button>
          </div>
        </div>

        {/* Ən alt hissə */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Şirkətinizin Adı. Bütün hüquqlar qorunur.</p>
          <div className="flex gap-6">
            {/* <p>Made with ❤️ in Azerbaijan</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;