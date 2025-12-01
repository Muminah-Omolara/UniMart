import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* CHANGED: Card is now Orange Gradient, Text is White */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-[3rem] p-10 md:p-20 text-center shadow-2xl shadow-orange-200 relative overflow-hidden group">
          
          {/* Background Texture (Abstract Circles) */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase tracking-wider mb-8">
              <Sparkles size={14} />
              <span>Join 5,000+ Students</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
              READY TO <span className="text-slate-900">SHOP?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-orange-50 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop scrolling and start owning. Browse 1,500+ items listed by students in your school right now.
            </p>
            
            {/* Button is now White (High Contrast) */}
            <button className="group inline-flex items-center justify-center bg-white text-slate-900 text-xl font-bold px-12 py-5 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
              Go to Marketplace <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-orange-600" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;