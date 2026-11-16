import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectLightboxProps {
  project: Project | null;
  projectsList: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  projectsList,
  onClose,
  onSelectProject
}) => {
  const { lang } = useLanguage();
  const currentIndex = project ? projectsList.findIndex((p) => p.id === project.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectProject(projectsList[currentIndex - 1]);
    } else {
      onSelectProject(projectsList[projectsList.length - 1]);
    }
  }, [currentIndex, projectsList, onSelectProject]);

  const handleNext = useCallback(() => {
    if (currentIndex < projectsList.length - 1) {
      onSelectProject(projectsList[currentIndex + 1]);
    } else {
      onSelectProject(projectsList[0]);
    }
  }, [currentIndex, projectsList, onSelectProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, handlePrev, handleNext]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0E0E0E]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
      {/* Top Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          className="p-2 border border-[#333333] bg-[#161616] text-[#F2F0EB] hover:border-[#F2F0EB] transition-colors"
          aria-label="Previous vehicle"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="p-2 border border-[#333333] bg-[#161616] text-[#F2F0EB] hover:border-[#F2F0EB] transition-colors"
          aria-label="Next vehicle"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={onClose}
          className="p-2 border border-[#333333] bg-[#161616] text-[#F2F0EB] hover:border-[#B8392D] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Editorial Case Study Container */}
      <div className="relative w-full max-w-5xl bg-[#161616] border border-[#262626] my-auto max-h-[92vh] flex flex-col overflow-y-auto">
        {/* Full-width Photography */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[480px] shrink-0 bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute top-6 left-6">
            <span className="text-xs font-mono uppercase tracking-widest bg-[#161616]/90 border border-[#333333] px-3 py-1 text-[#F2F0EB]">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Case Study Details */}
        <div className="p-8 sm:p-12 space-y-8">
          <div className="space-y-2 border-b border-[#262626] pb-6">
            <div className="flex items-center gap-4 text-xs font-mono text-[#A6A6A2]">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.duration}</span>
              <span>•</span>
              <span className="text-[#B8392D]">{project.finish}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-['Manrope'] font-medium text-[#F2F0EB]">
              {project.vehicle}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#A6A6A2] font-light leading-relaxed">
            {project.description}
          </p>

          {/* Executed Work Checklist */}
          <div className="space-y-4 pt-4 border-t border-[#262626]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F2F0EB] block">
              {lang === 'en' ? 'Executed Refinement Protocol' : 'Durchgeführte Veredelungsschritte'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.servicesPerformed.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A6A6A2] font-light">
                  <span className="w-1.5 h-1.5 bg-[#B8392D] mt-2 shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback Quote */}
          {project.clientFeedback && (
            <div className="border border-[#262626] p-6 bg-[#111111] space-y-3">
              <p className="text-sm italic text-[#F2F0EB] font-light leading-relaxed">
                "{project.clientFeedback.quote}"
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A2] pt-2 border-t border-[#222222]">
                <span className="text-[#F2F0EB]">{project.clientFeedback.author}</span>
                <span>{project.clientFeedback.location}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
