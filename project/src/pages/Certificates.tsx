import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ExternalLink, Star } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import LazyImage from '../components/common/LazyImage';
import { useCertificates } from '../hooks/usePortfolioData';

const Certificates: React.FC = () => {
  const [certificatesRef, certificatesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { certificates: allCertificates } = useCertificates();
  const { certificates: featuredCertificates } = useCertificates(true);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isExpiringSoon = (expiryDate?: string) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    return expiry <= sixMonthsFromNow;
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

  // const otherCertificates = allCertificates.filter(cert => !cert.featured);

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
                Certificates
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Professional certifications that validate my expertise and commitment to continuous learning 
                in the ever-evolving field of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Certificates */}
        {featuredCertificates.length > 0 && (
          <section className="py-20 bg-white dark:bg-dark-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Featured Certifications
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  My most significant and recent professional certifications.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
              >
                {featuredCertificates.map((certificate) => (
                  <motion.div
                    key={certificate.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-700 dark:to-dark-600 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-dark-600"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0">
                        <LazyImage
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-16 h-16 rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {certificate.title}
                          </h3>
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {certificate.issuer}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {certificate.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                          <Calendar size={16} />
                          <span>Issued: {formatDate(certificate.issueDate)}</span>
                        </div>
                        {certificate.expiryDate && (
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            isExpiringSoon(certificate.expiryDate)
                              ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                              : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          }`}>
                            Valid until {formatDate(certificate.expiryDate)}
                          </span>
                        )}
                      </div>

                      {certificate.skills && certificate.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {certificate.skills.map((skill: string, skillIndex: number) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        {certificate.credentialId && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            ID: {certificate.credentialId}
                          </span>
                        )}
                        <a
                          href={certificate.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          <span>Verify</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* All Certificates */}
        <section ref={certificatesRef} className="py-20 bg-gray-50 dark:bg-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                All Certifications
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A comprehensive view of my professional development journey.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={certificatesInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {allCertificates.map((certificate) => (
                <motion.div
                  key={certificate.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 overflow-hidden group hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <LazyImage
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {certificate.title}
                      </h3>
                      {certificate.featured && (
                        <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                      {certificate.issuer}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {certificate.description}
                    </p>

                    {certificate.skills && certificate.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {certificate.skills.slice(0, 2).map((skill: string, skillIndex: number) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {certificate.skills.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                            +{certificate.skills.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{formatDate(certificate.issueDate)}</span>
                      </div>
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Verify →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-white dark:bg-dark-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <AnimatedCounter end={allCertificates.length} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Total Certificates
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <AnimatedCounter end={featuredCertificates.length} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Featured
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <AnimatedCounter end={allCertificates.filter(cert => cert.expiryDate && new Date(cert.expiryDate) > new Date()).length} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Active
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <AnimatedCounter end={new Set(allCertificates.flatMap(cert => cert.skills || [])).size} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Skills Validated
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Certificates;