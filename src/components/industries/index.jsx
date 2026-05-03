import {
  FaBars,
  FaGlobeAmericas,
  FaUsers,
  FaKey,
  FaArrowRight,
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
    value: "24/7",
  },
];

const Industries = () => {
  return (
    <section className="bg-gradient-to-b from-[#f4f7fb] to-white py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <span className="bg-[#0B7BEA]/10 text-[#0B7BEA] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Trusted Network
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C39] mt-6 leading-tight">
              Building Strong Partnerships Across Logistics Industry
            </h2>

            <p className="text-gray-600 text-base leading-8 mt-6 max-w-xl">
              We work alongside leading logistics brands and transportation
              partners to ensure fast, secure, and scalable delivery solutions.
            </p>

            <button className="mt-8 bg-[#0B7BEA] hover:bg-[#0864bc] text-white px-7 py-3 rounded-xl text-sm font-medium transition flex items-center gap-3">
              Explore Network
              <FaArrowRight />
            </button>

          </div>

          {/* Right Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-500 p-6 flex items-center justify-center group hover:-translate-y-2"
              >

                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="h-[70px] object-contain grayscale group-hover:grayscale-0 transition duration-500"
                />

              </div>
            ))}

          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-24">

          <div className="text-center">

            <span className="text-[#0B7BEA] uppercase tracking-wider font-semibold text-sm">
              Performance Metrics
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mt-4">
              Trusted Results That Speak For Us
            </h3>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {stats.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
              >

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B7BEA]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative p-8 text-center">

                  {/* Icon */}
                  <div className="w-[75px] h-[75px] mx-auto rounded-2xl bg-[#0B7BEA] flex items-center justify-center text-white text-2xl shadow-lg group-hover:rotate-6 transition duration-500">
                    {item.icon}
                  </div>

                  {/* Number */}
                  <h3 className="text-4xl font-bold text-[#0B1C39] mt-6">
                    {item.value}
                  </h3>

                  {/* Title */}
                  <p className="text-gray-600 text-sm mt-3">
                    {item.title}
                  </p>

                  {/* Hover Line */}
                  <div className="w-0 h-[3px] bg-[#0B7BEA] mx-auto mt-5 group-hover:w-16 transition-all duration-500 rounded-full"></div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Industries;