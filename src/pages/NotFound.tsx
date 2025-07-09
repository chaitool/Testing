@@ .. @@
 import React from 'react';
 import { Link } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import { Home, ArrowLeft } from 'lucide-react';
 import PageTransition from '../components/common/PageTransition';
+import SEO from '../components/common/SEO';

 const NotFound: React.FC = () => {
   return (
     <PageTransition>
+      <SEO 
   )
 }
+        title="Page Not Found"
+        description="The page you're looking for doesn't exist. Return to Fay_salwani's portfolio homepage to explore projects and skills."
+        keywords="404 error, page not found, fay salwani portfolio"
+      />
       <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">