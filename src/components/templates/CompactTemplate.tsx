import React from 'react';
import { ResumeData } from '../../types/Resume';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

interface CompactTemplateProps {
  data: ResumeData;
}

const CompactTemplate: React.FC<CompactTemplateProps> = ({ data }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-4" style={{ fontFamily: 'Georgia, serif' }}>
  {/* Header */}
  <div className="text-center mb-4">
    <h1 className="text-2xl font-bold mb-0.5">{data.personalInfo.name}</h1>
    <p className="text-gray-700 text-sm">{data.personalInfo.title}</p>
  </div>

  {/* Contact Info */}
  <div className="mb-4 text-center">
    <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
      <div className="flex items-center gap-1">
        <Mail className="w-3 h-3 text-teal-600" />
        <span className="break-all">{data.personalInfo.email}</span>
      </div>
      <div className="flex items-center gap-1">
        <Phone className="w-3 h-3 text-teal-600" />
        <span>{data.personalInfo.phone}</span>
      </div>
      {data.personalInfo.location && (
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-teal-600" />
          <span>{data.personalInfo.location}</span>
        </div>
      )}
      {data.personalInfo.linkedin && (
        <div className="flex items-center gap-1">
          <Linkedin className="w-3 h-3 text-teal-600" />
          <span>LinkedIn</span>
        </div>
      )}
      {data.personalInfo.website && (
        <div className="flex items-center gap-1">
          <Globe className="w-3 h-3 text-teal-600" />
          <span>Portfolio</span>
        </div>
      )}
    </div>
  </div>

  {/* Skills */}
  {data.skills.length > 0 && (
    <div className="mb-4">
      <h2 className="text-md font-semibold mb-1 text-teal-600">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {data.skills.map((skill, index) => (
          <span key={index} className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )}

  {/* Education */}
  {data.education.length > 0 && (
    <div className="mb-4">
      <h2 className="text-md font-semibold mb-1 text-teal-600">Education</h2>
      <div className="space-y-2 text-sm text-gray-700">
        {data.education.map((edu) => (
          <div key={edu.id}>
            <div className="font-medium">{edu.degree}</div>
            <div className="text-gray-600 text-xs">{edu.institution}</div>
            <div className="text-gray-500 text-xs">
              {edu.startYear} - {edu.endYear}
            </div>
            {edu.description && <div className="text-gray-700 text-xs">{edu.description}</div>}
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Summary */}
  {data.summary && (
    <div className="mb-4">
      <h2 className="text-md font-semibold mb-1 text-gray-900 border-b border-gray-300 pb-0.5">
        Professional Summary
      </h2>
      <p className="text-gray-700 text-sm leading-snug">{data.summary}</p>
    </div>
  )}

  {/* Experience */}
  {data.experience.length > 0 && (
    <div className="mb-2">
      <h2 className="text-md font-semibold mb-1 text-gray-900 border-b border-gray-300 pb-0.5">
        Work Experience
      </h2>
      <div className="space-y-2 text-sm text-gray-700">
        {data.experience.map((exp) => (
          <div key={exp.id}>
            <div className="flex justify-between items-start mb-0.5">
              <div>
                <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-teal-600 font-medium text-sm">{exp.company}</p>
              </div>
              <p className="text-gray-500 text-xs">
                {exp.startYear} - {exp.current ? 'Present' : exp.endYear}
              </p>
            </div>
            <div className="leading-snug whitespace-pre-line">{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

  );
};

export default CompactTemplate;
