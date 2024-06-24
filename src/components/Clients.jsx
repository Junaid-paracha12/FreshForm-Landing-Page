import React from "react";

const Clients = ({ client: { title, content } }) => {
  return (
    <>
      <div className="app-container mt-11 sm:text-center">
        <div className=" py-5">
          <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-medium">
            {title}
          </h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
          {content?.map((v, i) => (
            <div key={i} className=" border-t-2">
              <h1 className="text-slate-600 mt-3 md:text-sm">{v.title}</h1>
              <h1 className="text-3xl lg:text-2xl md:text-xl sm:text-lg font-semibold py-2">
                {v.year}
              </h1>
              <p className="text-sm md:text-xs">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
