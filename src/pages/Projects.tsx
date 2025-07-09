@@ .. @@
 import React, { useState } from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
 import { Github, ExternalLink, Calendar, Filter } from 'lucide-react';
 import PageTransition from '../components/common/PageTransition';
 import LazyImage from '../components/common/LazyImage';
 import { useProjects } from '../hooks/usePortfolioData';
+import SEO from '../components/common/SEO';

 const Projects: React.FC = () => {
@@ .. @@

   return (
     <PageTransition>
+      <SEO 
+        title="My Projects"
+        description="Explore Fay_salwani's portfolio of web applications, mobile apps, and development projects. See my work with React, Node.js, and modern technologies."
+        keywords="fay salwani projects, web development portfolio, react projects, full stack applications"
+      />
       <div className="pt-16">