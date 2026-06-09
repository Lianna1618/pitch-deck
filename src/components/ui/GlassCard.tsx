import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  goldBorder?: boolean;
}

export const GlassCard = ({ children, className = '', hover = true, goldBorder = false }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`
        ${goldBorder ? 'bg-gold/10 border border-gold/20' : 'bg-white/5 border border-white/10'}
        backdrop-blur-md rounded-2xl p-6 shadow-xl
        transition-all duration-300
        ${hover ? 'hover:border-gold/30 hover:shadow-gold/10' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
