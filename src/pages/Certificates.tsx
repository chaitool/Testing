@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
 import { Calendar, ExternalLink, Star } from 'lucide-react';
 import PageTransition from '../components/common/PageTransition';
 import LazyImage from '../components/common/LazyImage';
 import { useCertificates } from '../hooks/usePortfolioData';
+import SEO from '../components/common/SEO';

 const Certificates: React.FC = () => {
@@ .. @@

   return (
     <PageTransition>
+      <SEO 
+        title="Certificates"
+        description="Professional certifications earned by Fay_salwani in software development, cloud computing, and technology. View verified credentials and achievements."
+        keywords="fay salwani certificates, professional certifications, developer credentials, technology certifications"
+      />
       <div className="pt-16">