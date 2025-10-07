import React from 'react';
import { Plus, X, GraduationCap } from 'lucide-react';
import { Project } from '../../types/Resume';

interface ProjectsScreenProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ data, onChange }) => {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      link: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      description: ''
    };
    onChange([...data, newProject]);
  };

  const removeProject = (id: string) => {
    onChange(data.filter(item => item.id !== id));
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    onChange(data.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <GraduationCap className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            <p className="text-gray-600 mt-1">Add your projects</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-6 relative">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Projects {index + 1}
                </h3>
                {data.length > 1 && (
                  <button
                    onClick={() => removeProject(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => updateProject(item.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Link *
                  </label>
                  <input
                    type="text"
                    value={item.link}
                    onChange={(e) => updateProject(item.id, 'link', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="University of California, Berkeley"
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
                      onChange={(e) => updateProject(item.id, 'startMonth', e.target.value)}
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
                      onChange={(e) => updateProject(item.id, 'startYear', e.target.value)}
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
                      onChange={(e) => updateProject(item.id, 'endMonth', e.target.value)}
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
                      onChange={(e) => updateProject(item.id, 'endYear', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  value={item.description || ''}
                  onChange={(e) => updateProject(item.id, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="GPA: 3.8/4.0, Summa Cum Laude, Relevant coursework..."
                />
              </div>
            </div>
          ))}
          
          <button
            onClick={addProject}
            className="w-full flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;