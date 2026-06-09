import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Briefcase } from 'lucide-react';
import { SectionHeader } from '../ui';
import { experiences } from '../../data';

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
  isLeft: boolean;
}

const ExperienceCard = ({ experience, index, isLeft }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
    >
      {/* Timeline dot */}
      <div className="absolute top-6 left-0 md:hidden w-4 h-4 bg-gold rounded-full border-4 border-dark z-10" />
      <div className={`hidden md:absolute md:top-6 md:w-4 md:h-4 md:bg-gold md:rounded-full md:border-4 md:border-dark-100 md:z-10 ${isLeft ? 'md:-right-2' : 'md:-left-2'}`} />

      {/* Card */}
      <motion.div
        className="ml-6 md:ml-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300"
      >
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-gold text-sm mb-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1">{experience.company}</h3>
              <p className="text-gray-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {experience.role}
              </p>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gold"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-white/10 pt-4">
                <p className="text-gray-300 mb-4">{experience.description}</p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gold mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-dark-100 text-gray-300 rounded border border-dark-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-gold via-gold/50 to-transparent opacity-20" />

      <div className="section-container">
        <SectionHeader
          title="Experience Timeline"
          subtitle="Overview of QA career progression"
        />

        {/* Mobile Timeline */}
        <div className="md:hidden relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} experience={exp} index={index} isLeft={false} />
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
