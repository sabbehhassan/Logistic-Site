import { useState } from "react";

export default function FinalSubmissionStep({
  setStep,
  agreementData,
  setAgreementData,
}) {
  const today = new Date().toISOString().split("T")[0];

  const [, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!agreementData.signature?.trim()) {
      newErrors.signature = "Signature is required";
    }

    if (!agreementData.printName?.trim()) {
      newErrors.printName = "Print Name is required";
    }

    if (!agreementData.email?.trim()) {
      newErrors.email = "Email is required";
    }

    if (!agreementData.paymentMethod) {
      newErrors.paymentMethod = "Select payment method";
    }

    if (!agreementData.bankName?.trim()) {
      newErrors.bankName = "Bank Name required";
    }

    if (!agreementData.accountNumber?.trim()) {
      newErrors.accountNumber = "Account Number required";
    }

    if (!agreementData.routingNumber?.trim()) {
      newErrors.routingNumber = "Routing Number required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const finalData = {
      ...agreementData,
      date: today,
    };

    console.log(finalData);

    try {
      const response = await fetch(
        "http://localhost:5000/api/submit-agreement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStep(6);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-4">
      <div className="w-full max-w-5xl bg-white rounded-[30px] shadow-2xl overflow-hidden">

        <div className="max-h-[88vh] overflow-y-auto px-6 sm:px-10 py-8">

          <button
            onClick={() => setStep(4)}
            className="text-blue-600 text-sm font-medium mb-6 hover:underline"
          >
            ← Back
          </button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#02053D] uppercase">
              Trucking Service Agreement
            </h1>

            <p className="text-gray-500 mt-2">
              Final Agreement Submission
            </p>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full mb-10">
            <div className="w-full h-full bg-emerald-500 rounded-full"></div>
          </div>

          <h2 className="text-2xl font-bold text-[#02053D] mb-8">
            Step 4: Final Submission
          </h2>

          <div className="space-y-5">

            {/* Signature */}
            <input
              type="text"
              placeholder="Signature"
              value={agreementData.signature || ""}
              onChange={(e) =>
                setAgreementData({
                  ...agreementData,
                  signature: e.target.value,
                })
              }
              className="w-full border rounded-xl px-5 py-4"
            />

            {/* Print Name */}
            <input
              type="text"
              placeholder="Print Name"
              value={agreementData.printName || ""}
              onChange={(e) =>
                setAgreementData({
                  ...agreementData,
                  printName: e.target.value,
                })
              }
              className="w-full border rounded-xl px-5 py-4"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={agreementData.email || ""}
              onChange={(e) =>
                setAgreementData({
                  ...agreementData,
                  email: e.target.value,
                })
              }
              className="w-full border rounded-xl px-5 py-4"
            />

            {/* Payment */}
            <div className="space-y-3">
              {["factoring", "ach", "cod"].map((method) => (
                <label key={method} className="flex items-center gap-3">
                  <input
                    type="radio"
                    checked={agreementData.paymentMethod === method}
                    onChange={() =>
                      setAgreementData({
                        ...agreementData,
                        paymentMethod: method,
                      })
                    }
                  />

                  <span>{method}</span>
                </label>
              ))}
            </div>

            {/* Bank */}
            <input
              type="text"
              placeholder="Bank Name"
              value={agreementData.bankName || ""}
              onChange={(e) =>
                setAgreementData({
                  ...agreementData,
                  bankName: e.target.value,
                })
              }
              className="w-full border rounded-xl px-5 py-4"
            />

            <input
              type="text"
              placeholder="Account Number"
              value={agreementData.accountNumber || ""}
              onChange={(e) =>
                setAgreementData({
                  ...agreementData,
                  accountNumber: e.target.value,
                })
              }
              className="w-full border rounded-xl px-5 py-4"
            />

            <input
              type="text"
              placeholder="Routing Number"
              value={agreementData.routingNumber || ""}
              onChange={(e) =>
                setAgreementData({
                  ...agreementData,
                  routingNumber: e.target.value,
                })
              }
              className="w-full border rounded-xl px-5 py-4"
            />

          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button
              onClick={() => setStep(4)}
              className="w-full sm:w-1/2 bg-gray-200 py-4 rounded-2xl"
            >
              ← Previous
            </button>

            <button
              onClick={handleSubmit}
              className="w-full sm:w-1/2 bg-emerald-500 text-white py-4 rounded-2xl font-semibold"
            >
              Submit Agreement
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}