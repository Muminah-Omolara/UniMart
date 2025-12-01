import React from "react";

const Marquee = () => {
  return (
    <div className="bg-orange-600 py-4 overflow-hidden relative flex items-center">
      {/* The scrolling container */}
      <div className="whitespace-nowrap flex animate-marquee">
        {/* We repeat the text so it loops seamlessly */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-white font-display font-black text-lg md:text-xl uppercase tracking-wider">
              🏠 NEED OFF-CAMPUS ACCOMMODATION? CALL AGENT MIKE:{" "}
              <span className="text-slate-900 bg-white px-2 rounded mx-2">
                080-123-45678
              </span>{" "}
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
