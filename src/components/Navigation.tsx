import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  canProceed: boolean;
  isLastStep?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  canProceed,
  isLastStep = false
}) => {
  console.log(totalSteps);
  return (
    <div className="flex justify-between items-center pt-8">
      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="flex items-center px-6 py-3 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </button>
      
      {!isLastStep && (
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg hover:from-blue-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      )}
    </div>
  );
};

export default Navigation;