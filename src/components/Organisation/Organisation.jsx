import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";
import sateliteImg1 from "../../assets/satelite3.jpg";
import sateliteImg2 from "../../assets/satelite4.jpg";

const Organisation = () => {
  return (
    <>
      <section className="bg text-white pb-12 font-roboto" id="organisation" >
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
              />
            </div>
            <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                Organisation
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                ISRO
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              ISRO (Indian Space Research Organisation) stands as a beacon of India's space exploration prowess. Established in 1969, it has achieved remarkable milestones, including launching satellites for communication, Earth observation, and interplanetary missions. ISRO's notable successes include the Mars Orbiter Mission and Chandrayaan missions, showcasing India's space capabilities on a global scale.
              </p>
              <button
  data-aos="fade-up"
  data-aos-delay="500"
  className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"
>
  View all..
</button>

            </div>
          </div>
        </div>
      </section>
      <section className="bg text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg1}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
              />
            </div>
            <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                Organisation
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                NASA
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              NASA, or the National Aeronautics and Space Administration, is the United States government agency responsible for the nation's civilian space program and for aeronautics and aerospace research. Established in 1958, NASA conducts groundbreaking space exploration missions, scientific research, and technological advancements. The agency has achieved significant milestones, including landing astronauts on the Moon during the Apollo missions, launching various space probes and telescopes, and contributing to our understanding of the universe. NASA continues to explore space, study Earth, and inspire the world with its dedication to scientific discovery and innovation in space exploration.
              </p>
              <button
  data-aos="fade-up"
  data-aos-delay="500"
  className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"
>
  View all..
</button>


            </div>
          </div>
        </div>
      </section>
      <section className="bg text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg2}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
              />
            </div>
            <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                Organisation
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                SpaceX
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              SpaceX, or Space Exploration Technologies Corp., is an American aerospace manufacturer and space transportation company founded by Elon Musk in 2002. SpaceX is known for its ambitious goals of reducing space transportation costs and enabling the colonization of Mars. The company has developed the Falcon and Starship rockets, as well as the Dragon spacecraft. SpaceX became the first private company to send a spacecraft, Dragon, to the International Space Station (ISS) in 2012. The company has made significant strides in reusability, with the development of reusable rocket technology, leading to cost-effective space travel. SpaceX continues to play a key role in advancing space exploration and commercial space activities.
              </p>
              <button
  data-aos="fade-up"
  data-aos-delay="500"
  className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"
>
  View all..
</button>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Organisation;
