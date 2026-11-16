import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import type { Project } from '../types';
import { ProjectLightbox } from '../components/projects/ProjectLightbox';
import { ArrowUpRight, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsPage: React.FC = () => {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: lang === 'en' ? 'All Archive' : 'Alle Referenzen' },
    { id: 'ppf', label: 'PPF' },
    { id: 'keramik', label: lang === 'en' ? 'Ceramic Quartz' : 'Keramik' },
    { id: 'lackkorrektur', label: lang === 'en' ? 'Paint Correction' : 'Lackkorrektur' },
    { id: 'supercar', label: 'Supercars' },
    { id: 'interior', label: lang === 'en' ? 'Interior' : 'Innenraum' },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
      const matchesSearch =
        p.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.finish.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      {/* Header */}
      <section className="py-20 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-3">
            02 // {lang === 'en' ? 'Archive & Case Studies' : 'Archiv & Dokumentation'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] max-w-3xl leading-tight">
            {lang === 'en' ? (
              <>
                Documented results. <br />
                <span className="text-[#A6A6A2] font-light">Precision in every reflection.</span>
              </>
            ) : (
              <>
                Dokumentierte Perfektion. <br />
                <span className="text-[#A6A6A2] font-light">Präzision in jeder Reflexion.</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A2] font-light max-w-2xl mt-6 leading-relaxed">
            {lang === 'en'
              ? 'Explore our documented refinements from Porsche 911 GT3 RS Weissach to Mercedes-AMG GT Black Series.'
              : 'Detaillierte Falldokumentationen von Porsche 911 GT3 RS bis Mercedes-AMG GT Black Series.'}
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 border-b border-[#262626] bg-[#111111] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-mono tracking-tight cursor-pointer transition-colors border ${
                  activeFilter === f.id
                    ? 'border-[#B8392D] bg-[#161616] text-[#F2F0EB]'
                    : 'border-[#262626] text-[#A6A6A2] hover:border-[#444444] hover:text-[#F2F0EB]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search vehicle...' : 'Fahrzeug suchen...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] placeholder-[#777777] focus:outline-none focus:border-[#B8392D]"
            />
          </div>
        </div>
      </section>

      {/* Considered Editorial Grid (Mixed image sizes) */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8">
        {filteredProjects.length === 0 ? (
          <div className="p-16 border border-[#262626] bg-[#111111] text-center space-y-4">
            <p className="text-sm font-mono text-[#A6A6A2]">
              {lang === 'en' ? 'No vehicles match your search filter.' : 'Keine Fahrzeuge gefunden.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 border border-[#B8392D] text-[#F2F0EB] text-xs font-mono uppercase"
            >
              {lang === 'en' ? 'Reset Filters' : 'Filter zurücksetzen'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            {filteredProjects.map((project, idx) => {
              // Asymmetrical width assignment: first is 8 cols, second is 4 cols, third is 6 cols, etc.
              const colSpan = idx % 3 === 0 ? 'lg:col-span-8' : idx % 3 === 1 ? 'lg:col-span-4' : 'lg:col-span-6';
              const aspect = idx % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]';

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`${colSpan} group cursor-pointer border border-[#262626] bg-[#111111] overflow-hidden flex flex-col justify-between`}
                >
                  <div className={`relative ${aspect} overflow-hidden bg-black`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest bg-[#161616]/90 border border-[#333333] px-2.5 py-1 text-[#F2F0EB]">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A2]">
                      <span>{project.year}</span>
                      <span>{project.duration}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-['Manrope'] font-medium text-[#F2F0EB] group-hover:text-[#B8392D] transition-colors">
                      {project.vehicle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A6A6A2] font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#777777] truncate max-w-[180px]">{project.finish}</span>
                      <span className="text-[#F2F0EB] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {lang === 'en' ? 'Open Case' : 'Fallstudie'} <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        projectsList={projectsData}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </div>
  );
};
