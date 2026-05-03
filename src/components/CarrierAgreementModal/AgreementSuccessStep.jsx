import { CheckCircle2, Sparkles } from "lucide-react";

export default function AgreementSuccessStep({ setStep, onClose }) {
  return (
    <div className="flex justify-center items-center w-full px-4 py-4">
      <div className="w-full max-w-2xl bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">

        <div className="px-6 sm:px-10 py-10 text-center">

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">

              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2
                  size={42}
                  className="text-emerald-500"
                />
              </div>

              <div className="absolute -top-1 -right-1 bg-yellow-100 rounded-full p-1.5">
                <Sparkles
                  size={12}
                  className="text-yellow-500"
                />
              </div>

            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#02053D] mb-3">
            Agreement Submitted
          </h1>

          {/* Message */}
          <p className="text-gray-500 text-sm sm:text-base leading-7 max-w-lg mx-auto">
            Your trucking agreement has been submitted successfully.
            Our logistics team will review your details and contact you shortly.
          </p>

          {/* Info Card */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 mt-8 text-left">

            <h3 className="font-semibold text-[#02053D] text-base mb-4">
              Next Steps
            </h3>

            <div className="space-y-2 text-sm text-gray-600">
              <p>✓ Agreement received successfully</p>
              <p>✓ Verification process started</p>
              <p>✓ Dispatch onboarding review</p>
              <p>✓ Team will contact you shortly</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <button
              onClick={() => setStep(1)}
              className="w-full sm:w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-3 rounded-xl transition"
            >
              Start Again
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-1/2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-3 rounded-xl shadow-md transition"
            >
              Done
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}