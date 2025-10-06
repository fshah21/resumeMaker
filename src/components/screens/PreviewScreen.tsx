import React, { useRef } from 'react';
import { Download, RotateCcw, Eye } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { ResumeData, ResumeTemplate } from '../../types/Resume';
import ModernTemplate from '../templates/ModernTemplate';
import CompactTemplate from '../templates/CompactTemplate';

interface PreviewScreenProps {
  data: ResumeData;
  template: ResumeTemplate;
  onTemplateChange: (template: ResumeTemplate) => void;
  onStartOver: () => void;
}

const PreviewScreen: React.FC<PreviewScreenProps> = ({
  data,
  template,
  onTemplateChange,
  onStartOver
}) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    if (!resumeRef.current) return;

    // Clone the resume
    const element = resumeRef.current.cloneNode(true) as HTMLElement;

    // Temporarily apply full width & remove scaling for clean capture
    element.style.transform = "scale(1)";
    element.style.width = "100%";
    element.style.maxWidth = "none";
    element.style.margin = "0";
    element.style.padding = "20px";
    element.style.background = "white";

    // Append to body temporarily (so html2pdf can read it correctly)
    document.body.appendChild(element);

    const opt = {
      margin: [0.2, 0.2],
      filename: `${data.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        document.body.removeChild(element);
      });
  };

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'compact':
        return <CompactTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Eye className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Preview & Download</h2>
              <p className="text-gray-600 mt-1">Your resume is ready!</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={onStartOver}
              className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Start Over
            </button>
            
            <button
              onClick={downloadPDF}
              className="flex items-center px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
          </div>
        </div>
        
        <div className="flex gap-4 mb-6">
          <div className="text-sm text-gray-600">Template:</div>
          <div className="flex gap-2">
            <button
              onClick={() => onTemplateChange('modern')}
              className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
                template === 'modern'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Modern
            </button>
            <button
              onClick={() => onTemplateChange('compact')}
              className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
                template === 'compact'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Compact
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-8 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <div ref={resumeRef} className="transform scale-75 origin-top">
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewScreen;