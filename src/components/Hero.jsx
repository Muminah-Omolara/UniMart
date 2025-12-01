import React from "react";
import { ShoppingBag, Smartphone, Flame, MapPin } from "lucide-react";
import Stud from "../assets/students.jpg";

const Hero = () => {
  return (
    <div className="bg-stone-50 font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <header className="relative max-w-7xl mx-auto px-4 pt-12 pb-[36px] grid lg:grid-cols-2 gap-12 items-center lg:overflow-visible">
        {/* Left: Text Content */}
        <div className="space-y-6 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider transform -rotate-1">
            <Flame size={14} className="fill-orange-500 text-orange-500" />
            <span>Hot Deals on Campus</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900">
            BUY. SELL. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              REPEAT.
            </span>
          </h1>

          {/* UPDATED: Bolder, Darker Sub-text */}
          <p className="text-lg md:text-xl text-slate-700 font-bold max-w-lg leading-relaxed">
            Find what you need, sell what you don't — all at your fingertips, in
            your comfort zone, on{" "}
            <span className="text-orange-600">UniMart</span>; the trusted
            marketplace built for students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="flex items-center justify-center space-x-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-900 hover:scale-[1.02] transition-all shadow-xl shadow-orange-200">
              <ShoppingBag size={20} />
              <span>Start Shopping</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-orange-500 hover:text-orange-600 transition-all">
              <span>Start Selling</span>
            </button>
          </div>

          <div className="pt-4 flex items-center gap-6 text-sm font-bold text-slate-500">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
            </div>
            <p>
              Trusted by <span className="text-orange-600">500+</span> students
            </p>
          </div>
        </div>

        {/* Right: Visual Composition */}
        <div className="relative h-[500px] w-full hidden lg:block">
          {/* Abstract Circle Background */}
          <div className="absolute top-10 right-0 w-[450px] h-[450px] bg-orange-400 rounded-full blur-[80px] opacity-20"></div>

          {/* MAIN IMAGE CARD */}
          {/* Moved slightly to right-0 to maximize space for overlapping cards */}
          <div className="absolute top-0 right-4 w-80 h-[28rem] bg-slate-900 rounded-[2rem] rotate-3 border-[6px] border-white shadow-2xl overflow-hidden z-20 hover:rotate-0 transition-transform duration-500">
            <img
              src={Stud}
              alt="Students in class"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* FLOATING SNEAKER CARD */}
          {/* Adjusted coordinates: 'right' positioning ensures it overlaps the main image */}
          <div className="absolute bottom-16 right-[17rem] bg-white p-4 rounded-2xl shadow-xl border border-slate-100 w-48 -rotate-6 z-30 animate-bounce-slow">
            <div className="flex justify-between items-start mb-2">
              <span className="bg-stone-100 p-1.5 rounded-lg">👟</span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                Avail
              </span>
            </div>
            <div className="font-bold text-slate-900 text-sm">
              Nike Air Force 1
            </div>
            <div className="text-xs text-slate-500">Hostel B • ₦15,000</div>
          </div>

          {/* FLOATING TECH CARD */}
          {/* Adjusted coordinates: 'right' positioning ensures overlap */}
          <div className="absolute top-24 right-[19rem] bg-white p-3 rounded-2xl shadow-lg border border-slate-100 w-40 rotate-12 z-10">
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 p-1.5 rounded-full text-orange-600">
                <Smartphone size={16} />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs">
                  iPhone 12
                </div>
                <div className="text-[10px] text-slate-500">Used • Mint</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
