import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, MessageCircle, Globe, FileCode, ExternalLink } from 'lucide-react';
import { SectionHeader, GlassCard } from '../ui';
import { projects } from '../../data';
import type { Project } from '../../types';

const categoryConfig = {
  mobile: { icon: Smartphone, label: 'Mobile Apps', color: 'from-blue-500/20 to-blue-500/5' },
  'mini-app': { icon: MessageCircle, label: 'TG Mini Apps', color: 'from-purple-500/20 to-purple-500/5' },
  web: { icon: Globe, label: 'Web Apps', color: 'from-green-500/20 to-green-500/5' },
  'smart-contract': { icon: FileCode, label: 'Smart Contracts', color: 'from-orange-500/20 to-orange-500/5' },
};

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>;

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <section id="projects" className="section-padding bg-dark-100">
      <div className="section-container">
        <SectionHeader
          title="Featured Projects"
          subtitle="Showcasing QA work across Mobile Apps, TG Mini Apps, Web Applications, and Smart Contracts"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gold text-dark'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-gold'
            }`}
          >
            All Projects
          </button>
          {categories.map((cat) => {
            const config = categoryConfig[cat];
            const Icon = config.icon;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gold text-dark'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-gold'
                }`}
              >
                <Icon className="w-4 h-4" />
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const config = categoryConfig[project.category];
              const Icon = config.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group w-full text-left"
                  >
                    <GlassCard className="h-full overflow-hidden p-0 hover:border-gold/40">
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                        {/* Category Badge */}
                        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-br ${config.color} backdrop-blur-sm border border-white/10`}>
                          <Icon className="w-3.5 h-3.5 text-gold" />
                          <span className="text-xs font-medium text-white">{config.label}</span>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs bg-dark-100 text-gray-400 rounded border border-dark-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* View Details */}
                        <div className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </GlassCard>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-100 border border-white/10 rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10">
                    {(() => {
                      const config = categoryConfig[selectedProject.category];
                      const Icon = config.icon;
                      return (
                        <>
                          <Icon className="w-4 h-4 text-gold" />
                          <span className="text-sm font-medium text-white">{config.label}</span>
                        </>
                      );
                    })()}
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-display text-lg font-semibold text-gold mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedProject.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-display text-lg font-semibold text-gold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-dark-200 text-gray-300 rounded-lg border border-dark-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
