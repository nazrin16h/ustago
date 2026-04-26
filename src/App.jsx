import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home as HomeIcon, User, LayoutDashboard, CreditCard, Search, Plus } from 'lucide-react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sky-50 flex flex-col pb-20">
        {/* Üst hissə (Header) - İstəyə bağlı */}
        <header className="bg-white/80 backdrop-blur-md p-4 sticky top-0 z-40 flex justify-between items-center border-b border-sky-100">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="font-extrabold text-orange-500 italic text-2xl">U</span>
            <span className="text-slate-900">sta</span>
            <span className="text-slate-900">G</span>
            <span className="text-slate-900">o</span>
          </h1>      <button className="p-2 bg-sky-50 rounded-full text-sky-600">
            <Search size={20} />
          </button>
        </header>

        {/* Səhifələrin Dəyişən Hissəsi */}
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        {/* Mobil Bottom Navigation (Alt Menyu) */}
        <nav className="fixed   bottom-0 left-0 right-0 bg-white border-t border-sky-100 px-6 py-3 flex justify-between items-center z-50 rounded-t-[24px] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">

          <NavLink to="/" className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-600 scale-110' : 'text-gray-400'}`
          }>
            <HomeIcon size={24} />
            <span className="text-[10px] font-medium">Ana Səhifə</span>
          </NavLink>

          <NavLink to="/dashboard" className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-600 scale-110' : 'text-gray-400'}`
          }>
            <LayoutDashboard size={24} />
            <span className="text-[10px] font-medium">Panel</span>
          </NavLink>

          {/* Ortadakı xüsusi düymə (Məsələn: Sifariş et və ya Axtar) */}
          <div className="relative -mt-10">
            <div className="bg-sky-500 p-4 rounded-full shadow-lg shadow-sky-200 text-white border-4 border-white active:scale-95 transition-transform">
              <Plus size={28} />
            </div>
          </div>

          <NavLink to="/checkout" className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-600 scale-110' : 'text-gray-400'}`
          }>
            <CreditCard size={24} />
            <span className="text-[10px] font-medium">Ödəniş</span>
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-sky-600 scale-110' : 'text-gray-400'}`
          }>
            <User size={24} />
            <span className="text-[10px] font-medium">Profil</span>
          </NavLink>

        </nav>
      </div>
    </Router>
  );
}

export default App;