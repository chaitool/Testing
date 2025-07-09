import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import LazyImage from '../components/common/LazyImage';
import TypewriterText from '../components/common/TypewriterText';
import SEO from '../components/common/SEO';
import { useProfile, useProjects } from '../hooks/usePortfolioData';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuredRef, featuredInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const { profile } = useProfile();
  const { projects: featuredProjects } = useProjects(true);

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (aboutInView) {
        let startTime: number;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [aboutInView, end, duration]);

    return (
      <span className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">
        {count}{suffix}
      </span>
    );
  };

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

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (

    <PageTransition>
      <SEO 
        title="Home"
        description="Welcome to Fay_salwani's portfolio - Full Stack Developer & UI/UX Designer specializing in React, Node.js, and modern web technologies."
        keywords="fay salwani, full stack developer, ui ux designer, react developer, node.js, portfolio"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Text Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                <motion.div variants={itemVariants} className="space-y-4">
                  <motion.h1 
                    variants={textVariants}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 dark:text-white leading-tight"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Hi, I'm{' '}
                    <motion.span 
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {profile.name}
                    </motion.span>
                  </motion.h1>

                  {/* 
                    */}
                 <motion.p 
                  variants={textVariants}
                  className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300"
                >
                  <TypewriterText
                    texts={profile.title}
                    speed={100}
                    deleteSpeed={50}
                    delayBetweenTexts={2000}
                    loop={true}
                  />
                </motion.p>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  {profile.homeBio}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-6 lg:px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors group"
                  >
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a
                    href={profile.resumeUrl}
                    className="inline-flex items-center justify-center px-6 lg:px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:text-white transition-colors"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download My Resume
                  </a>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex space-x-4 justify-center lg:justify-start"
                >
                  {[
                    { icon: Github, href: profile.socialLinks.github, label: 'GitHub' },
                    { icon: Linkedin, href: profile.socialLinks.linkedin, label: 'LinkedIn' },
                    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' }
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 shadow-md hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Profile Image */}
              <motion.div
                variants={itemVariants}
                className="relative order-first lg:order-last flex justify-center"
              >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  {/* Animated background layers */}
                  <div className="absolute inset-0 rounded-full">
                    {/* Outer rotating gradient ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 p-1"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full rounded-full bg-white dark:bg-dark-900"></div>
                    </motion.div>
                    
                    {/* Inner pulsing glow */}
                    <motion.div
                      className="absolute inset-2 rounded-full bg-gradient-to-r from-primary-400/30 to-secondary-400/30 blur-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Floating particles - responsive sizing */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-400 rounded-full"
                        style={{
                          top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                          left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                        }}
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0.4, 1, 0.4],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 2 + i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Profile image */}
                  <div className="relative z-10 w-full h-full p-3 sm:p-4">
                    <LazyImage
                      src={profile.image}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick About Section */}
        <section ref={aboutRef} className="py-20 bg-white dark:bg-dark-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.h2 
                variants={textVariants}
                className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white"
              >
                <motion.span
                  animate={{
                    color: ['#1f2937', '#2563eb', '#1f2937'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="dark:text-white"
                >
                  About Me
                </motion.span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {profile.aboutBio}
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
              >
                {[
                  { number: 50, label: 'Projects Completed', suffix: '+' },
                  { number: 3, label: 'Years Experience', suffix: '+' },
                  { number: 100, label: 'Client Satisfaction', suffix: '%' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="mb-2">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                >
                  Learn More About Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section ref={featuredRef} className="py-20 bg-gray-50 dark:bg-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={featuredInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4 mb-12">
                <motion.h2 
                  variants={textVariants}
                  className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white"
                >
                  <motion.span
                    animate={{
                      color: ['#1f2937', '#2563eb', '#1f2937'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="dark:text-white"
                  >
                    Featured Projects
                  </motion.span>
                </motion.h2>
                <motion.div 
                  variants={textVariants}
                  className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300"
                >
                  <TypewriterText
                    texts={[
                      'Full Stack Developer',
                      'UI/UX Designer',
                      'Problem Solver',
                      'Tech Enthusiast'
                    ]}
                    speed={100}
                    deleteSpeed={50}
                    delayBetweenTexts={2000}
                    loop={true}
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {featuredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
                    whileHover={{ y: -5 }}
                  >
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5">
                      <div className="w-full h-full bg-white dark:bg-dark-800 rounded-xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="aspect-video overflow-hidden rounded-t-xl">
                        <LazyImage
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech: string) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <Link
                          to={`/projects`}
                          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                        >
                          View Project →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="text-center mt-12">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                >
                  View All Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;