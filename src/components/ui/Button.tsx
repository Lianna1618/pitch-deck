import { motion } from 'framer-motion';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  download?: boolean;
}

export const Button = ({
  variant = 'primary',
  children,
  icon,
  href,
  download,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark';

  const variants = {
    primary: `${baseStyles} bg-gold text-dark hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30`,
    secondary: `${baseStyles} bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-dark`,
    ghost: `${baseStyles} bg-transparent text-gold hover:bg-gold/10`,
  };

  const content = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={variants[variant] + ' ' + className}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={variants[variant] + ' ' + className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};
