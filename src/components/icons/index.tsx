import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedIcon = ({ children, className = '' }: AnimatedIconProps) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
      className={`inline-flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
};
