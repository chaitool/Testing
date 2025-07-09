import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useProfile, useSettings } from '../../hooks/usePortfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { settings } = useSettings();
  const { profile } = useProfile();

  const socialLinks = [
    { 
      icon: Github, 
      href: profile.socialLinks?.github || 'https://github.com', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: profile.socialLinks?.linkedin || 'https://linkedin.com', 
      label: 'LinkedIn' 
    },
    { 
      icon: Twitter, 
      href: profile.socialLinks?.twitter || 'https://twitter.com', 
      label: 'Twitter' 
    },
    { 
      icon: Mail, 
      href: `mailto:${profile.email}`, 
      label: 'Email' 
    }
  ];

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              {settings.siteName}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {profile.footerBio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} {settings.siteName}. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 sm:mt-0">
              Made with ❤️ and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;