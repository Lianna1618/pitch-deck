import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

export const SkillBadge = ({ name, delay = 0 }: SkillBadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.5)' }}
      className="inline-flex items-center px-4 py-2 bg-dark-100 rounded-lg text-sm font-medium text-gray-300 border border-dark-200 transition-all duration-300 hover:text-gold cursor-default"
    >
      {name}
    </motion.span>
  );
};
