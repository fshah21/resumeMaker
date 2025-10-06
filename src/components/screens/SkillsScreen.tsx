import React, { useState } from 'react';
import { Plus, X, Code } from 'lucide-react';

interface SkillsScreenProps {
  data: string[];
  onChange: (data: string[]) => void;
}

const SkillsScreen: React.FC<SkillsScreenProps> = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    onChange(data.filter(item => item !== skill));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const commonSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'SQL',
    'Git', 'Docker', 'AWS', 'Azure', 'MongoDB', 'PostgreSQL', 'HTML/CSS', 'Vue.js',
    'Angular', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'GraphQL', 'REST APIs',
    'Machine Learning', 'Data Analysis', 'Project Management', 'Agile/Scrum'
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Code className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
            <p className="text-gray-600 mt-1">Add your technical and soft skills</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Add a skill
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type a skill and press Enter"
              />
              <button
                onClick={addSkill}
                disabled={!newSkill.trim()}
                className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {data.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Your Skills</h3>
              <div className="flex flex-wrap gap-2">
                {data.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-2 hover:text-blue-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Common Skills (click to add)</h3>
            <div className="flex flex-wrap gap-2">
              {commonSkills.filter(skill => !data.includes(skill)).map((skill) => (
                <button
                  key={skill}
                  onClick={() => onChange([...data, skill])}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-900 mb-2">💡 Skill Tips:</h3>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>• Include both technical and soft skills</li>
              <li>• Focus on skills relevant to your target role</li>
              <li>• List programming languages, frameworks, and tools</li>
              <li>• Add 10-15 skills for optimal impact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsScreen;