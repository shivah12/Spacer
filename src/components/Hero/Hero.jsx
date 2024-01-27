import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";
import Earth from "../../assets/earth.png";
import './Hero.css'

const Hero = () => {
  return (
    <div className="bg-black/20 h-full ">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              The Earth
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-xl">
              Earth, is a celestial marvel in the vastness of the cosmos. With its rich biodiversity, life-sustaining ecosystems, and intricate landscapes, it's a fragile oasis in the universe, urging us to cherish and protect our shared home.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white"
            >
              Explore..
            </button>
          </div>
        </div>
        <div className="relative earth-container" style={{ zIndex: 2, position: "relative" }}>
          <img src={Earth} alt="" className="earth-image" />
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full z-10"
      />
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
