import React from 'react';

interface SummaryScreenProps {
  data: string;
  onChange: (data: string) => void;
}

const SummaryScreen: React.FC<SummaryScreenProps> = ({ data, onChange }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Summary</h2>
        <p className="text-gray-600 mb-8">
          Write a compelling professional summary that highlights your key achievements and career goals
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Professional Summary
            </label>
            <textarea
              value={data}
              onChange={(e) => onChange(e.target.value)}
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Experienced software engineer with 5+ years of expertise in full-stack development. Proven track record of delivering scalable web applications and leading cross-functional teams. Passionate about clean code, user experience, and continuous learning."
            />
            <div className="mt-2 text-sm text-gray-500">
              {data.length} characters • Aim for 3-5 sentences
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Tips for a great summary:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Highlight your most relevant experience and skills</li>
              <li>• Include specific years of experience or achievements</li>
              <li>• Mention technologies, industries, or specializations</li>
              <li>• Keep it concise but impactful (3-5 sentences)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryScreen;