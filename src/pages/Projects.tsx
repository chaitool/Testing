import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar, Filter } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import LazyImage from '../components/common/LazyImage';
import { useProjects } from '../hooks/usePortfolioData';
import SEO from '../components/common/SEO';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { projects: allProjects } = useProjects();

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'api', label: 'APIs' },
    { id: 'other', label: 'Other' }
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

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
      <SEO 
        title="My Projects"
        description="Explore Fay_salwani's portfolio of web applications, mobile apps, and development projects. See my work with React, Node.js, and modern technologies."
        keywords="fay salwani projects, web development portfolio, react projects, full stack applications"
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
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A collection of projects that showcase my skills and passion for development. 
                Each project represents a unique challenge and learning experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Filter size={20} />
                <span className="font-medium">Filter by:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={projectsRef} className="py-20 bg-gray-50 dark:bg-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
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
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
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

                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{new Date(project.startDate).getFullYear()}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'completed' 
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : project.status === 'in-progress'
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        }`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>

                      <div className="flex items-center justify-center space-x-3">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                            aria-label="View source code"
                          >
                            <Github size={20} className="mr-2" />
                            Code
                          </a>
                        )}
                        {(project.links.demo || project.links.live) && (
                          <a
                            href={project.links.demo || project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                            aria-label="View live demo"
                          >
                            <ExternalLink size={20} className="mr-2" />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;