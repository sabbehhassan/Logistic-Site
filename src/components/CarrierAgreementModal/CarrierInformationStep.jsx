import { useState } from "react";

export default function CarrierInformationStep({ setStep }) {
  const [carrierType, setCarrierType] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const [formData, setFormData] = useState({
    carrierName: "",
    companyName: "",
    mcDot: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const services = [
    "Dedicated Lane Setup - $475 (Refundable after first delivery)",
    "TWIC Card Application - $360 (Same-day processing)",
    "Trailer Rental (3 months) - $500",
    "Factoring Setup - $250 (Same-day registration)",
    "Insurance Assistance - $399",
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.carrierName.trim()) {
      newErrors.carrierName = "Carrier Name is required";
    }

    if (!formData.mcDot.trim()) {
      newErrors.mcDot = "MC / DOT is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!carrierType) {
      newErrors.carrierType = "Carrier Type is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-4">
      <div className="w-full max-w-5xl bg-white rounded-[30px] shadow-2xl overflow-hidden">

        {/* Scrollable Area */}
        <div className="max-h-[88vh] overflow-y-auto px-6 sm:px-10 py-8">

          {/* Back Button */}
          <button
            onClick={() => setStep(2)}
            className="text-blue-600 text-sm sm:text-base font-medium mb-6 hover:underline"
          >
            ← Back
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#02053D] uppercase">
              Trucking Service Agreement
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Carrier Information & Services Setup
            </p>
          </div>

          {/* Progress */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
            <div className="w-[55%] h-full bg-emerald-500 rounded-full"></div>
          </div>

          {/* Form */}
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
                  value={formData.carrierName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      carrierName: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  Company Name (if applicable)
                </label>

                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      companyName: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* MC DOT */}
              <div>
                <label className="block font-semibold text-[#02053D] mb-2">
                  MC Number * | DOT Number *
                </label>

                <input
                  type="text"
                  placeholder="Enter Carrier MC or DOT"
                  value={formData.mcDot}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mcDot: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  value={carrierType}
                  onChange={(e) => setCarrierType(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

          {/* New Carrier Content */}
          {carrierType === "new" && (
            <>
              {/* Purpose */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#02053D] mb-4">
                  Purpose of Agreement
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  This Agreement outlines logistics setup services.
                </p>

                <ul className="list-disc pl-6 text-gray-600 space-y-2 leading-8">
                  <li>Dedicated freight lanes</li>
                  <li>Dispatch assistance</li>
                  <li>Trailer rental</li>
                  <li>TWIC support</li>
                  <li>Insurance setup</li>
                  <li>Factoring registration</li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#02053D] mb-6">
                  Select Services With Fees
                </h2>

                <div className="space-y-4">
                  {services.map((service, index) => (
                    <label
                      key={index}
                      className="flex items-start gap-4 border border-gray-200 rounded-2xl p-4 hover:bg-gray-50 cursor-pointer transition"
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="mt-1 w-5 h-5 accent-emerald-500"
                      />

                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button
              onClick={() => setStep(2)}
              className="w-full sm:w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 rounded-2xl transition"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                if (!validateForm()) return;

                if (carrierType === "new") {
                  setStep(4);
                } else if (carrierType === "old") {
                  setStep(5);
                }
              }}
              className="w-full sm:w-1/2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-2xl shadow-lg transition"
            >
              Next →
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}