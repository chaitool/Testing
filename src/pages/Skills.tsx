@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
 import { Code, Database, Wrench, Users, Brain } from 'lucide-react';
 import PageTransition from '../components/common/PageTransition';
 import { useSkills } from '../hooks/usePortfolioData';
+import SEO from '../components/common/SEO';

 const Skills: React.FC = () => {
 }
@@ .. @@

   return (
     <PageTransition>
+      <SEO 
   )
+        title="My Skills"
+        description="Discover Fay_salwani's technical skills and expertise in frontend, backend, databases, and tools. See proficiency levels in React, Node.js, and more."
+        keywords="fay salwani skills, technical expertise, react developer skills, full stack developer abilities"
+      />
       <div className="pt-16">