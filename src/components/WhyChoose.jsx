import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const WhyChoose = ({ choose: { title, text, btn, content } }) => {
  return (
    <>
      <div className="app-container mt-16">
        <div className="grid grid-cols-2 md:grid-cols-1 md:gap-6 md:text-center">
          <div>
            <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl  py-5">
              {title}
            </h1>
            <p className="sm:text-xs">{text}</p>
            <div>
              {" "}
              <button
                type="button"
                className="text-sm button-theme bg-black text-white mt-3"
              >
                {btn}
              </button>
            </div>
          </div>

          <Splide
            options={{
              perPage: 2,
              perMove: 1,
              pagination: false,
              rewind: true,
              autoplay: true,
              type: "loop",
              gap: "2rem",
              breakpoints: {
                550: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
          >
            {content?.map((v, i) => (
              <SplideSlide key={i}>
                <div className="">
                  <img
                    src={v.imgsrc}
                    alt="img/slide"
                    className="w-full h-[40vh] object-cover "
                  />
                  <div className="  pt-3">
                    <h1 className=" font-semibold text-2xl lg:text-xl md:text-lg">
                      {v.title}
                    </h1>
                    <p className="text-sm md:text-xs">{v.text}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
