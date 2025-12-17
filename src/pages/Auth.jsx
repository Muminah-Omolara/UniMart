import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  University,
  ChevronDown,
  Check,
} from "lucide-react";
import Stud from "../assets/students.jpg";
import { NigerianUnis } from "../data/universities";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // --- UNIVERSITY DROPDOWN STATE ---
  const [uniSearch, setUniSearch] = useState("");
  const [selectedUni, setSelectedUni] = useState("");
  const [isUniDropdownOpen, setIsUniDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredUnis = NigerianUnis.filter((uni) =>
    uni.toLowerCase().includes(uniSearch.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUniDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative min-h-screen pt-16 pb-10 bg-slate-900 flex items-start md:items-center justify-center p-4 font-sans">
      <div className="absolute inset-0 z-0">
        <img
          src={Stud}
          alt="Page Background"
          className="w-full h-full object-cover blur-[2px] opacity-120" 
        />
        {/* Dark overlay so the white card stands out */}
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>
      <div className="relative z-10 bg-white rounded-3xl shadow-xl w-full max-w-4xl md:h-[550px] h-auto overflow-hidden border border-slate-100 flex flex-col md:block">
        {/* 1. SIGN UP FORM (Left Side)
         */}
        <div
          className={`
            md:absolute md:top-0 md:left-0 md:h-full md:w-1/2 w-full
            flex items-center justify-center p-6 md:p-2 
            transition-all duration-700 ease-in-out
            ${
              isSignUp
                ? "md:opacity-100 md:z-20 md:translate-x-0"
                : "md:opacity-0 md:z-10 md:translate-x-full"
            }
            ${isSignUp ? "block" : "hidden md:block"} 
        `}
        >
          <form
            className="w-full max-w-xs space-y-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-1">
              Create Account
            </h1>

            <div className="space-y-2.5">
              {/* Full Name */}
              <div className="relative group">
                <User
                  className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-orange-600 transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-orange-500 font-medium text-slate-900"
                />
              </div>

              {/* University Dropdown */}
              <div className="relative group" ref={dropdownRef}>
                <University
                  className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-orange-600 transition-colors z-10"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Select University"
                  value={isUniDropdownOpen ? uniSearch : selectedUni}
                  onChange={(e) => {
                    setUniSearch(e.target.value);
                    setIsUniDropdownOpen(true);
                  }}
                  onFocus={() => setIsUniDropdownOpen(true)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-10 text-sm outline-none focus:border-orange-500 font-medium text-slate-900 cursor-pointer"
                />
                <ChevronDown
                  className={`absolute right-4 top-3.5 text-slate-400 transition-transform ${
                    isUniDropdownOpen ? "rotate-180" : ""
                  }`}
                  size={16}
                />

                {isUniDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-white border border-slate-100 rounded-xl shadow-xl max-h-40 overflow-y-auto z-50 no-scrollbar">
                    {filteredUnis.length > 0 ? (
                      filteredUnis.map((uni, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedUni(uni);
                            setUniSearch("");
                            setIsUniDropdownOpen(false);
                          }}
                          className="px-4 py-2.5 hover:bg-orange-50 hover:text-orange-700 cursor-pointer text-xs font-bold text-slate-600 transition-colors border-b border-slate-50 last:border-0 flex justify-between items-center"
                        >
                          <span className="truncate">{uni}</span>
                          {selectedUni === uni && (
                            <Check
                              size={14}
                              className="text-orange-600 shrink-0 ml-2"
                            />
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-xs text-slate-400 font-medium text-center">
                        No uni found.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-orange-600 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="student@school.edu.ng"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-orange-500 font-medium text-slate-900"
                />
              </div>

              {/* Password */}
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-orange-600 transition-colors"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-orange-500 font-medium text-slate-900"
                />
              </div>
            </div>

            <button className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-slate-900 transition-all shadow-lg hover:shadow-orange-200 text-sm">
              Sign Up
            </button>

            {/* Socials */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-slate-400 tracking-wider">
                OR CONTINUE WITH
              </span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl flex items-center justify-center transition-colors">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5 mr-2"
                  alt="Google"
                />
                <span className="text-sm">Google</span>
              </button>
              <button className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl flex items-center justify-center transition-colors">
                <img
                  src="https://www.svgrepo.com/show/508775/apple-logo.svg"
                  className="w-5 h-5 mr-2"
                  alt="Apple"
                />
                <span className="text-sm">Apple</span>
              </button>
            </div>
          </form>
        </div>

        {/* ==============================================
            2. LOG IN FORM (Right Side)
           ============================================== */}
        <div
          className={`
            md:absolute md:top-0 md:left-0 md:h-full md:w-1/2 w-full
            flex items-center justify-center p-6 md:p-8 
            transition-all duration-700 ease-in-out
            ${
              isSignUp
                ? "md:opacity-0 md:z-10 md:-translate-x-full"
                : "md:opacity-100 md:z-20 md:translate-x-full"
            }
            ${!isSignUp ? "block" : "hidden md:block"}
        `}
        >
          <form
            className="w-full max-w-xs space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-1">
              Welcome Back!
            </h1>

            <div className="space-y-3">
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-orange-600 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-orange-500 font-medium text-slate-900"
                />
              </div>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-orange-600 transition-colors"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-12 text-sm outline-none focus:border-orange-500 font-medium text-slate-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-xs font-bold text-orange-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 text-sm">
              Log In
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-slate-400 tracking-wider">
                OR CONTINUE WITH
              </span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl flex items-center justify-center transition-colors">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5 mr-2"
                  alt="Google"
                />
                <span className="text-sm">Google</span>
              </button>
              <button className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl flex items-center justify-center transition-colors">
                <img
                  src="https://www.svgrepo.com/show/508775/apple-logo.svg"
                  className="w-5 h-5 mr-2"
                  alt="Apple"
                />
                <span className="text-sm">Apple</span>
              </button>
            </div>
          </form>
        </div>

        {/* ==============================================
            3. SLIDING OVERLAY 
           ============================================== */}
        <div
          className={`hidden md:block absolute top-0 left-0 h-full w-1/2 overflow-hidden transition-transform duration-700 ease-in-out z-40 ${
            isSignUp
              ? "translate-x-full rounded-l-[3rem] rounded-r-none"
              : "translate-x-0 rounded-r-[3rem] rounded-l-none"
          }`}
        >
          <div className="relative h-full w-full bg-slate-900 text-white">
            <img
              src={Stud}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br from-orange-600/90 to-slate-900/95 transition-all duration-700 ${
                isSignUp ? "opacity-95" : "opacity-90"
              }`}
            ></div>

            <div
              className={`relative h-full w-[200%] flex transition-transform duration-700 ease-in-out ${
                isSignUp ? "-translate-x-1/2" : "translate-x-0"
              }`}
            >
              <div className="w-1/2 h-full flex flex-col items-center justify-center p-12 text-center">
                <h2 className="text-3xl font-display font-black mb-3">
                  New here?
                </h2>
                <p className="text-white/90 text-sm mb-6 max-w-xs font-medium leading-relaxed">
                  Discover the fastest way to buy and sell on your campus.
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="border-2 border-white text-white px-8 py-2.5 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all text-sm"
                >
                  Sign Up
                </button>
              </div>
              <div className="w-1/2 h-full flex flex-col items-center justify-center p-12 text-center">
                <h2 className="text-3xl font-display font-black mb-3">
                  Welcome Back!
                </h2>
                <p className="text-white/90 text-sm mb-6 max-w-xs font-medium leading-relaxed">
                  Pick up where you left off. Login to manage your store.
                </p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="border-2 border-white text-white px-8 py-2.5 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all text-sm"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. MOBILE TOGGLE (Visible ONLY on mobile) */}
        <div className="md:hidden py-4 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-slate-500 font-medium text-xs">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-2 text-orange-600 font-bold underline"
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
