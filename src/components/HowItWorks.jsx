import React from "react";
import { motion } from "framer-motion"; // <--- Import Motion
import Buy from "../assets/buy.svg";
import Browse from "../assets/browse.svg";
import Connect from "../assets/connect.svg";

const steps = [
  {
    id: "01",
    img: Browse,
    title: "Browse the Stash",
    desc: "Filter by hostel, category, or price to find exactly what you need nearby.",
  },
  {
    id: "02",
    img: Connect,
    title: "Connect & Chat",
    desc: "Hit up the seller directly via WhatsApp or call to agree on a meeting spot.",
  },
  {
    id: "03",
    img: Buy,
    title: "Make it Yours",
    desc: "Meet on campus, inspect the item, pay cash or transfer, and it's yours.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-stone-50 relative overflow-hidden">
      {/* Background Decor (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header - Simple Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">
            HOW IT <span className="text-orange-600">GOES DOWN.</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Browse the feed, text the seller, meet on campus. Done.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center text-center z-10" // Added z-10 to sit above line
              // --- ANIMATION SETTINGS ---
              initial={{ opacity: 0, y: 50 }} // Start: Invisible & 50px down
              whileInView={{ opacity: 1, y: 0 }} // End: Visible & Original position
              viewport={{ once: true, margin: "-50px" }} // Trigger when scrolled into view
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger: 0s, 0.2s, 0.4s
            >
              {/* Image Container with Hover Effect */}
              <div className="relative w-24 h-24 mb-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:shadow-orange-100 group-hover:border-orange-200 transition-all duration-300 z-10">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />

                {/* Floating Number Badge */}
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-stone-50 group-hover:bg-orange-600 transition-colors">
                  {step.id}
                </span>
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {step.title}
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA - Fades in last */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-3 rounded-full font-bold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
            Start Exploring
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
