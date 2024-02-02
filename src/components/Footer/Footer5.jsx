import React from "react";


const Footer = () => {
  return (
    <div className="bg-primary">
      <section className="max-w-[1400px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* first column */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Spacer
            </h1>
            <p className="text-gray-400">
              Subscribe to our{" "}
              <span className="text-white font-bold">newsletter</span> for the
              monthly news updates.
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                type="text"
                placeholder="Email"
              />
              <button className="bg-white hover:bg-white-200/75 h-full inline-block py-2 px-6 text-black">
                Ok
              </button>
            </div>
          </div>
          {/* Second column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3 `}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40 mx-auto">
            <span className="text-gray-400">
              @Copyright Spacer 2024
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
