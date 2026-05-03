import { useState } from "react";

export default function CarrierInformationStep({
  setStep,
  agreementData,
  setAgreementData,
}) {
  const [errors, setErrors] = useState({});

  const services = [
    "Dedicated Lane Setup - $475 (Refundable after first delivery)",
    "TWIC Card Application - $360 (Same-day processing)",
    "Trailer Rental (3 months) - $500",
    "Factoring Setup - $250 (Same-day registration)",
    "Insurance Assistance - $399",
  ];

  const toggleService = (service) => {
    const updatedServices = agreementData.selectedServices?.includes(service)
      ? agreementData.selectedServices.filter((item) => item !== service)
      : [...(agreementData.selectedServices || []), service];

    setAgreementData({
      ...agreementData,
      selectedServices: updatedServices,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!agreementData.carrierName?.trim()) {
      newErrors.carrierName = "Carrier Name is required";
    }

    if (!agreementData.mcDot?.trim()) {
      newErrors.mcDot = "MC / DOT is required";
    }

    if (!agreementData.phone?.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!agreementData.carrierType) {
      newErrors.carrierType = "Carrier Type is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-4">
      <div className="w-full max-w-5xl bg-white rounded-[30px] shadow-2xl overflow-hidden">

        <div className="max-h-[88vh] overflow-y-auto px-6 sm:px-10 py-8">

          <button
            onClick={() => setStep(2)}
            className="text-blue-600 text-sm sm:text-base font-medium mb-6 hover:underline"
          >
            ← Back
          </button>

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#02053D] uppercase">
              Trucking Service Agreement
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Carrier Information & Services Setup
            </p>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
            <div className="w-[55%] h-full bg-emerald-500 rounded-full"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#02053D] mb-6">
              Step 2: Carrier Information
            </h2>

            <div className="space-y-5">

              {/* Carrier Name */}
              <div>
                <label className="block font-semibold text-[#02053D] mb-2">
                  Carrier Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter Carrier Name"
                  value={agreementData.carrierName || ""}
                  onChange={(e) =>
                    setAgreementData({
                      ...agreementData,
                      carrierName: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />

                {errors.carrierName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.carrierName}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block font-semibold text-[#02053D] mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={agreementData.companyName || ""}
                  onChange={(e) =>
                    setAgreementData({
                      ...agreementData,
                      companyName: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />
              </div>

              {/* MC DOT */}
              <div>
                <label className="block font-semibold text-[#02053D] mb-2">
                  MC Number / DOT Number *
                </label>

                <input
                  type="text"
                  placeholder="Enter MC / DOT"
                  value={agreementData.mcDot || ""}
                  onChange={(e) =>
                    setAgreementData({
                      ...agreementData,
                      mcDot: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />

                {errors.mcDot && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.mcDot}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold text-[#02053D] mb-2">
                  Phone Number *
                </label>

                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={agreementData.phone || ""}
                  onChange={(e) =>
                    setAgreementData({
                      ...agreementData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Carrier Type */}
              <div>
                <label className="block font-semibold text-[#02053D] mb-2">
                  Carrier Type *
                </label>

                <select
                  value={agreementData.carrierType || ""}
                  onChange={(e) =>
                    setAgreementData({
                      ...agreementData,
                      carrierType: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                >
                  <option value="">Select Carrier Type</option>
                  <option value="new">New Carrier</option>
                  <option value="old">Old Carrier</option>
                </select>

                {errors.carrierType && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.carrierType}
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* New Carrier */}
          {agreementData.carrierType === "new" && (
            <div>
              <h2 className="text-2xl font-bold text-[#02053D] mb-6">
                Select Services
              </h2>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <label
                    key={index}
                    className="flex items-start gap-4 border border-gray-200 rounded-2xl p-4 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={agreementData.selectedServices?.includes(service)}
                      onChange={() => toggleService(service)}
                      className="mt-1"
                    />

                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button
              onClick={() => setStep(2)}
              className="w-full sm:w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 rounded-2xl"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                if (!validateForm()) return;

                if (agreementData.carrierType === "new") {
                  setStep(4);
                } else {
                  setStep(5);
                }
              }}
              className="w-full sm:w-1/2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-2xl"
            >
              Next →
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}