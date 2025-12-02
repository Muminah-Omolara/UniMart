import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    id: 1,
    name: "Zainab A.",
    role: "Medical Student",
    hostel: "Hostel C",
    content:
      "Honestly, UniMart saved my life during exam week. I needed a specific Biochem textbook and found it in 10 mins from a guy in the block next to me. 10/10.",
    rating: 5,
    avatarColor: "bg-purple-100 text-purple-600",
  },
  {
    id: 2,
    name: "David K.",
    role: "Engineering",
    hostel: "Off-Campus",
    content:
      "Sold my old iPhone 11 here. It was way safer than posting on random WhatsApp statuses. The buyer verified it, paid, and we were done. Smooth.",
    rating: 5,
    avatarColor: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    name: "Tola B.",
    role: "Fresher",
    hostel: "Hostel A",
    content:
      "I didn't know where to get affordable curtains for my room. Found a senior selling theirs for half the market price. This site is a cheat code.",
    rating: 4,
    avatarColor: "bg-orange-100 text-orange-600",
  },
];

const Testimonials = () => {
  // Logic: Each card has a specific starting point
  const getInitialPosition = (index) => {
    if (index === 0) return { x: -100, opacity: 0 }; // Left Card starts LEFT
    if (index === 1) return { y: 100, opacity: 0 }; // Middle Card starts BOTTOM
    return { x: 100, opacity: 0 }; // Right Card starts RIGHT
  };

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Static to keep focus on cards */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Star size={14} className="fill-orange-500 text-orange-500" />
            <span>Student Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">
            WORD ON THE <span className="text-orange-600">STREET.</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
            Don't just take our word for it. Here is what your coursemates are
            saying.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 relative group"
              // --- THE CONVERGENCE LOGIC ---
              initial={getInitialPosition(index)} // Set distinct start points
              whileInView={{ x: 0, y: 0, opacity: 1 }} // Every card meets at the Center (0,0)
              // Trigger when 20% of the section is visible
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.0, // Smooth speed (not too fast, not too slow)
                ease: "easeOut",
                delay: 0, //
              }}
            >
              <Quote
                className="absolute top-8 right-8 text-slate-100 group-hover:text-orange-100 transition-colors"
                size={64}
              />

              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "fill-orange-400 text-orange-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>

              <p className="text-slate-700 font-medium leading-relaxed mb-8 relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center space-x-4 border-t border-slate-50 pt-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${review.avatarColor}`}
                >
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {review.hostel} • {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
