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
      <div className="text-black p-4 text-center">
        {/* NAME */}
        <h1 className="text-3xl font-bold mb-2 uppercase">
          {data.personalInfo.name}
        </h1>

        {/* CONTACT INFO */}
       <p className="text-sm text-black-100 mb-2">
        <span className="font-semibold">Mobile:</span> {data.personalInfo.phone} |{" "}
        <span className="font-semibold">Email:</span> {data.personalInfo.email}
      </p>

        {/* LINKS */}
        <div className="flex justify-center items-center gap-1 text-sm">
          {data.personalInfo.linkedin && (
            <a
              href={data.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 underline hover:text-blue-800 font-semibold"
            >
              LinkedIn
            </a>
          )}
          {data.personalInfo.linkedin && data.personalInfo.website && <span>|</span>}
          {data.personalInfo.website && (
            <a
              href={data.personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 underline hover:text-blue-800 font-semibold"
            >
              Portfolio
            </a>
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
        
        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 pb-2 uppercase">
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-black-600 font-medium">{edu.institution}</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}
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

         {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 pb-2 uppercase">
              Work Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                      <p className="text-black-600 font-medium">{exp.title}</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {exp.startMonth} {exp.startYear} - {exp.current ? 'Present' : exp.endMonth + ' ' + exp.endYear}
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
        
        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 pb-2 uppercase">
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