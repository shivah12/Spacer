import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "Archive",
    description:
      "Explore our celestial history through the Archive, a repository of astronomical data, capturing moments of the universe's evolution and showcasing the wonders of space.",
    icon: <FaReact className="text-7xl text-white" />,
    aosDelay: "300",
  },
  {
    title: "Satellites",
    description:
      "Dive into the realm of satellites, artificial companions orbiting Earth. From capturing breathtaking imagery to conducting vital research, satellites play a crucial role in expanding our understanding of the cosmos.",
    icon: <FaShuttleSpace className="text-7xl text-white" />,
    aosDelay: "500",
  },
  {
    title: "Navigation",
    description:
      "Navigate the cosmic expanse with precision through space navigation. Whether it's the Global Positioning System (GPS) guiding us on Earth or spacecraft charting their course, precise navigation is key to exploring the vast unknown.",
    icon: <FaSpaceAwesome className="text-7xl text-white" />,
    aosDelay: "700",
  },
];

const HeroCard = () => {
  return (
    <>
      <section className="bg-black" id="services">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 relative z-10">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
                    >
                      {data.icon}
                      <h1 className="text-white">{data.title}</h1>
                      <p className="text-white">{data.content}</p>
                      <p className="text-sm text-white">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
