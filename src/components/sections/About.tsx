import { motion } from 'framer-motion';
import { SectionHeader, GlassCard, SkillBadge } from '../ui';
import { aboutHighlights } from '../../data';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-dark">
      <div className="section-container">
        <SectionHeader
          title="About Me"
          subtitle="QA Engineer dedicated to delivering flawless digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false} className="mb-8">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 5 years of experience in Quality Assurance, I specialize in ensuring the reliability,
                performance, and stability of Web3, trading, and enterprise applications. My expertise includes
                manual testing, basic test automation, API testing, and smart contract validation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I have contributed to QA processes for blockchain startups, trading platforms, and enterprise
                software companies, consistently supporting high-quality releases and reducing production
                issues through well-structured testing strategies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My approach combines technical precision with strong collaboration skills, enabling smooth
                communication between QA and development teams while maintaining high quality standards
                across the software development lifecycle.
              </p>
            </GlassCard>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-display text-lg font-semibold text-white mb-4">Key Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {aboutHighlights.map((skill, index) => (
                  <SkillBadge key={skill} name={skill} delay={index * 0.05} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Side content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <GlassCard goldBorder>
              <h4 className="font-display text-lg font-semibold text-gold mb-3">Focus</h4>
              <p className="text-gray-300">
                Delivering bug-free software through meticulous testing, innovative automation,
                and continuous improvement of QA processes.
              </p>
            </GlassCard>

            <GlassCard goldBorder>
              <h4 className="font-display text-lg font-semibold text-gold mb-3">Approach</h4>
              <p className="text-gray-300">
                Combining analytical thinking with creative problem-solving to identify edge cases
                and ensure comprehensive test coverage across all scenarios.
              </p>
            </GlassCard>

            <GlassCard goldBorder>
              <h4 className="font-display text-lg font-semibold text-gold mb-3">Value</h4>
              <p className="text-gray-300">
                Reducing dev costs through early bug detection, improving user experience,
                and ensuring confident releases through rigorous QA.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
