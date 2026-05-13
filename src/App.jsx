import { useState } from 'react';
// useLocation hook-unu bura əlavə etdik
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, CreditCard, Plus, Sparkles, Wrench, LogIn, UserPlus } from 'lucide-react';

// Səhifə importları
import Home from './pages/Home';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import AddElan from './pages/AddElan';
import Footer from './pages/Footer';
import SmartMatch from './pages/SmartMatch';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Layout daxilində hook istifadə edə bilmək üçün əsas məntiqi ayrı bir komponentə çıxarırıq
function AppContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Cari URL-i götürürük
  const location = useLocation();

  // Əgər login və ya signup səhifəsindəyiksə true olacaq
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      
      {/* --- HEADER --- */}
      <header className="bg-white/90 backdrop-blur-md p-4 sticky top-0 z-50 flex justify-between items-center border-b border-slate-100 px-6 md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold flex items-center">
            <span className="font-extrabold text-orange-500 italic text-2xl">U</span>
            <span className="text-slate-900">staGo</span>
            <Sparkles className="text-orange-400 ml-1" size={16} />
          </h1>
        </Link>

        {/* Desktop Menyu */}
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

          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-orange-50 p-2.5 rounded-xl text-orange-600 hover:bg-orange-100 transition-all border border-orange-100 shadow-sm"
            >
              <Wrench size={20} strokeWidth={2.5} />
              <span className="text-sm font-bold">Giriş</span>
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-2 z-20 animate-in fade-in zoom-in duration-200">
                  <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors" onClick={() => setIsDropdownOpen(false)}>
                    <LogIn size={18} className="text-orange-500" /> Giriş Et
                  </Link>
                  <Link to="/signup" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors" onClick={() => setIsDropdownOpen(false)}>
                    <UserPlus size={18} className="text-orange-500" /> Qeydiyyat
                  </Link>
                </div>
              </>
            )}
          </div>

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

            <Route path="/masters/:id" element={<Profile />} />
          </Routes>
        </main>

      {/* --- MOBİL ÜÇÜN ADD ELAN DÜYMƏSİ --- */}
      {/* Əgər login/signup səhifəsindəyiksə, bu düyməni də gizlədə bilərik */}
      {!isAuthPage && (
        <Link 
          to="/add-elan" 
          className="md:hidden fixed bottom-24 right-6 bg-orange-500 text-white p-4 rounded-full shadow-2xl shadow-orange-200 z-[60] active:scale-90 transition-transform"
        >
          <Plus size={28} strokeWidth={3} />
        </Link>
      )}

      {/* --- MOBİL BOTTOM NAVIGATION --- */}
      {/* Login səhifəsində mobil menyunu da gizlətmək daha yaxşı görünər */}
      {!isAuthPage && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-8 py-4 flex justify-between items-center z-50 rounded-t-[30px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-500 scale-110' : 'text-slate-500'}`}>
            <HomeIcon size={24} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Ana Səhifə</span>
          </NavLink>
          <NavLink to="/checkout" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-500 scale-110' : 'text-slate-500'}`}>
            <CreditCard size={24} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Ödəniş</span>
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-orange-500 scale-110' : 'text-slate-500'}`}>
            <User size={24} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Profil</span>
          </NavLink>
        </nav>
      )}

      {/* ƏSAS DƏYİŞİKLİK BURADA: Əgər isAuthPage deyilərsə SmartMatch göstərilsin */}
      {!isAuthPage && <SmartMatch />}
      
      <Footer />
    </div>
  );
}

// Router hook-ları (useLocation kimi) Router daxilində olmalıdır
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;