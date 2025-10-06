import React from 'react';
import { ResumeData } from '../../types/Resume';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
        <h1 className="text-4xl font-bold mb-2">{data.personalInfo.name}</h1>
        <p className="text-xl text-blue-100 mb-4">{data.personalInfo.title}</p>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            {data.personalInfo.email}
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            {data.personalInfo.phone}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {data.personalInfo.location}
          </div>
          {data.personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Portfolio
            </div>
          )}
        </div>
      </div>
      
      <div className="p-8">
        {/* Summary */}
        {data.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>
        )}
        
        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Work Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {exp.startYear} - {exp.current ? 'Present' : exp.endYear}
                    </p>
                  </div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 text-sm mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;