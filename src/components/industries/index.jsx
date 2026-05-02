import {
  FaBars,
  FaGlobeAmericas,
  FaUsers,
  FaKey,
} from "react-icons/fa";

import jbHunt from "../../assets/images/jb-hunt.png";
import oldDominion from "../../assets/images/old-dominion.png";
import southernFreight from "../../assets/images/southern-freight.png";
import fedex from "../../assets/images/fedex.png";

const partners = [
  { image: jbHunt, alt: "JB Hunt" },
  { image: oldDominion, alt: "Old Dominion" },
  { image: southernFreight, alt: "Southern Freight" },
  { image: fedex, alt: "FedEx" },
  { image: jbHunt, alt: "JB Hunt" },
];

const stats = [
  {
    icon: <FaBars />,
    title: "Shipments Monthly",
    value: "+15,000",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Countries Served",
    value: "+120",
  },
  {
    icon: <FaUsers />,
    title: "Client Satisfaction",
    value: "98%",
  },
  {
    icon: <FaKey />,
    title: "Support Availability",
    value: "24h",
  },
];

const Industries = () => {
  return (
    <section className="bg-[#efefef] py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-3xl md:text-4xl font-bold uppercase text-black">
            Trusted By Industry Leaders
          </h2>

          <div className="mt-3">
            <span className="relative inline-block text-[#0B7BEA] text-2xl md:text-3xl font-bold uppercase">
              Our Partners
              <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#0B7BEA]"></span>
            </span>
          </div>

          <p className="text-gray-700 text-sm md:text-base mt-6 max-w-2xl mx-auto">
            We collaborate with the best in the industry to deliver exceptional service.
          </p>

        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mt-14">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={partner.image}
                alt={partner.alt}
                className="max-h-[180px] object-contain hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] rounded-xl border border-gray-300 py-8 px-6 text-center shadow-sm hover:shadow-md transition duration-300"
            >

              {/* Icon */}
              <div className="w-[65px] h-[65px] mx-auto rounded-full bg-[#0B7BEA] flex items-center justify-center text-white text-2xl mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-base font-medium text-black mb-3">
                {item.title}
              </h4>

              {/* Value */}
              <h3 className="text-3xl font-bold text-black">
                {item.value}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Industries;