import React from "react";

const Discover = ({ discover: { title, text, img, btn } }) => {
  return (
    <>
      <div className="app-container bg-gradient-to-b from-lime-300 to-lime-400/70 h-auto  mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-1 sm:text-center">
          <div>
            <img
              src={img}
              alt="img"
              className="h-[85vh] sm:h-auto w-full object-cover"
            />
          </div>
          <div className="grid py-9 px-16 ">
            <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold ">
              {title}
            </h1>
            <div className="grid place-content-end justify-items-start sm:justify-items-center gap-4">
              <p className="md:text-sm">{text}</p>
              <button
                type="button"
                className="button-theme bg-black text-white text-sm"
              >
                {btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
