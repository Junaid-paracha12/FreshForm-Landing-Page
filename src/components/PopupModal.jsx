import React from "react";

const PopupModal = ({ navlinks }) => {
  return (
    <>
      <nav className="bg-white fixed top-9 right-11  bg-opacity-70  z-50 backdrop-filter backdrop-blur-md rounded-lg w-40 h-auto py-5 px-6 transition-transform duration-300 border-dotted border-lime-300 border-2">
        <ul className="flex items-start flex-col gap-3 text-black ">
          {navlinks?.map((val, i) => (
            <li key={i}>
              <a to={"#"} className="text-sm text-black ">
                <u> {val.link}</u>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default PopupModal;
