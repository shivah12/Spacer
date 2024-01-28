import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="padding-x py-9 absolute z-12 w-full ">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <span className="text-white font-bold text-2xl ml-2 padding-20">
              Spacer
            </span>
          </a>
          <div className="hidden lg:flex justify-evenly flex-1">
            <ul className="flex-1 flex justify-evenly items-center ">
              <li>
                <a
                  href="#"
                  className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
                  style={{ textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#satellite"
                  className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
                  style={{ textDecoration: "none" }}
                >
                  Satellite
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#organisation"
                  className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
                  style={{ textDecoration: "none" }}
                >
                  Organisations
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleNav}
              className="text-white focus:outline-none"
            >
              {isNavOpen ? "Close" : "Menu"}
            </button>
            {isNavOpen && (
              <ul className="mt-4 flex flex-col items-center gap-4">
                <li>
                  <a
                    href="#"
                    className="block text-white hover:text-coral-red"
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#satellite"
                    className="block text-white hover:text-coral-red"
                    style={{ textDecoration: "none" }}
                  >
                    Satellite
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block text-white hover:text-coral-red"
                    style={{ textDecoration: "none" }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#organisation"
                    className="block text-white hover:text-coral-red"
                    style={{ textDecoration: "none" }}
                  >
                    Organisations
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
