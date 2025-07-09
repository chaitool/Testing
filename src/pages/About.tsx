import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, MapPin, Heart } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import LazyImage from '../components/common/LazyImage';
import SEO from '../components/common/SEO';

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });

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

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = React.useState(0);
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    React.useEffect(() => {
      if (inView) {
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
    }, [inView, end, duration]);

    return (
      <span ref={ref} className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">
        {count}{suffix}
      </span>
    );
  };

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'I believe in delivering nothing but the best, paying attention to every detail and always striving for perfection.'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and so do I. I constantly update my skills and stay current with industry trends.'
    },
    {
      icon: MapPin,
      title: 'Global Perspective',
      description: 'Having worked with clients worldwide, I understand diverse needs and cultural nuances in digital solutions.'
    },
    {
      icon: Calendar,
      title: 'Timely Delivery',
      description: 'I respect deadlines and understand the importance of delivering projects on time without compromising quality.'
    }
  ];

  return (
    <PageTransition>
      <SEO 
        title="About Me"
        description="Learn more about Fay_salwani - Full Stack Developer & UI/UX Designer. Discover my journey, values, and passion for creating exceptional digital experiences."
        keywords="about fay salwani, full stack developer story, ui ux designer background, developer journey"
      />
      <div className="pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants} className="space-y-8">
                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white">
                  About Me
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate developer who loves creating digital experiences that make a difference. 
                  With a background in both technical development and design, I bring a unique perspective 
                  to every project I work on.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Experience</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <AnimatedCounter end={3} suffix="+ Years" />
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Specialization</h3>
                    <p className="text-gray-600 dark:text-gray-400">Full Stack Development</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                    <p className="text-gray-600 dark:text-gray-400">Computer Science</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                  <LazyImage
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Developer at work"
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* My Story Section */}
        <section ref={storyRef} className="py-20 bg-white dark:bg-dark-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white text-center mb-12"
              >
                My Story
              </motion.h2>

              <div className="space-y-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <motion.p variants={itemVariants}>
                  My journey into the world of programming began during my college years when I first 
                  encountered HTML and CSS. What started as curiosity quickly turned into passion as I 
                  discovered the power of creating something from nothing using just code.
                </motion.p>

                <motion.p variants={itemVariants}>
                  Over the years, I've had the privilege of working on diverse projects ranging from 
                  small business websites to large-scale enterprise applications. Each project has 
                  taught me something new and helped me grow both as a developer and as a problem solver.
                </motion.p>

                <motion.p variants={itemVariants}>
                  What drives me most is the ability to solve real-world problems through technology. 
                  Whether it's building a user-friendly interface that enhances user experience or 
                  developing a robust backend system that handles complex business logic, I find joy 
                  in every aspect of the development process.
                </motion.p>

                <motion.p variants={itemVariants}>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community through 
                  blog posts and mentoring.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-20 bg-gray-50 dark:bg-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  My Values
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  These core principles guide my work and interactions with clients and colleagues.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;