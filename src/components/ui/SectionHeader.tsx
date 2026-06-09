import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export const SectionHeader = ({ title, subtitle, align = 'center', children }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h2 className="section-title text-glow">{title}</h2>
      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
      {children}
    </motion.div>
  );
};
