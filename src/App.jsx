import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Home as HomeIcon, User, CreditCard, Plus, Sparkles, LayoutDashboard } from 'lucide-react';

// Səhifə importları
import Home from './pages/Home';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import AddElan from './pages/AddElan';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
        
        {/* --- HEADER (Desktop) --- */}
        <header className="bg-white/90 backdrop-blur-md p-4 sticky top-0 z-50 flex justify-between items-center border-b border-slate-100 px-6 md:px-12">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-xl font-bold flex items-center">
              <span className="font-extrabold text-orange-500 italic text-2xl">U</span>
              <span className="text-slate-900">staGo</span>
              <Sparkles className="text-orange-400 ml-1" size={16} />
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors">
              <HomeIcon size={18} /> Ana Səhifə
            </Link>
            <Link to="/checkout" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors">
              <CreditCard size={18} /> Ödəniş
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors">
              <User size={18} /> Profil
            </Link>
            <Link to="/add-elan" className="bg-orange-500 text-white px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg hover:bg-orange-600 transition-all active:scale-95">
              <Plus size={18} /> Yeni Elan
            </Link>
          </div>
        </header>

        {/* --- ROUTES --- */}
        <main className="flex-grow pb-24 md:pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/add-elan" element={<AddElan />} />
          </Routes>
        </main>

        {/* Mobil Bottom Navigation (Alt Menyu) */}
        <nav className="fixed lg:hidden bottom-0 left-0 right-0 bg-white border-t border-sky-100 px-6 py-3 flex justify-between items-center z-50 rounded-t-[24px] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">

          <NavLink to="/" className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-600 scale-110' : 'text-gray-400'}`
          }>
            <HomeIcon size={24} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Ana Səhifə</span>
          </NavLink>

          <NavLink to="/dashboard" className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-600 scale-110' : 'text-gray-400'}`
          }>
            <LayoutDashboard size={24} />
            <span className="text-[10px] font-medium">Panel</span>
          </NavLink>

          {/* Ortadakı xüsusi düymə (Məsələn: Sifariş et və ya Axtar) */}
          <div className="relative -mt-10">
            <div className="bg-orange-500 p-4 rounded-full shadow-lg shadow-sky-200 text-white border-4 border-white active:scale-95 transition-transform">
              <Plus size={28} />
            </div>
          </div>

          <NavLink to="/checkout" className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-600 scale-110' : 'text-gray-400'}`
          }>
            <CreditCard size={24} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Ödəniş</span>
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-500 scale-110' : 'text-slate-500'}`}>
            <User size={24} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Profil</span>
          </NavLink>

        </nav>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;