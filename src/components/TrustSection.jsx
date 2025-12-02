import React, { useEffect, useRef } from "react";
import { ShieldCheck, Eye, Truck, Zap } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion"; // <--- Updated imports

const features = [
  {
    icon: <ShieldCheck className="text-orange-500" size={28} />,
    title: "Verified Vendors",
    desc: "We verify every student seller. No scams, just business.",
  },
  {
    icon: <Eye className="text-orange-500" size={28} />,
    title: "Insane Visibility",
    desc: "Your product is seen by thousands of students in your hostel instantly.",
  },
  {
    icon: <Truck className="text-orange-500" size={28} />,
    title: "Swift Delivery",
    desc: "Since buyers are nearby, pickup is often under 30 minutes.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Trusted Vendors" },
  { value: 1500, suffix: "+", label: "Products Listed" },
  { value: 800, suffix: "+", label: "Transactions" },
];

// --- SNAPPY COUNTER COMPONENT ---
const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Triggers sooner
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      // Logic: Go from 0 to value in exactly 1.5 seconds.
      // ease: "easeOut" makes it fast at start, smooth at end, but NO LAG.
      animate(count, value, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const TrustSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight">
            WHY THE CAMPUS <span className="text-orange-500">TRUSTS US.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We aren't just a website. We are the student economy engine, built
            to keep you safe, sorted, and solvent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
                transition={{ duration: 0.5, delay: index * 0.1 }} // Faster stagger
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
              </motion.div>
            ))}
          </div>

          {/* Stats Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }} // Faster appearance
            className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative"
          >
            <div className="absolute top-8 right-8 text-slate-800">
              <Zap size={48} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
              Live Campus Stats
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
              {stats.map((stat, index) => (
                <div key={index} className={index === 2 ? "sm:col-span-2" : ""}>
                  <div className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 flex items-center">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm font-bold text-orange-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
