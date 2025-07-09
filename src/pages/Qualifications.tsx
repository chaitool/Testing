import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { useQualifications } from '../hooks/usePortfolioData';
import SEO from '../components/common/SEO';

const Qualifications: React.FC = () => {
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { qualifications } = useQualifications();

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (statsInView) {
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
    }, [statsInView, end, duration]);

    return (
      <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
        {count}{suffix}
      </span>
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return GraduationCap;
      case 'certification':
        return Award;
      default:
        return GraduationCap;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'degree':
        return 'bg-blue-500';
      case 'certification':
        return 'bg-green-500';
      case 'bootcamp':
        return 'bg-purple-500';
      case 'course':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="Qualifications"
        description="View Fay_salwani's educational background, degrees, and professional certifications in computer science and software development."
        keywords="fay salwani education, computer science degree, developer qualifications, professional certifications"
      />
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
                Qualifications
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My educational journey and professional certifications that have shaped my expertise 
                in software development and technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-dark-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={timelineInView ? "visible" : "hidden"}
              className="max-w-6xl mx-auto"
            >
              <div className="relative overflow-hidden">
                {/* Timeline line */}
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-600 hidden sm:block"></div>

                <div className="space-y-8 sm:space-y-12">
                  {qualifications.map((qualification, index) => {
                    const Icon = getTypeIcon(qualification.type);
                    const colorClass = getTypeColor(qualification.type);

                    return (
                      <motion.div
                        key={qualification.id}
                        variants={cardVariants}
                        className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Timeline dot with animation */}
                        <motion.div 
                          className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${colorClass} rounded-full flex items-center justify-center relative z-10 mx-auto sm:mx-0`}
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(59, 130, 246, 0.4)',
                              '0 0 0 10px rgba(59, 130, 246, 0)',
                              '0 0 0 0 rgba(59, 130, 246, 0)'
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                        </motion.div>

                        {/* Content with enhanced animations */}
                        <motion.div 
                          className="flex-1 bg-gray-50 dark:bg-dark-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg relative overflow-hidden w-full"
                          whileHover={{ 
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                          }}
                        >
                          {/* Animated background gradient */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10 opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          <div className="relative z-10">
                            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-4">
                              <div className="flex-1">
                                <motion.h3 
                                  className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2"
                                  whileHover={{ color: "#2563eb" }}
                                >
                                  {qualification.title}
                                </motion.h3>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                                  <div className="flex items-center space-x-1 flex-wrap">
                                    <MapPin size={14} className="flex-shrink-0" />
                                    <span className="break-words">{qualification.institution}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 flex-wrap">
                                    <Calendar size={14} className="flex-shrink-0" />
                                    <span className="break-words">
                                      {formatDate(qualification.startDate)} - {' '}
                                      {qualification.current 
                                        ? 'Present' 
                                        : qualification.endDate 
                                          ? formatDate(qualification.endDate)
                                          : 'Present'
                                      }
                                    </span>
                                  </div>
                                </div>
                                {qualification.grade && (
                                  <motion.div 
                                    className="inline-block px-2 sm:px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs sm:text-sm rounded-full mb-4"
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    {qualification.grade}
                                  </motion.div>
                                )}
                              </div>

                              {qualification.current && (
                                <motion.span 
                                  className="inline-block px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full mt-2 xl:mt-0"
                                  animate={{ 
                                    scale: [1, 1.05, 1],
                                    opacity: [0.8, 1, 0.8]
                                  }}
                                  transition={{ 
                                    duration: 2,
                                    repeat: Infinity
                                  }}
                                >
                                  In Progress
                                </motion.span>
                              )}
                            </div>

                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                              {qualification.description}
                            </p>

                            {qualification.skills && qualification.skills.length > 0 && (
                              <div className="mb-4 sm:mb-6">
                                <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2 sm:mb-3">
                                  Key Skills Acquired:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {qualification.skills.map((skill: string, skillIndex: number) => (
                                    <motion.span
                                      key={skillIndex}
                                      className="px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs sm:text-sm rounded-full"
                                      whileHover={{ scale: 1.1, y: -2 }}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: skillIndex * 0.1 }}
                                    >
                                      {skill}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                <span className="capitalize">{qualification.type.replace('-', ' ')}</span>
                                {qualification.credentialId && (
                                  <span className="block sm:inline sm:ml-2">
                                    <span className="hidden sm:inline">• </span>
                                    ID: {qualification.credentialId}
                                  </span>
                                )}
                              </div>

                              {qualification.credentialUrl && (
                                <motion.a
                                  href={qualification.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:underline text-xs sm:text-sm"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <span>Verify</span>
                                  <ExternalLink size={14} />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
            >
              <motion.div 
                className="text-center p-4 sm:p-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <AnimatedCounter end={qualifications.length} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Total Qualifications
                </div>
              </motion.div>
              <motion.div 
                className="text-center p-4 sm:p-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <AnimatedCounter end={qualifications.filter(q => q.type === 'certification').length} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Certifications
                </div>
              </motion.div>
              <motion.div 
                className="text-center p-4 sm:p-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <AnimatedCounter end={new Set(qualifications.flatMap(q => q.skills || [])).size} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Skills Acquired
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Qualifications;