import React, { useState } from 'react';
import { Plus, X, Code } from 'lucide-react';

interface SkillsScreenProps {
  data: Record<string, string[]>; // key = category name, value = array of skills
  onChange: (data: Record<string, string[]>) => void;
}

const SkillsScreen: React.FC<SkillsScreenProps> = ({ data, onChange }) => {
  const [newCategory, setNewCategory] = useState('');
  const [newSkill, setNewSkill] = useState<Record<string, string>>({});

  const addCategory = () => {
    const category = newCategory.trim();
    if (category && !data[category]) {
      onChange({ ...data, [category]: [] });
      setNewCategory('');
    }
  };

  const removeCategory = (category: string) => {
    const updated = { ...data };
    delete updated[category];
    onChange(updated);
  };

  const addSkill = (category: string) => {
    const skill = newSkill[category]?.trim();
    if (skill && !data[category]?.includes(skill)) {
      const updatedCategory = data[category] ? [...data[category], skill] : [skill];
      onChange({ ...data, [category]: updatedCategory });
      setNewSkill({ ...newSkill, [category]: '' });
    }
  };

  const removeSkill = (category: string, skill: string) => {
    onChange({
      ...data,
      [category]: data[category].filter(s => s !== skill)
    });
  };

  const handleSkillKeyPress = (e: React.KeyboardEvent, category: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(category);
    }
  };

  const handleCategoryKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCategory();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="flex items-center mb-6">
          <Code className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
            <p className="text-gray-600 mt-1">Add categories and skills dynamically</p>
          </div>
        </div>

        {/* Add new category */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            onKeyPress={handleCategoryKeyPress}
            placeholder="Add a new category"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={addCategory}
            className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Categories & Skills */}
        {Object.keys(data).length > 0 && (
          <div className="space-y-6">
            {Object.keys(data).map((category) => (
              <div key={category} className="space-y-2 border-b border-gray-200 pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                  <button
                    onClick={() => removeCategory(category)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Add skill to category */}
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newSkill[category] || ''}
                    onChange={(e) => setNewSkill({ ...newSkill, [category]: e.target.value })}
                    onKeyPress={(e) => handleSkillKeyPress(e, category)}
                    placeholder={`Add a skill to ${category}`}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => addSkill(category)}
                    disabled={!newSkill[category]?.trim()}
                    className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Display skills */}
                {data[category]?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {data[category].map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(category, skill)}
                          className="ml-2 hover:text-blue-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsScreen;
