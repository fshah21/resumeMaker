import React from 'react';
import { Plus, X, Briefcase } from 'lucide-react';
import { Experience } from '../../types/Resume';

interface ExperienceScreenProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

const ExperienceScreen: React.FC<ExperienceScreenProps> = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      title: '',
      company: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      description: '',
      current: false
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (id: string) => {
    onChange(data.filter(item => item.id !== id));
  };

  const handleDescriptionChange = (id: string, value: string) => {
    // split lines
    const lines = value.split('\n');
    // add bullet if not present
    const newValue = lines
    .map(line => {
      const trimmed = line.trim();
      if (trimmed === '•') return ''; // remove line if only a bullet
      return trimmed.startsWith('•') || trimmed === '' ? line : `• ${line}`;
    })
    .join('\n');
    updateExperience(id, 'description', newValue);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    onChange(data.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
            <p className="text-gray-600 mt-1">Add your professional experience</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-6 relative">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Experience {index + 1}
                </h3>
                {data.length > 1 && (
                  <button
                    onClick={() => removeExperience(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => updateExperience(item.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Senior Software Engineer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    value={item.company}
                    onChange={(e) => updateExperience(item.id, 'company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tech Company Inc."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={item.startMonth || ''}
                      onChange={(e) => updateExperience(item.id, 'startMonth', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Month</option>
                      {[
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                      ].map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                    
                    <input
                      type="text"
                      value={item.startYear}
                      onChange={(e) => updateExperience(item.id, 'startYear', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Year"
                    />
                  </div>
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={item.endMonth || ''}
                      onChange={(e) => updateExperience(item.id, 'endMonth', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Month</option>
                      {[
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                      ].map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                    
                    <input
                      type="text"
                      value={item.endYear}
                      onChange={(e) => updateExperience(item.id, 'endYear', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={item.current}
                    onChange={(e) => {
                      updateExperience(item.id, 'current', e.target.checked);
                      if (e.target.checked) {
                        updateExperience(item.id, 'endYear', '');
                      }
                    }}
                    className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  I currently work here
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  value={item.description}
                  onChange={(e) => handleDescriptionChange(item.id, e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          ))}
          
          <button
            onClick={addExperience}
            className="w-full flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceScreen;