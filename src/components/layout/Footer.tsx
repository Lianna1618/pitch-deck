import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { navItems, contactInfo } from '../../data';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-100 border-t border-white/10">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block font-display font-bold text-2xl text-gold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              LT<span className="text-white">.</span>
            </motion.a>
            <p className="text-gray-400 text-sm mb-4">
              QA Engineer specializing in Web3, Fintech, and enterprise application testing.
            </p>
            <div className="flex gap-3">
              <motion.a
                href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-gold/30 hover:text-gold transition-all"
                whileHover={{ y: -2 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`https://github.com/${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-gold/30 hover:text-gold transition-all"
                whileHover={{ y: -2 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-gold/30 hover:text-gold transition-all"
                whileHover={{ y: -2 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Lianna Tavadyan. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-gold/10 border border-gold/30 rounded-lg text-gold hover:bg-gold hover:text-dark transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
