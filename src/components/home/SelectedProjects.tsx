import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectLightbox } from '../projects/ProjectLightbox';
import type { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export const SelectedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { lang } = useLanguage();

  // Asymmetrical highlight: Project 1 (Large left feature), Project 2 & 3 (Stacked right)
  const p1 = projectsData[0]; // Porsche 992 GT3 RS
  const p2 = projectsData[1]; // BMW M3 Touring
  const p3 = projectsData[2]; // AMG GT Black Series

  return (
    <section className="bg-[#161616] text-[#F2F0EB] py-24 sm:py-32 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#262626] pb-6 mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6A2] block">
              04 // {lang === 'en' ? 'Selected Portfolio' : 'Ausgewählte Arbeiten'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#F2F0EB]">
              {lang === 'en' ? 'Documented Case Studies' : 'Fahrzeug-Dokumentationen'}
            </h2>
          </div>
          <Link
            to="/projekte"
            className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-wider text-[#A6A6A2] hover:text-[#F2F0EB] transition-colors flex items-center gap-1.5"
          >
            <span>{lang === 'en' ? 'Full Archive' : 'Gesamtes Archiv'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mixed Editorial Grid (Asymmetrical composition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Left Feature (7 cols) */}
          <div
            onClick={() => setSelectedProject(p1)}
            className="lg:col-span-7 group cursor-pointer border border-[#262626] bg-[#111111] overflow-hidden flex flex-col justify-between"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-black">
              <img
                src={p1.image}
                alt={p1.vehicle}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-[#161616]/90 border border-[#333333] px-2.5 py-1 text-[#F2F0EB]">
                  {p1.categoryLabel}
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A2]">
                <span>{p1.year}</span>
                <span>{p1.duration}</span>
              </div>
              <h3 className="text-2xl font-['Manrope'] font-medium text-[#F2F0EB] group-hover:text-[#B8392D] transition-colors">
                {p1.vehicle}
              </h3>
              <p className="text-sm text-[#A6A6A2] font-light leading-relaxed line-clamp-2">
                {p1.description}
              </p>
              <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                <span className="text-[#777777]">{p1.finish}</span>
                <span className="text-[#F2F0EB] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {lang === 'en' ? 'Inspect Case Study' : 'Fallstudie öffnen'} <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {/* Top smaller item */}
            <div
              onClick={() => setSelectedProject(p2)}
              className="group cursor-pointer border border-[#262626] bg-[#111111] overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black relative">
                <img
                  src={p2.image}
                  alt={p2.vehicle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-[#161616]/90 border border-[#333333] px-2 py-0.5 text-[#F2F0EB]">
                    {p2.categoryLabel}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A2]">
                  <span>{p2.year}</span>
                  <span>{p2.duration}</span>
                </div>
                <h4 className="text-lg font-['Manrope'] font-medium text-[#F2F0EB] group-hover:text-[#B8392D] transition-colors">
                  {p2.vehicle}
                </h4>
                <p className="text-xs text-[#A6A6A2] font-light line-clamp-1">
                  {p2.finish}
                </p>
              </div>
            </div>

            {/* Bottom smaller item */}
            <div
              onClick={() => setSelectedProject(p3)}
              className="group cursor-pointer border border-[#262626] bg-[#111111] overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black relative">
                <img
                  src={p3.image}
                  alt={p3.vehicle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-[#161616]/90 border border-[#333333] px-2 py-0.5 text-[#F2F0EB]">
                    {p3.categoryLabel}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A2]">
                  <span>{p3.year}</span>
                  <span>{p3.duration}</span>
                </div>
                <h4 className="text-lg font-['Manrope'] font-medium text-[#F2F0EB] group-hover:text-[#B8392D] transition-colors">
                  {p3.vehicle}
                </h4>
                <p className="text-xs text-[#A6A6A2] font-light line-clamp-1">
                  {p3.finish}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        projectsList={projectsData}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
};
