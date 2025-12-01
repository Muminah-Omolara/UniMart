import React from "react";
import { ArrowRight, Coffee, BookOpen } from "lucide-react";
import Tech from "../assets/techhh.jpg";
import Food from "../assets/food.jpg";
import Fashion from "../assets/fashion.jpg";
import Books from "../assets/books.jpg";

const Categories = () => {
  return (
    <div>
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">
              BROWSE <span className="text-orange-600">CATEGORIES.</span>
            </h2>

            <p className="text-slate-500 font-medium text-lg mb-6">
              From lecture notes, to late-night bites, to the latest tech gadget
              - find it.
            </p>

            {/* Centered "View All" Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center font-bold text-slate-900 border-b-2 border-orange-200 hover:border-orange-600 hover:text-orange-600 transition-all pb-1"
            >
              View Full Catalogue <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
          {/* Header End */}

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
            {/* TECH CARD (Large 2x2) */}
            <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group cursor-pointer bg-slate-900">
              <img
                src={Tech}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                alt="Tech"
              />
              {/* Changed gradient to Slate/Blue to avoid pure black feeling */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h3 className="text-3xl font-black text-white mb-1">TECH</h3>
                <p className="text-slate-300">Laptops, Chargers & Audio</p>
              </div>
            </div>

            {/* --- FOOD CARD (Tall 1x2) --- */}
            <div className="col-span-1 row-span-2 rounded-[2rem] p-6 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer bg-orange-950">
              <img
                src={Food}
                alt="Food"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              {/* 2. Subtle Dark Gradient at bottom so text pops*/}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10">
                <Coffee size={32} className="text-orange-400" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black leading-tight text-white">
                  FOOD &<br /> SNACKS
                </h3>
              </div>
            </div>

            {/* 3. FASHION CARD (Standard 1x1) */}
            <div className="rounded-[2rem] overflow-hidden relative group cursor-pointer bg-slate-200">
              <img
                src={Fashion}
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                alt="Fashion"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
                <h3 className="text-sm font-black text-slate-900">FASHION</h3>
              </div>
            </div>

            {/* --- BOOKS CARD (Standard 1x1) --- */}
            <div className="rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer bg-yellow-50">
              {/* 1. Image*/}
              <img
                src={Books}
                alt="Books"
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-yellow-900/10 group-hover:bg-transparent transition-colors"></div>

              {/* Content*/}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-white/80 backdrop-blur-md p-2 rounded-full">
                    <BookOpen size={20} className="text-yellow-800" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white drop-shadow-md">
                    BOOKS
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
