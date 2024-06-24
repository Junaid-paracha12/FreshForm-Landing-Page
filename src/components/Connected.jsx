import React from "react";

const Connected = ({ connected: { title, text, btn, img } }) => {
  return (
    <>
      <div className="app-container bg-gradient-to-b from-lime-300 to-lime-400/70 h-auto  mt-10">
        <div className=" grid grid-cols-2 sm:grid-cols-1 sm:text-center">
          <div className="grid py-9 px-10 ">
            <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-medium">
              {title}
            </h1>
            <div className="grid place-content-end justify-items-start sm:justify-items-center gap-4 text-sm">
              <p className="text-base md:text-sm sm:text-xs">{text}</p>
              <form className="grid grid-cols-2 md:grid-cols-1 gap-4">
                <input
                  placeholder="Email Address"
                  name="email"
                  type={"email"}
                  className="py-2 px-5 ring-1 ring-slate-300 flex items-center shadow-md shadow-slate-200 w-auto text-sm rounded-full relative placeholder:text-slate-500 "
                />
                <div>
                  {" "}
                  <button
                    type="button "
                    className="button-theme text-white bg-black"
                  >
                    {btn}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <img
              src={img}
              alt="img"
              className="h-[85vh] sm:h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Connected;
