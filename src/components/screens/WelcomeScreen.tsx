import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-12 shadow-lg">
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full p-6">
            <FileText className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Resume Builder
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Create a stunning, professional resume in minutes. Our intuitive builder guides you through each step, 
          offering beautiful templates and instant PDF downloads.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-blue-500 font-semibold mb-2">Step 1</div>
            <div className="text-gray-700">Fill in your details</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-teal-500 font-semibold mb-2">Step 2</div>
            <div className="text-gray-700">Choose a template</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-orange-500 font-semibold mb-2">Step 3</div>
            <div className="text-gray-700">Download your resume</div>
          </div>
        </div>
        
        <button
          onClick={onNext}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;