import React from 'react';
import { Check, Layout, Grid } from 'lucide-react';
import { ResumeTemplate } from '../../types/Resume';

interface TemplateScreenProps {
  selectedTemplate: ResumeTemplate;
  onChange: (template: ResumeTemplate) => void;
}

const TemplateScreen: React.FC<TemplateScreenProps> = ({ selectedTemplate, onChange }) => {
  const templates = [
    {
      id: 'modern' as ResumeTemplate,
      name: 'Modern Template',
      description: 'Clean, single-column layout with modern typography',
      icon: Layout,
      preview: '/api/placeholder/300/400'
    },
    {
      id: 'compact' as ResumeTemplate,
      name: 'Compact Template',
      description: 'Two-column layout that fits more content',
      icon: Grid,
      preview: '/api/placeholder/300/400'
    },
    {
      id: 'normal' as ResumeTemplate,
      name: 'Normal Template',
      description: 'Clean, single-column layout with modern typography',
      icon: Grid,
      preview: '/api/placeholder/300/400'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Template</h2>
        <p className="text-gray-600 mb-8">Select a design that best represents your professional style</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template) => {
            const Icon = template.icon;
            const isSelected = selectedTemplate === template.id;
            
            return (
              <div
                key={template.id}
                onClick={() => onChange(template.id)}
                className={`relative cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                  isSelected 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className={`w-8 h-8 mr-3 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`} />
                    <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{template.description}</p>
                  
                  <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Icon className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Template Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Template Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <strong>Modern Template:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Single-column layout</li>
                <li>Clean typography</li>
                <li>Emphasis on content</li>
                <li>Professional appearance</li>
              </ul>
            </div>
            <div>
              <strong>Compact Template:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Two-column layout</li>
                <li>Space-efficient design</li>
                <li>Sidebar for skills</li>
                <li>More content per page</li>
              </ul>
            </div>
            <div>
              <strong>Simple Template:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Single-column layout</li>
                <li>Clean typography</li>
                <li>Emphasis on content</li>
                <li>Professional appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateScreen;