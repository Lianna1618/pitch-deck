import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { SectionHeader, GlassCard, Button } from '../ui';
import { contactInfo } from '../../data';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: contactInfo.linkedin, href: `https://linkedin.com/in/${contactInfo.linkedin}` },
    { icon: Github, label: 'GitHub', value: contactInfo.github, href: `https://github.com/${contactInfo.github}` },
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
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
                  className="group"
                >
                  <GlassCard className="hover:!border-gold/40">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-gold transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.a>
              ))}
            </div>

            {/* Additional CTA */}
            <GlassCard goldBorder className="mt-8">
              <h3 className="font-display text-xl font-bold text-white mb-2">Let's Collaborate</h3>
              <p className="text-gray-300 mb-4">
                Whether you need QA expertise for your Web3 project, fintech platform, or enterprise
                application, I'm here to help ensure your software meets the highest quality standards.
              </p>
              <Button href={`mailto:${contactInfo.email}`} variant="secondary" icon={<Mail size={18} />}>
                Send Email Directly
              </Button>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false}>
              <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <Send size={18} />}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
                      />
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
