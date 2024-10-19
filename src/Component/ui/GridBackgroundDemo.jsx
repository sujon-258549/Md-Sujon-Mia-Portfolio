import React from "react";
 
export function GridBackgroundDemo({header}) {
  return (
    <div className="h-[10rem] w-full  bg-[#2D2D2D] mb-5 md:mb-10  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-[#2D2D2D] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 data-aos="fade-right" data-aos-delay="500" className="text-[#01ecff] text-2xl md:text-4xl md:w-96 mx-auto lg:text-5xl font-bold text-center py-10 md:py-16 ">{header}</h2>
    </div>
  );
}