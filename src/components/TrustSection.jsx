import React from "react";
import { ShieldCheck, Eye, Truck, Zap } from "lucide-react";

// Feature Data
const features = [
  {
    icon: <ShieldCheck className="text-orange-500" size={28} />,
    title: "Verified Vendors",
    desc: "We verify every student seller. No scams, just business.",
  },
  {
    icon: <Eye className="text-orange-500" size={28} />,
    title: "Insane Visibility",
    desc: "Your product is seen by thousands of students on your campus instantly.",
  },
  {
    icon: <Truck className="text-orange-500" size={28} />,
    title: "Swift Delivery",
    desc: "Since buyers are nearby, pickup is often under 30 minutes.",
  },
];

// Stats Data
const stats = [
  { value: "100+", label: "Trusted Vendors" },
  { value: "1.5k+", label: "Products Listed" },
  { value: "800+", label: "Transactions" },
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow (Subtle Ambience) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 1. UNIFIED HEADER (Covers both columns) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight">
            WHY THE CAMPUSES <span className="text-orange-500">TRUST US.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We aren't just a website. We are the student economy engine, built
            to keep you safe, sorted, and solvent.
          </p>
        </div>

        {/* 2. SPLIT CONTENT (Stats + Features) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT COLUMN: Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
              >
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: The Big Numbers (Ready for CountUp Animation) */}
          <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative">
            {/* Decorative Corner Icon */}
            <div className="absolute top-8 right-8 text-slate-800">
              <Zap size={48} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
              Live Campus Stats
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
              {stats.map((stat, index) => (
                <div key={index} className={index === 2 ? "sm:col-span-2" : ""}>
                  {/* This is the number you will animate later */}
                  <div className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm font-bold text-orange-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
