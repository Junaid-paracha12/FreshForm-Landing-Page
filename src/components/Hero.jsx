import React from "react";

const Hero = ({ hero: { title, text, img, btn } }) => {
  return (
    <>
      <div className="app-container bg-gradient-to-b from-lime-300 to-lime-400/70 h-auto w-full mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-1 sm:text-center">
          <div className="grid py-9 px-10 ">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl  font-semibold max-w-xs md:max-w-full">
              {title}
            </h1>
            <div className="grid place-content-end justify-items-start gap-4 sm:justify-items-center">
              <p className="md:text-sm ">{text}</p>
              <button
                type="button"
                className="button-theme bg-black text-white text-sm"
              >
                {btn}
              </button>
            </div>
          </div>
          <div>
            <img src={img} alt="img" className="h-[90vh] w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
