import { useState, useCallback } from 'react';
import { 
  profileData, 
  projectsData, 
  skillsData, 
  qualificationsData, 
  certificatesData, 
  settingsData 
} from '../data/portfolio';

// Types for better type safety
export interface Profile {
  name: string;
  title: string[];
  bio: string;
  homeBio: string;
  aboutBio: string;
  email: string;
  phone: string;
  address: string;
  image: string;
  resumeUrl: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
    website: string;
  };
  location: {
    lat: number;
    lng: number;
  };
  mapEmbedUrl: string;
  footerBio?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    live?: string;
  };
  featured: boolean;
  category: string;
  status: string;
  startDate: string;
  endDate?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
  color: string;
}

// Custom hooks for portfolio data with proper state management
export const useProfile = () => {
  const [profile, setProfile] = useState<Profile>(profileData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProfile = useCallback((updates: Partial<Profile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  }, []);

  const refreshProfile = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call - in real app, this would fetch from API
      await new Promise(resolve => setTimeout(resolve, 500));
      setProfile(profileData);
    } catch (err) {
      setError('Failed to load profile data');
    } finally {
      setLoading(false);
    }
  }, []);

  return { profile, loading, error, updateProfile, refreshProfile };
};

export const useProjects = (featured?: boolean) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    if (featured) {
      return projectsData.filter(project => project.featured);
    }
    return projectsData;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filterProjects = useCallback((category: string) => {
    setLoading(true);
    setTimeout(() => {
      if (category === 'all') {
        setProjects(featured ? projectsData.filter(p => p.featured) : projectsData);
      } else {
        const filtered = projectsData.filter(project => 
          project.category === category && (featured ? project.featured : true)
        );
        setProjects(filtered);
      }
      setLoading(false);
    }, 300);
  }, [featured]);

  const refreshProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProjects(featured ? projectsData.filter(p => p.featured) : projectsData);
    } catch (err) {
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  }, [featured]);

  return { projects, loading, error, filterProjects, refreshProjects };
};

export const useSkills = (category?: string) => {
  const [skills, setSkills] = useState<Skill[]>(() => {
    if (category && category !== 'all') {
      return skillsData.filter(skill => skill.category === category);
    }
    return skillsData;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filterSkills = useCallback((newCategory: string) => {
    setLoading(true);
    setTimeout(() => {
      if (newCategory === 'all') {
        setSkills(skillsData);
      } else {
        setSkills(skillsData.filter(skill => skill.category === newCategory));
      }
      setLoading(false);
    }, 200);
  }, []);

  const refreshSkills = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setSkills(category && category !== 'all' 
        ? skillsData.filter(skill => skill.category === category)
        : skillsData
      );
    } catch (err) {
      setError('Failed to load skills');
    } finally {
      setLoading(false);
    }
  }, [category]);

  return { skills, loading, error, filterSkills, refreshSkills };
};

export const useQualifications = () => {
  const [qualifications, setQualifications] = useState(qualificationsData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshQualifications = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      setQualifications(qualificationsData);
    } catch (err) {
      setError('Failed to load qualifications');
    } finally {
      setLoading(false);
    }
  }, []);

  return { qualifications, loading, error, refreshQualifications };
};

export const useCertificates = (featured?: boolean) => {
  const [certificates, setCertificates] = useState(() => {
    if (featured) {
      return certificatesData.filter(cert => cert.featured);
    }
    return certificatesData;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshCertificates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      setCertificates(featured 
        ? certificatesData.filter(cert => cert.featured)
        : certificatesData
      );
    } catch (err) {
      setError('Failed to load certificates');
    } finally {
      setLoading(false);
    }
  }, [featured]);

  return { certificates, loading, error, refreshCertificates };
};

export const useSettings = () => {
  const [settings, setSettings] = useState(settingsData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateSettings = useCallback((updates: Partial<typeof settingsData>) => {
    setSettings(prev => ({ ...prev, ...updates }));
  }, []);

  const refreshSettings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      setSettings(settingsData);
    } catch (err) {
      setError('Failed to load settings');
    } finally {
      setLoading(false);
    }
  }, []);

  return { settings, loading, error, updateSettings, refreshSettings };
};

// Contact form hook with email functionality
export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      return { success: true, message: result.message || 'Message sent successfully!' };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
};

// Analytics hook for tracking user interactions
export const useAnalytics = () => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    // In production, integrate with analytics service like Google Analytics, Mixpanel, etc.
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, properties);
    }
    
    // Example integration:
    // gtag('event', eventName, properties);
    // mixpanel.track(eventName, properties);
  }, []);

  const trackPageView = useCallback((pageName: string) => {
    trackEvent('page_view', { page: pageName });
  }, [trackEvent]);

  const trackProjectView = useCallback((projectId: string, projectTitle: string) => {
    trackEvent('project_view', { project_id: projectId, project_title: projectTitle });
  }, [trackEvent]);

  const trackContactFormSubmit = useCallback(() => {
    trackEvent('contact_form_submit');
  }, [trackEvent]);

  const trackResumeDownload = useCallback(() => {
    trackEvent('resume_download');
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackProjectView,
    trackContactFormSubmit,
    trackResumeDownload
  };
};