import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-10">
      
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
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-6">Populyar Xidmətlər</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Elektrik', 'Santexnik', 'Təmir', 'Kombi'].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-300 cursor-pointer transition text-center">
              <div className="text-3xl mb-2">🛠️</div>
              <span className="font-semibold text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Niyə UstaGo? (Güvən faktoru) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4 p-4">
          <div className="bg-green-100 p-3 rounded-lg text-green-600">✓</div>
          <div>
            <h4 className="font-bold">Təsdiqlənmiş Profillər</h4>
            <p className="text-sm text-gray-500">Bütün ustaların sənədləri yoxlanılır.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-600">🔒</div>
          <div>
            <h4 className="font-bold">Escrow Ödəniş</h4>
            <p className="text-sm text-gray-500">İş bitmədən ödəniş ustaya çatmır.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4">
          <div className="bg-orange-100 p-3 rounded-lg text-orange-600">⭐</div>
          <div>
            <h4 className="font-bold">Real Rəylər</h4>
            <p className="text-sm text-gray-500">Yalnız real müştərilərin rəyləri.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;