import { useState } from "react";
import AgreementSelection from "./AgreementSelection";
import TruckingAgreement from "./TruckingAgreement";
import CarrierInformationStep from "./CarrierInformationStep";
import NewCarrierPaymentStep from "./NewCarrierPaymentStep";
import FinalSubmissionStep from "./FinalSubmissionStep";
import AgreementSuccessStep from "./AgreementSuccessStep";

export default function CarrierAgreementModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDispatch, setSelectedDispatch] = useState("GO Lane Dispatch");

  const handleClose = () => {
    setStep(1);
    setSelectedDispatch("GO Lane Dispatch");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">
        {step === 1 && (
          <AgreementSelection setStep={setStep} onClose={handleClose} />
        )}

        {step === 2 && (
          <TruckingAgreement
            setStep={setStep}
            selectedDispatch={selectedDispatch}
            setSelectedDispatch={setSelectedDispatch}
          />
        )}

        {step === 3 && <CarrierInformationStep setStep={setStep} />}
        {step === 4 && <NewCarrierPaymentStep setStep={setStep} />}
        {step === 5 && <FinalSubmissionStep setStep={setStep} />}
        {step === 6 && (
          <AgreementSuccessStep setStep={setStep} onClose={handleClose} />
        )}
      </div>
    </div>
  );
}
