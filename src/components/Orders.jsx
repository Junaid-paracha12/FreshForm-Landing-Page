import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Orders = ({ order: { title, text, btn, content } }) => {
  return (
    <>
      <div className="my-11">
        <div className="app-container">
          <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl md:text-center font-medium">
            {title}
          </h1>
          <div className="flex items-center justify-between md:flex-col  md:text-center py-2">
            <p className="text-sm md:text-xs text-slate-600 md:py-3 ">{text}</p>
            <div>
              <button
                type="button"
                className="button-theme bg-black text-white text-sm "
              >
                {btn}
              </button>
            </div>
          </div>
          <Splide
            options={{
              perPage: 4,
              perMove: 1,
              pagination: false,
              rewind: true,
              autoplay: true,
              type: "loop",
              gap: "2rem",
              breakpoints: {
                767: {
                  perPage: 3,
                  gap: "1rem",
                },
                767: {
                  perPage: 2,
                  gap: "1rem",
                },
                551: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
            className="mt-4"
          >
            {content?.map((v, i) => (
              <SplideSlide key={i} className=" border-t-2 p-2 w-full ">
                <h1 className="text-slate-600 w-96">{v.step}</h1>
                <h1 className="text-2xl md:text-xl sm:text-lg font-bold ">
                  {v.title}
                </h1>
                <p className="text-sm">{v.text}</p>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Orders;
