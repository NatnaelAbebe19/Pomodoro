import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-[300px] h-[300px] my-4 mx-auto flex justify-center items-center rounded-full cirlce ">
        <div className="w-[260px] h-[260px] bg-[#141832] mx-auto flex justify-center items-center rounded-full shadow-xl shadow-[rgba(37,42,84,0.7)] shadow-offset-x-0  shadow-offset-y-0 shadow-blur-8">
          <div className="w-[220px] h-[220px] rounded-full gap-y-4 bg-[#] flex justify-center items-center flex-col">
            <div className="text-[#D7E0FF] text-7xl font-bold font-sarif">
              17:59
            </div>
            <div className="text-[#D7E0FF] font-semibold tracking-widest text-2xl">
              P A U S E
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
