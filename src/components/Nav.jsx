import React, { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import Logo from "../assets/Logo.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const location = useLocation(); 
  const navigate = useNavigate(); 

  // Check if we are currently on the Auth page
  const isAuthPage = location.pathname === "/auth";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setIsSearchOpen(false);
      setIsOpen(false);
    }
  };

  // --- SMART NAVIGATION LOGIC ---
  const handleScroll = (id) => {
    setIsOpen(false); // Close mobile menu

    // 1. If we are on the Home Page, just scroll smoothly
    if (location.pathname === "/") {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top for "Home"
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } 
    // 2. If we are NOT on Home (e.g., on Auth or Shop), navigate there
    else {
      if (id === "home") {
        navigate("/"); // Just go to root for "Home"
      } else {
        navigate(`/#${id}`); // Go to root with hash for sections like "about"
      }
    }
  };

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-md border-b border-orange-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* --- LEFT: LOGO --- */}
          <div 
            onClick={() => handleScroll("home")} 
            className="flex-shrink-0 flex items-center cursor-pointer group"
          >
            <img
              src={Logo}
              alt="UniMart Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="ml-2 text-xl font-display font-black tracking-tighter text-slate-900 hidden sm:block">
              Uni<span className="text-orange-600">Mart</span>
            </span>
          </div>

          {/* --- CENTER: SEARCH (Hide on Auth page to keep it clean?) --- */}
          {/* I kept it visible, but you can wrap this in {!isAuthPage && ...} if you want it hidden too */}
          <div className="hidden md:flex flex-1 items-center justify-center px-8">
            <form onSubmit={handleSearch} className="w-full max-w-md relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books, food, kicks..."
                className="w-full bg-slate-100 text-slate-900 border-2 border-transparent focus:bg-white focus:border-orange-500 rounded-full py-2 pl-4 pr-12 outline-none transition-all font-medium text-sm placeholder:text-slate-400 font-sans"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1.5 p-1.5 bg-slate-200 rounded-full text-slate-500 hover:bg-orange-600 hover:text-white transition-colors"
              >
                <Search size={16} />
              </button>
            </form>
          </div>

          {/* --- RIGHT: DESKTOP LINKS --- */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleScroll("home")} className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors font-sans">Home</button>
            <button onClick={() => handleScroll("about")} className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors font-sans">About</button>
            <button onClick={() => handleScroll("contact")} className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors font-sans">Contact</button>

            {/* LOGIC: Only show Login/Get Started if we are NOT on the Auth page */}
            {!isAuthPage && (
              <>
                <div className="h-6 w-px bg-slate-200 mx-2"></div>

                <Link to="/auth" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center gap-2 font-sans">
                  Log In
                </Link>

                <Link to="/auth">
                  <button className="flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-0.5 font-sans">
                    <User size={16} />
                    <span>Get Started</span>
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* --- MOBILE: TOGGLES --- */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`transition-colors ${isSearchOpen ? 'text-orange-600' : 'text-slate-600'}`}
            >
              <Search size={22} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE SEARCH BAR --- */}
      <div className={`md:hidden bg-slate-50 border-b border-slate-200 overflow-hidden transition-all duration-300 ${isSearchOpen ? 'max-h-20 py-3 px-4' : 'max-h-0 py-0 px-4'}`}>
        <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-white border border-slate-300 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-orange-500 font-sans"
            />
            <button type="submit" className="absolute right-3 text-slate-400 hover:text-orange-600">
              <Search size={16} />
            </button>
        </form>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div
        className={`md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center font-sans">
          <button onClick={() => handleScroll("home")} className="text-lg font-bold text-slate-800 hover:text-orange-600 w-full text-center py-2">Home</button>
          <button onClick={() => handleScroll("about")} className="text-lg font-bold text-slate-800 hover:text-orange-600 w-full text-center py-2">About</button>
          <button onClick={() => handleScroll("contact")} className="text-lg font-bold text-slate-800 hover:text-orange-600 w-full text-center py-2">Contact</button>
          
          {/* Mobile Logic: Hide Buttons if on Auth Page */}
          {!isAuthPage && (
            <>
              <hr className="w-full border-slate-100 my-2" />
              <div className="w-full flex flex-col gap-3">
                <Link to="/auth" onClick={() => setIsOpen(false)} className="w-full">
                  <button className="w-full bg-slate-100 text-slate-900 py-3 rounded-xl font-bold text-lg hover:bg-slate-200 transition">
                    Log In
                  </button>
                </Link>
                <Link to="/auth" onClick={() => setIsOpen(false)} className="w-full">
                  <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-orange-700 transition shadow-lg shadow-orange-200">
                    Get Started
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;