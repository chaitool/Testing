@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
 import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
 import PageTransition from '../components/common/PageTransition';
 import { useQualifications } from '../hooks/usePortfolioData';
+import SEO from '../components/common/SEO';

 const Qualifications: React.FC = () => {
@@ .. @@

   return (
     <PageTransition>
+      <SEO 
+        title="Qualifications"
+        description="View Fay_salwani's educational background, degrees, and professional certifications in computer science and software development."
+        keywords="fay salwani education, computer science degree, developer qualifications, professional certifications"
+      />
       <div className="pt-16">