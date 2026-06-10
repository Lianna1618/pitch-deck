import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { SectionHeader, GlassCard, Button } from '../ui';
import { contactInfo } from '../../data';

export const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: contactInfo.linkedinLabel || 'Lianna',
      href: contactInfo.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: contactInfo.github,
      href: `https://github.com/${contactInfo.github}`,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to discuss your QA needs? Let's connect and explore how I can help your team."
        />

        <div className="grid lg:grid-cols-1 gap-8 lg:gap-12">
          
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <GlassCard className="hover:!border-gold/40">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-white font-medium hover:text-gold transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <GlassCard goldBorder className="mt-8">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Let's Collaborate
              </h3>
              <p className="text-gray-300 mb-4">
                Whether you need QA expertise for your Web3 project, fintech platform, or enterprise application.
              </p>

              <Button
                href={`mailto:${contactInfo.email}`}
                variant="secondary"
                icon={<Mail size={18} />}
              >
                Send Email Directly
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
