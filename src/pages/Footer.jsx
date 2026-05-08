import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-gray-900 via-gray-800 to-slate-900 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Üst sətir */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo və təsvir */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                <span className="font-bold text-xl text-white italic ">U</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-rose-400 to-red-500 bg-clip-text text-transparent">
                  UstaGo
                </h3>
                <p className="text-gray-400 text-sm">Usta xidmətləriniz evinizdə</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              UstaGo platforması vasitəsilə etibarlı ustalarınızı evinizə gətiririk.
              Keyfiyyətli xidmət, ədil qiymət, sürətli həll.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-500/50">
                <span>📘</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <span>📷</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50">
                <span>💼</span>
              </a>
            </div> */}
          </div>

          {/* Səhifələr */}
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-orange-400 via-rose-400 to-purple-500 bg-clip-text text-transparent">
              Səhifələr
            </h4>
            <ul className="space-y-3">
              {[
                'Ana səhifə',
                'Ustalar',
                'Xidmətlər',
                'Haqqımızda',
                'Əlaqə'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 hover:font-medium transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-rose-500 rounded-full mr-3 group-hover:translate-x-2 transition-transform duration-300 opacity-80 group-hover:opacity-100"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* USTA Xidmətləri */}
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-orange-400 via-rose-400 to-purple-500 bg-clip-text text-transparent">
              Xidmətlərimiz
            </h4>
            <ul className="space-y-3">
              {[
                'Santexnik',
                'Elektrik',
                'Pəncərə Taxma',
                'İnşaat İşləri',
                'Boşaltma',
                'Təmizlik'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-rose-400 hover:font-medium transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-rose-500 rounded-full mr-3 group-hover:translate-x-2 transition-transform duration-300 opacity-80 group-hover:opacity-100"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Əlaqə */}
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-orange-400 via-rose-400 to-purple-500 bg-clip-text text-transparent">
              Əlaqə
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-rose-500/10 border border-rose-500/20 hover:border-rose-500/40 transition-all duration-300">
                <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0 text-white font-bold text-sm shadow-lg">☎️</div>
                <div>
                  <p className="text-gray-400 text-sm">24/7 Dəstək</p>
                  <a href="tel:+994502222333" className="text-white font-semibold hover:text-rose-400 transition-colors block">+994 50 222 23 33</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-purple-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0 text-white font-bold text-sm shadow-lg">✉️</div>
                <div>
                  <p className="text-gray-400 text-sm">E-poçt</p>
                  <a href="mailto:info@usta.az" className="text-white font-semibold hover:text-purple-400 transition-colors block">info@usta.az</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0 text-white font-bold text-sm shadow-lg">📍</div>
                <div>
                  <p className="text-gray-400 text-sm">Bütün rayonlar</p>
                  <p className="text-white font-medium">Bakı şəhəri</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aşağı sətir */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2026 UstaGo. Bakıda etibarlı ustalar. Bütün hüquqlar qorunur.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-gray-500 hover:text-orange-400 text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-orange-400 pb-1">İstifadə Şərtləri</a>
            <a href="#" className="text-gray-500 hover:text-red-400 text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-rose-400 pb-1">Gizlilik Siyasəti</a>
            <a href="#" className="text-gray-500 hover:text-rose-400 text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-rose-400 pb-1">Usta Qeydiyyatı</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;