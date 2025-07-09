@@ .. @@
 import React, { useState } from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
 import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
 import toast from 'react-hot-toast';
 import PageTransition from '../components/common/PageTransition';
 import { useProfile, useContactForm } from '../hooks/usePortfolioData';
+import SEO from '../components/common/SEO';

 const Contact: React.FC = () => {
 }
@@ .. @@

   return (
     <PageTransition>
+      <SEO 
   )
+        title="Contact Me"
+        description="Get in touch with Fay_salwani for project collaborations, freelance work, or general inquiries. Available for remote work worldwide."
+        keywords="contact fay salwani, hire full stack developer, freelance developer contact, project collaboration"
+      />
       <div className="pt-16">