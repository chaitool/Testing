@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
 import { Award, Calendar, MapPin, Heart } from 'lucide-react';
 import PageTransition from '../components/common/PageTransition';
 import LazyImage from '../components/common/LazyImage';
+import SEO from '../components/common/SEO';

 const About: React.FC = () => {
@@ .. @@

   return (
     <PageTransition>
+      <SEO 
+        title="About Me"
+        description="Learn more about Fay_salwani - Full Stack Developer & UI/UX Designer. Discover my journey, values, and passion for creating exceptional digital experiences."
+        keywords="about fay salwani, full stack developer story, ui ux designer background, developer journey"
+      />
       <div className="pt-16">