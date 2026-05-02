import { useState } from "react";
import {
  FaBuilding,
  FaTruck,
  FaUserTie,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

import heroBg from "../../assets/images/carrier-hero.jpg";

const CarrierSetup = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepData = [
    {
      title: "Dispatch",
      icon: <FaBuilding />,
    },
    {
      title: "Carrier",
      icon: <FaTruck />,
    },
    {
      title: "Driver",
      icon: <FaUserTie />,
    },
    {
      title: "Agreement",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <section className="bg-[#edf2f7] min-h-screen">

      {/* Hero */}
      <div className="relative h-[350px]">

        <img
          src={heroBg}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center">

          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Carrier Setup Agreement
            </h1>

            <p className="text-gray-200 mt-5 text-sm md:text-lg">
              Complete your onboarding professionally
            </p>
          </div>

        </div>

      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-24">

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">

          {/* Sidebar */}
          <div className="bg-white rounded-[35px] shadow-xl p-8 h-fit sticky top-30">

            <h2 className="text-xl font-bold mb-8">
              Progress
            </h2>

            <div className="space-y-8">

              {stepData.map((item, index) => {
                const stepNumber = index + 1;

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 transition duration-500 ${
                      step === stepNumber
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >

                    <div
                      className={`w-[55px] h-[55px] rounded-2xl flex items-center justify-center text-lg transition-all duration-500 ${
                        step >= stepNumber
                          ? "bg-[#0B7BEA] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-black">
                        Step {stepNumber}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.title}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Progress */}
            <div className="mt-10">

              <div className="flex justify-between text-sm mb-3">
                <span>Completion</span>
                <span>{step * 25}%</span>
              </div>

              <div className="w-full h-[8px] bg-gray-200 rounded-full overflow-hidden">

                <div
                  className="h-full bg-[#0B7BEA] transition-all duration-700"
                  style={{ width: `${step * 25}%` }}
                ></div>

              </div>

            </div>

          </div>

          {/* Form Area */}
          <div className="bg-white rounded-[35px] shadow-xl overflow-hidden">

            {/* Top */}
            <div className="bg-gradient-to-r from-[#0B7BEA] to-[#3fa2ff] px-10 py-8 text-white">

              <h2 className="text-3xl font-bold">
                Broker / Carrier Agreement
              </h2>

              <p className="text-white/80 mt-2 text-sm">
                Fill information carefully to proceed.
              </p>

            </div>

            {/* Content */}
            <div className="p-10">

              {step === 1 && (
                <div className="space-y-10">

                  <SectionTitle title="Dispatch Information" />

                  <AnimatedField label="Dispatch Company Name" />
                  <AnimatedField label="Dispatch Email Address" />
                  <AnimatedField label="Dispatch Phone Number" />
                  <AnimatedField label="Business Address" />

                </div>
              )}

              {step === 2 && (
                <div className="space-y-10">

                  <SectionTitle title="Carrier Information" />

                  <AnimatedField label="Carrier Company Name" />
                  <AnimatedField label="MC Number" />
                  <AnimatedField label="USDOT Number" />
                  <AnimatedField label="Carrier Phone Number" />

                </div>
              )}

              {step === 3 && (
                <div className="space-y-10">

                  <SectionTitle title="Driver Information" />

                  <AnimatedField label="Driver Name" />
                  <AnimatedField label="Driver Phone Number" />
                  <AnimatedField label="Driver Email" />
                  <AnimatedField label="License Number" />

                </div>
              )}

              {step === 4 && (
                <div className="space-y-10">

                  <SectionTitle title="Final Agreement" />

                  <div className="bg-[#f8fbff] border border-[#dbeafe] rounded-3xl p-8">

                    <p className="text-gray-700 leading-8">
                      Please review your agreement carefully before final submission.
                    </p>

                    <label className="flex items-center gap-4 mt-8">

                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-[#0B7BEA]"
                      />

                      <span className="text-sm text-gray-700">
                        I agree to all carrier onboarding terms.
                      </span>

                    </label>

                  </div>

                </div>
              )}

              {/* Buttons */}
              <div className="flex justify-between mt-16">

                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`px-7 py-3 rounded-2xl transition ${
                    step === 1
                      ? "bg-gray-200 text-gray-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FaArrowLeft />
                    Previous
                  </div>
                </button>

                {step < 4 ? (
                  <button
                    onClick={nextStep}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-2xl transition"
                  >
                    <div className="flex items-center gap-2">
                      Next
                      <FaArrowRight />
                    </div>
                  </button>
                ) : (
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl">
                    Submit Agreement
                  </button>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

const SectionTitle = ({ title }) => (
  <div>
    <h3 className="text-3xl font-bold text-black">
      {title}
    </h3>

    <div className="w-[100px] h-[3px] bg-[#0B7BEA] mt-4 rounded-full"></div>
  </div>
);

const AnimatedField = ({ label }) => {
  return (
    <div className="group relative">

      <label className="text-sm font-semibold text-gray-600 transition-all duration-300 group-hover:text-[#0B7BEA]">
        {label}
      </label>

      <div className="relative mt-4">

        <input
          type="text"
          placeholder={`Enter ${label}`}
          className="
            w-full
            border-0
            border-b-2
            border-gray-300
            bg-transparent
            py-4
            text-sm
            outline-none
            transition-all
            duration-500
            focus:border-[#0B7BEA]
            focus:pl-3
            hover:pl-3
          "
        />

        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0B7BEA] transition-all duration-500 group-hover:w-full"></div>

      </div>

    </div>
  );
};

export default CarrierSetup;