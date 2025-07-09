import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import PageTransition from '../components/common/PageTransition';
import { useProfile, useContactForm } from '../hooks/usePortfolioData';

const Contact: React.FC = () => {
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { profile } = useProfile();
  const { sendMessage, loading } = useContactForm();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      toast.error('Name must be at least 2 characters long');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 5) {
      toast.error('Subject must be at least 5 characters long');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast.error('Message must be at least 10 characters long');
      return;
    }

    try {
      const result = await sendMessage({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim()
      });

      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      description: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone?.replace(/\D/g, '') || ''}`,
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: profile.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(profile.address)}`,
      description: 'Available for remote work'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Get map display method
  const getMapDisplay = () => {
    // Priority 1: Custom embed URL
    if (profile.mapEmbedUrl && profile.mapEmbedUrl.trim()) {
      return {
        type: 'embed',
        url: profile.mapEmbedUrl.trim()
      };
    }
    
    // Priority 2: Coordinates fallback
    if (profile.location?.lat && profile.location?.lng) {
      return {
        type: 'coordinates',
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d${profile.location.lng}!3d${profile.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`
      };
    }
    
    // Priority 3: No map
    return { type: 'none' };
  };

  const mapDisplay = getMapDisplay();

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Have a project in mind or just want to chat? I'd love to hear from you. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-white dark:bg-dark-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={cardVariants}
                  className="group bg-gray-50 dark:bg-dark-700 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '2px' }}
                  >
                    <div className="w-full h-full bg-gray-50 dark:bg-dark-700 rounded-xl"></div>
                  </motion.div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <info.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                      whileHover={{ color: "#2563eb" }}
                    >
                      {info.title}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2 break-words"
                      whileHover={{ scale: 1.05 }}
                    >
                      {info.value}
                    </motion.p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section ref={formRef} className="py-20 bg-gray-50 dark:bg-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <motion.div 
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 relative overflow-hidden"
                  whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.h2 
                      className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6"
                      animate={{
                        color: ['#1f2937', '#2563eb', '#1f2937'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Send Message
                    </motion.h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            minLength={2}
                            maxLength={50}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-all"
                            placeholder="Your name"
                          />
                        </motion.div>
                        
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-all"
                            placeholder="your.email@example.com"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          minLength={5}
                          maxLength={100}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-all"
                          placeholder="What's this about?"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          minLength={10}
                          maxLength={1000}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-all resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Interactive Map */}
                <motion.div 
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="aspect-video">
                    {mapDisplay.type !== 'none' ? (
                      <iframe
                        src={mapDisplay.url}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl"
                        title="Location Map"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          </motion.div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {profile.address}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Response Time Info */}
                <motion.div 
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Response Time
                  </h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Clock className="w-5 h-5 text-green-500" />
                      </motion.div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">
                          Usually within 24 hours
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          I try to respond to all messages quickly
                        </p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      </motion.div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">
                          Available for freelance work
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Open to new opportunities and collaborations
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* FAQ */}
                <motion.div 
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Questions
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        question: "What's your hourly rate?",
                        answer: "It depends on the project scope. Let's discuss your needs!"
                      },
                      {
                        question: "Do you work remotely?",
                        answer: "Yes, I work with clients worldwide remotely."
                      },
                      {
                        question: "What's your availability?",
                        answer: "Currently accepting new projects for Q1 2024."
                      }
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {faq.question}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;