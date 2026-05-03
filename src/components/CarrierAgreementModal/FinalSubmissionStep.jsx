import { useState } from "react";

export default function FinalSubmissionStep({ setStep }) {
  const today = new Date().toISOString().split("T")[0];

  const [paymentMethod, setPaymentMethod] = useState("");

  const [formData, setFormData] = useState({
    signature: "",
    printName: "",
    email: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.signature.trim()) {
      newErrors.signature = "Signature is required";
    }

    if (!formData.printName.trim()) {
      newErrors.printName = "Print Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Select payment method";
    }

    if (!formData.bankName.trim()) {
      newErrors.bankName = "Bank Name required";
    }

    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = "Account Number required";
    }

    if (!formData.routingNumber.trim()) {
      newErrors.routingNumber = "Routing Number required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-4">
      <div className="w-full max-w-5xl bg-white rounded-[30px] shadow-2xl overflow-hidden">

        {/* Scroll */}
        <div className="max-h-[88vh] overflow-y-auto px-6 sm:px-10 py-8">

          {/* Back */}
          <button
            onClick={() => setStep(4)}
            className="text-blue-600 text-sm font-medium mb-6 hover:underline"
          >
            ← Back
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#02053D] uppercase">
              Trucking Service Agreement
            </h1>

            <p className="text-gray-500 mt-2">
              Final Agreement Submission
            </p>
          </div>

          {/* Progress */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-10">
            <div className="w-full h-full bg-emerald-500 rounded-full"></div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-[#02053D] mb-8">
            Step 4: Final Submission
          </h2>

          <div className="space-y-8">

            {/* Signature */}
            <div className="space-y-5">

              <div>
                <label className="font-semibold text-[#02053D] block mb-2">
                  Signature *
                </label>

                <input
                  type="text"
                  value={formData.signature}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      signature: e.target.value,
                    })
                  }
                  placeholder="Type your full name as signature"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />

                {errors.signature && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.signature}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold text-[#02053D] block mb-2">
                  Print Name *
                </label>

                <input
                  type="text"
                  value={formData.printName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      printName: e.target.value,
                    })
                  }
                  placeholder="Enter Print Name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />

                {errors.printName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.printName}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold text-[#02053D] block mb-2">
                  Date *
                </label>

                <input
                  type="date"
                  defaultValue={today}
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />
              </div>

              <div>
                <label className="font-semibold text-[#02053D] block mb-2">
                  Your Email *
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter Your Email"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-2xl font-bold text-[#02053D] mb-6">
                How you get paid: *
              </h3>

              <div className="space-y-4 mb-4">

                {["factoring", "ach", "cod"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-3"
                  >
                    <input
                      type="radio"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                      }}
                      className="w-5 h-5 accent-emerald-500"
                    />

                    <span className="capitalize">
                      {method === "ach"
                        ? "ACH Direct Deposit Method"
                        : method === "cod"
                        ? "Cash on Delivery"
                        : "Factoring"}
                    </span>
                  </label>
                ))}

              </div>

              {errors.paymentMethod && (
                <p className="text-red-500 text-sm mb-4">
                  {errors.paymentMethod}
                </p>
              )}

              {/* Bank Fields */}
              <div className="space-y-5">

                <div>
                  <label className="font-semibold text-[#02053D] block mb-2">
                    Bank Name *
                  </label>

                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        bankName: e.target.value,
                      })
                    }
                    placeholder="Enter Your Bank Name"
                    className="w-full border border-gray-300 rounded-xl px-5 py-4"
                  />

                  {errors.bankName && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.bankName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="font-semibold text-[#02053D] block mb-2">
                    Account Number *
                  </label>

                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        accountNumber: e.target.value,
                      })
                    }
                    placeholder="Enter Account Number"
                    className="w-full border border-gray-300 rounded-xl px-5 py-4"
                  />

                  {errors.accountNumber && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.accountNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label className="font-semibold text-[#02053D] block mb-2">
                    Routing Number *
                  </label>

                  <input
                    type="text"
                    value={formData.routingNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        routingNumber: e.target.value,
                      })
                    }
                    placeholder="Enter Routing Number"
                    className="w-full border border-gray-300 rounded-xl px-5 py-4"
                  />

                  {errors.routingNumber && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.routingNumber}
                    </p>
                  )}
                </div>

              </div>
            </div>

            {/* Company Card */}
            <div className="bg-gray-100 border-l-4 border-blue-500 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-[#02053D] mb-4">
                D1 LOGISTICS LLC
              </h4>

              <div className="text-gray-600 space-y-2">
                <p>Address: 10629 PORTAGE RD PORTAGE, MI 49002</p>
                <p>Phone: +1 (201)578-9531</p>
                <p>Date: {today}</p>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button
              onClick={() => setStep(4)}
              className="w-full sm:w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-2xl font-semibold"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                if (!validateForm()) return;
                setStep(6);
              }}
              className="w-full sm:w-1/2 bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-semibold shadow-lg"
            >
              Submit Agreement
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}