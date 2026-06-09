import { motion } from 'framer-motion';
import { Bug, Cpu, Globe, Database, Wrench, Box, Zap } from 'lucide-react';
import { SectionHeader, GlassCard } from '../ui';
import { skillCategories } from '../../data';

const categoryIcons = {
  Testing: Bug,
  Automation: Cpu,
  API: Globe,
  Databases: Database,
  Tools: Wrench,
  Web3: Box,
  Performance: Zap,
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-100">
      <div className="section-container">
        <SectionHeader
          title="Technical Skills"
          subtitle="Comprehensive expertise across testing domains and technologies"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = categoryIcons[category.title as keyof typeof categoryIcons] || Bug;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gold/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.3 + skillIndex * 0.05 }}
                        className="px-3 py-1.5 text-sm bg-dark-100 text-gray-300 rounded-lg border border-dark-200 hover:border-gold/30 hover:text-gold transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
