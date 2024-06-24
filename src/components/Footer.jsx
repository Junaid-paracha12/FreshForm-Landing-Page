import React from "react";

const Footer = ({ footer: { title, list } }) => {
  return (
    <>
      <div className="bg-black  w-full  py-4">
        <div className="app-container ">
          <div className="flex items-center flex-wrap  justify-between my-8 ">
            <h1 className="text-white text-3xl lg:text-2xl md:text-xl font-semibold">
              {title}
            </h1>

            <ul className="flex items-center flex-wrap gap-5 md:py-3">
              {list?.map((v, i) => (
                <li key={i} className="text-white text-sm">
                  {v.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t-2 border-slate-300/50">
            <div className="border-slate-600 flex items-center flex-wrap justify-between mt-6">
              <p className="text-slate-300/70 text-xs">
                © 2023FreshFarm. All rights reserved.
              </p>
              <ul className="text-xs text-slate-300/70 flex items-center gap-3 md:py-2">
                <li>Policy service</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
