import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { GiTeePipe } from "react-icons/gi";
import { FaDroplet } from "react-icons/fa6";
import { FaWater } from "react-icons/fa";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="group w-72 h-80 p-6 bg-white rounded-md shadow-lg transform transition duration-500 hover:rotate-180 hover:shadow-2xl relative flex flex-col gap-8 pt-16">
      <div className="flex justify-center absolute rounded-full w-24 h-24 items-center bg-white -top-10 left-[50%] -translate-x-[50%] border-4 border-purple-900">
        <div className="text-5xl text-purple-700">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
      <button className="text-purple-800 text-lg flex items-center justify-center text-center">
        EXPLORE THIS SERVICE <FaChevronRight className="inline text-sm" />
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div id="assignment" className="p-8 bg-indigo-900  ">
      <h2 className=" text-left text-white text-7xl pl-16 mb-16">
        OUR SERVICES
      </h2>
      <div className="flex justify-center space-x-4">
        <ServiceCard
          title="Emergency Plumbing Services"
          description="Our plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays."
          icon={<MdOutlinePhonelinkRing />}
        />
        <ServiceCard
          title="Plumbing and Drains"
          description="As the largest plumbing and drain service company, we make thousands of repairs every day."
          icon={<GiTeePipe />}
        />
        <ServiceCard
          title="Water Damage"
          description="Our teams are equipped with state-of-the-art water extraction and cleanup equipment."
          icon={<FaDroplet />}
        />
        <ServiceCard
          title="Water Heaters"
          description="Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters."
          icon={<FaWater />}
        />
      </div>
    </div>
  );
};

export default App;
