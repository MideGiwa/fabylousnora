import React from "react";

const CategoryBanner = ({ title, image }) => {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl group cursor-pointer">
      
      {/* Full image — always visible, no cropping */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Text — Bottom-left aligned */}
      <div
        className="
          absolute
          z-10
          text-white
          /* SMALL screens: adjust left and bottom spacing here */
          bottom-8 left-4
          /* MEDIUM screens: adjust left and bottom spacing here */
          md:bottom-12 md:left-8
          /* LARGE screens: adjust left and bottom spacing here */
          lg:bottom-16 lg:left-12
        "
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 font-playfair leading-snug">
          {title}
        </h3>

        {/* Button */}
        <button
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0",
          }}
          className="text-white border-b-2 border-white pb-1 inline-flex items-center gap-2 w-fit tracking-widest text-base md:text-lg
                     hover:text-[#BD007C] hover:border-[#BD007C] transition-all duration-300 cursor-pointer"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default CategoryBanner;
