import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full ">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <span className="text-white font-bold text-2xl ml-2 padding-20">Spacer</span>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <li>
              <a
                href="#"
                className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
                style={{ textDecoration:"none"}}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#satellite"
                className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out 3s hover:border-b hover:border-coral-red"
                style={{ textDecoration: "none" }}
              >
                Satellite
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000  ease-in-out hover:border-b hover:border-coral-red"
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
          
        </nav>
      </header>
    </>
  );
};

export default Navbar;
