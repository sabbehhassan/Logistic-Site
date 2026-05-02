import { FaKey, FaAmazon, FaBuilding } from "react-icons/fa";

import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";

const servicesData = [
  {
    icon: <FaKey />,
    image: service1,
    title: "Dedicated Lanes",
    desc: "We offer dependable and consistent trucking solutions for dedicated lanes, delivering seamless and timely service tailored to your route.",
  },
  {
    icon: <FaAmazon />,
    image: service2,
    title: "Amazon Loads",
    desc: "We excel in managing Amazon loads with speed, accuracy, and dependable delivery standards for large-scale logistics.",
  },
  {
    icon: <FaBuilding />,
    image: service3,
    title: "Government Contracts",
    desc: "Reliable logistics services for government projects with secure freight transportation and contract-based solutions.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#efefef] py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-[#0B7BEA] text-2xl md:text-3xl font-bold uppercase">
            Our Services
          </h2>

          <h3 className="text-black text-xl md:text-2xl font-bold mt-3">
            What We Are Offering!
          </h3>

          <div className="w-28 h-0.75bg-[#0B7BEA] mx-auto mt-4"></div>

          <p className="text-gray-700 text-sm md:text-base leading-7 max-w-2xl mx-auto mt-6">
            BNSF Logistic’s Solution’s Broker specializes in transportation,
            storage, and distribution management with dependable logistics solutions.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {servicesData.map((service, index) => (
            <div
              key={index}
              className="text-center"
            >

              {/* Icon */}
              <div className="w-18 h-18nded-full bg-[#0B7BEA] flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-md">
                {service.icon}
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-60 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-black mt-5">
                {service.title}
              </h3>

              <p className="text-gray-700 text-sm leading-7 mt-3 max-w-sm mx-auto">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;