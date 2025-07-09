import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Users, Brain } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { useSkills } from '../hooks/usePortfolioData';

const Skills: React.FC = () => {
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { skills } = useSkills();

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'bg-blue-500',
      value: 'frontend'
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'bg-green-500',
      value: 'backend'
    },
    {
      icon: Database,
      title: 'Database',
      color: 'bg-purple-500',
      value: 'database'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      color: 'bg-orange-500',
      value: 'tools'
    },
    {
      icon: Brain,
      title: 'Soft Skills',
      color: 'bg-pink-500',
      value: 'soft-skills'
    },
    {
      icon: Users,
      title: 'Other',
      color: 'bg-gray-500',
      value: 'other'
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
                My Skills
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A comprehensive overview of my technical expertise and professional capabilities. 
                I'm constantly learning and evolving with the latest technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 bg-white dark:bg-dark-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              className="space-y-16"
            >
              {skillCategories.map((category, categoryIndex) => {
                const categorySkills = skills.filter(skill => skill.category === category.value);
                
                if (categorySkills.length === 0) return null;

                return (
                  <motion.div
                    key={categoryIndex}
                    variants={itemVariants}
                    className="space-y-8"
                  >
                    <div className="flex items-center space-x-4 mb-8">
                      <div className={`p-3 rounded-lg ${category.color}`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h2>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                        {categorySkills.length}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {categorySkills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.id}
                          className="bg-gray-50 dark:bg-dark-700 p-6 rounded-xl"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center space-x-3">
                              <div 
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: skill.color }}
                              />
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {skill.name}
                              </h3>
                            </div>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          
                          <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-3">
                            <motion.div
                              className="h-3 rounded-full transition-all duration-300"
                              style={{ backgroundColor: skill.color }}
                              initial={{ width: 0 }}
                              animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Skills;