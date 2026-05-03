import {
  FaStar,
  FaHandshake,
  FaShieldAlt,
  FaArrowRight,
  FaTruckMoving,
  FaGlobe,
  FaWarehouse,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import heroBg from "../../assets/images/about-hero.jpg";
import storyImg from "../../assets/images/about-story.jpg";
import missionImg from "../../assets/images/about-mission.jpg";
const navLinks = [
    { name: "Contact", path: "/contact" },
  ];

const About = () => {
  return (
    <section className="bg-[#f4f6f8] overflow-hidden">

      {/* Hero */}
      <div className="relative h-[520px] md:h-[600px]">

        <img
          src={heroBg}
          alt="About Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-6xl mx-auto px-6 w-full">

            <div className="max-w-3xl">

              <span className="bg-[#0B7BEA] text-white px-4 py-2 rounded-full text-sm tracking-wide uppercase">
                About Our Company
              </span>

              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-6">
                Logistics Solutions Built For Modern Business
              </h1>

              <p className="text-gray-200 text-base md:text-lg leading-8 mt-6 max-w-2xl">
                We provide reliable logistics, freight, warehousing, and transportation services globally.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Stats */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: <FaTruckMoving />,
              number: "15K+",
              label: "Monthly Shipments",
            },
            {
              icon: <FaGlobe />,
              number: "120+",
              label: "Countries Covered",
            },
            {
              icon: <FaWarehouse />,
              number: "98%",
              label: "Client Satisfaction",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-500"
            >

              <div className="w-[65px] h-[65px] mx-auto rounded-2xl bg-[#0B7BEA] flex items-center justify-center text-white text-2xl">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-black mt-5">
                {item.number}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Story */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">

            <img
              src={storyImg}
              alt="Story"
              className="rounded-3xl w-full h-[450px] object-cover shadow-lg"
            />

            <div className="absolute -bottom-8 -right-8 bg-[#0B7BEA] text-white p-6 rounded-2xl shadow-lg hidden md:block">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm mt-1">
                Years Experience
              </p>
            </div>

          </div>

          <div>

            <span className="text-[#0B7BEA] uppercase font-semibold tracking-wide text-sm">
              Our Story
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3">
              Building Trust Through Logistics Excellence
            </h2>

            <p className="text-gray-700 leading-8 text-sm md:text-base mt-6">
              BNSF Logistics Services connects businesses with dependable freight
              carriers and supply chain solutions.
            </p>

            <p className="text-gray-700 leading-8 text-sm md:text-base mt-5">
              We focus on secure transportation, optimized shipping, and scalable
              logistics operations that help businesses grow.
            </p>

            <button className="mt-8 bg-red-600 text-white px-7 py-3 rounded-xl text-sm hover:bg-[#0864bc] transition">
              Learn More
            </button>

          </div>

        </div>

      </div>

      {/* Mission */}
      <div className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-[#0B7BEA] uppercase font-semibold tracking-wide text-sm">
              Mission & Vision
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3">
              Delivering Smarter Logistics Worldwide
            </h2>

            <p className="text-gray-700 leading-8 text-sm md:text-base mt-6">
              Our mission is to simplify logistics while maintaining high-quality
              service and global transportation efficiency.
            </p>

            <div className="space-y-5 mt-8">

              {[
                {
                  icon: <FaStar />,
                  title: "Excellence",
                  desc: "Providing premium logistics service quality.",
                },
                {
                  icon: <FaHandshake />,
                  title: "Integrity",
                  desc: "Transparency and honesty in operations.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Reliability",
                  desc: "Dependable shipping and freight delivery.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                >

                  <div className="w-[55px] h-[55px] rounded-xl bg-[#0B7BEA] flex items-center justify-center text-white text-lg flex-shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div>

            <img
              src={missionImg}
              alt="Mission"
              className="rounded-3xl w-full h-[450px] object-cover shadow-lg"
            />

          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="bg-[#0B7BEA] py-20 px-6">

        <div className="max-w-5xl mx-auto text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready To Optimize Your Logistics Operations?
          </h2>

          <p className="text-white/80 text-sm md:text-base mt-6 max-w-2xl mx-auto leading-8">
            Let’s discuss your transportation and shipping needs today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button className="bg-white text-[#0B7BEA] px-7 py-3 rounded-xl font-medium hover:bg-gray-100 transition flex items-center gap-2">
              <Link to="/contact" >Contact Us</Link>
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;