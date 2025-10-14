import { useState } from 'react';
import { ResumeData, ResumeTemplate, PersonalInfo, Education, Experience, Project } from './types/Resume';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import WelcomeScreen from './components/screens/WelcomeScreen';
import PersonalInfoScreen from './components/screens/PersonalInfoScreen';
import SummaryScreen from './components/screens/SummaryScreen';
import EducationScreen from './components/screens/EducationScreen';
import ProjectsScreen from './components/screens/ProjectsScreen';
import ExperienceScreen from './components/screens/ExperienceScreen';
import SkillsScreen from './components/screens/SkillsScreen';
import TemplateScreen from './components/screens/TemplateScreen';
import PreviewScreen from './components/screens/PreviewScreen';

const STEPS = [
  'Welcome',
  'Personal Info',
  'Summary',
  'Education',
  'Experience',
  'Skills',
  'Projects',
  'Template',
  'Preview'
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>('modern');
  
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: ''
    },
    summary: '',
    education: [],
    experience: [],
    skills: {},
    projects: []
  });

  const updatePersonalInfo = (personalInfo: PersonalInfo) => {
    setResumeData(prev => ({ ...prev, personalInfo }));
  };

  const updateSummary = (summary: string) => {
    setResumeData(prev => ({ ...prev, summary }));
  };

  const updateEducation = (education: Education[]) => {
    setResumeData(prev => ({ ...prev, education }));
  };

  const updateExperience = (experience: Experience[]) => {
    setResumeData(prev => ({ ...prev, experience }));
  };

  const updateSkills = (skills: Record<string, string[]>) => {
    setResumeData(prev => ({ ...prev, skills }));
  };

  const updateProjects = (projects: Project[]) => {
    setResumeData(prev => ({ ...prev, projects }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startOver = () => {
    setCurrentStep(1);
    setSelectedTemplate('modern');
    setResumeData({
      personalInfo: {
        name: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        website: ''
      },
      summary: '',
      education: [],
      experience: [],
      skills: {},
      projects: []
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return true; // Welcome screen
      case 2: // Personal Info
        return !!(resumeData.personalInfo.name && 
                 resumeData.personalInfo.title && 
                 resumeData.personalInfo.email && 
                 resumeData.personalInfo.phone && 
                 resumeData.personalInfo.location);
      case 3: // Summary
        return !resumeData.summary.trim();
      case 4: // Education
        return resumeData.education.length > 0 && 
               resumeData.education.every(edu => edu.degree && edu.institution && edu.startYear && edu.endYear);
      case 5: // Experience
        return resumeData.experience.length > 0 && 
               resumeData.experience.every(exp => exp.title && exp.company && exp.startYear && exp.description);
      case 6: // Skills
        return Object.keys(resumeData.skills).length > 0;
      case 7: // Projects
        return resumeData.projects.length > 0;
      case 8: // Template
        return !!selectedTemplate;
      case 9: // Preview
        return true;
      default:
        return false;
    }
  };

  const renderCurrentScreen = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeScreen onNext={nextStep} />;
      case 2:
        return (
          <PersonalInfoScreen
            data={resumeData.personalInfo}
            onChange={updatePersonalInfo}
          />
        );
      case 3:
        return (
          <SummaryScreen
            data={resumeData.summary}
            onChange={updateSummary}
          />
        );
      case 4:
        return (
          <EducationScreen
            data={resumeData.education}
            onChange={updateEducation}
          />
        );
      case 5:
        return (
          <ExperienceScreen
            data={resumeData.experience}
            onChange={updateExperience}
          />
        );
      case 6:
        return (
          <SkillsScreen
            data={resumeData.skills}
            onChange={updateSkills}
          />
        );
      case 7:
        return (
          <ProjectsScreen
            data={resumeData.projects}
            onChange={updateProjects}
          />
        );
      case 8:
        return (
          <TemplateScreen
            selectedTemplate={selectedTemplate}
            onChange={setSelectedTemplate}
          />
        );
      case 9:
        return (
          <PreviewScreen
            data={resumeData}
            template={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
            onStartOver={startOver}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {currentStep > 1 && currentStep < 8 && (
          <ProgressBar
            currentStep={currentStep}
            totalSteps={STEPS.length}
            steps={STEPS}
          />
        )}
        
        <div className="mb-8">
          {renderCurrentScreen()}
        </div>
        
        {currentStep > 1 && currentStep < 9 && (
          <Navigation
            currentStep={currentStep}
            totalSteps={STEPS.length}
            onNext={nextStep}
            onPrevious={previousStep}
            canProceed={canProceed()}
            isLastStep={currentStep === STEPS.length}
          />
        )}
      </div>
    </div>
  );
}

export default App;