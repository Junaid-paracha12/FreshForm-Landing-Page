import React, { useEffect, useState } from "react";
import menu from "../images/menu.svg";
import PopupModal from "./PopupModal";

const Navbar = ({ navlinks }) => {
  const [navState, setNavState] = useState(false);
  const [popupModalState, setPopupModalState] = useState(false);
  // const [count, setcount] = useState(0);
  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
      // setcount(count + 1);
    } else {
      setNavState(false);
      // setcount(count - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 opacity-100 z-40 ${
          navState
            ? "bg-white backdrop-blur-md top-0 py-2 border-b border-black/20 bg-opacity-70"
            : " top-3"
        } transition-all duration-300`}
      >
        <nav className="flex items-center justify-between app-container ">
          <a href="/" className="flex items-center ">
            <h1 className="text-xl font-semibold">FreshFarm</h1>
          </a>
          <ul className="flex items-center lg:hidden gap-7 ">
            {navlinks?.map((val, i) => (
              <li key={i} className="">
                <a to={"#"} className="text-sm text-black  ">
                  {val.link}
                </a>
              </li>
            ))}
          </ul>
          {/* <ul>
            <button className="button-theme">count:{count}</button>
          </ul> */}

          <ul className="hidden lg:flex items-center ">
            <li className=" grid items-center">
              <button
                className={`flex items-center gap-2  ${
                  navState ? "" : " "
                } p-1.5 rounded-full`}
                onClick={() => setPopupModalState(!popupModalState)}
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className={`   ${navState ? "text-white" : "text-black"}`}
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {popupModalState && <PopupModal navlinks={navlinks} />}
    </>
  );
};

export default Navbar;
