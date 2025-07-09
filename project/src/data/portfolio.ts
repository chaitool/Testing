// Portfolio data - Edit this file to update your portfolio content
export const profileData = {
  name: 'Fay_salwani',
  title: ['Full Stack Developer','UI/UX Designer'],
  bio: 'Passionate developer who transforms ideas into exceptional digital experiences through clean code and innovative solutions.',
  homeBio: 'I create beautiful, functional, and user-friendly digital experiences. Passionate about clean code, innovative solutions, and continuous learning in the ever-evolving world of technology.',
  aboutBio: 'With over 3 years of experience in full-stack development, I specialize in creating scalable web applications and intuitive user interfaces. My journey began with a curiosity for problem-solving through code, and has evolved into a passion for building digital solutions that make a real impact. I believe in writing clean, maintainable code and staying current with the latest technologies and best practices.',
  footerBio: 'Full-stack developer dedicated to creating innovative digital solutions that bridge the gap between design and functionality.',
  email: 'faysalwani9086@gmail.com',
  phone: '+91 6005537335',
  address: 'Srinagar, Jammu & Kashmir, India',
  image: 'https://res.cloudinary.com/dmjy2zhrb/image/upload/v1738248268/fay_salwaniProfile_mq6kqe.webp',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1riemGzUBB1YI7-akySqBJI3gd71OXoR6',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/faysalwani',
    github: 'https://github.com/faysalwani',
    twitter: 'https://twitter.com/faysalwani',
    website: 'https://faysalwani.vercel.app/'
  },
  location: {
    lat: 34.04382295897486,
    lng: 74.86590386380621
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612.120891953865!2d74.86066819201443!3d34.042320532845736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ed10763f311%3A0xc5693daade0d7307!2sLasjan%2C%20Srinagar%20190015!5e0!3m2!1sen!2sin!4v1752030590240!5m2!1sen!2sin'
};

export const projectsData = [
  {
    id: '1',
    title: 'Online Task Management Platform',
    description: 'TaskFlow is a full-stack task management platform built with Next.js, offering secure user authentication, task creation, editing, completion, and deletion. It features a modern admin panel, responsive UI, dark/light mode, and OTP-based login. Designed for scalability with MongoDB integration and fallback support using local storage.',
    shortDescription: 'Collaborative task management app with real-time updates and admin controls',
    image: 'https://res.cloudinary.com/dmjy2zhrb/image/upload/v1751810733/Task_flow_kqeifa.webp',
    technologies: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'shadcn/ui', 'JWT', 'Nodemailer'],
    links: {
      demo: 'https://task-flow-nine-jet.vercel.app/',
      github: 'https://github.com/faysalwani/Task_Flow',
      live: 'https://task-flow-nine-jet.vercel.app/'
    },
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: '2023-01-15',
    endDate: '2023-04-20'
  },
  {
    id: '2',
    title: 'Wanderlust Tours',
    description: 'Wanderlust Tours is a production-ready travel website tailored for the Indian tourism market. Built with Next.js 13 and TypeScript, it offers responsive design, INR pricing, dark/light theme, user-submitted reviews, and admin-controlled travel package management. With SEO optimization and WhatsApp-integrated contact system, it delivers a seamless booking experience for travelers.',
    shortDescription: 'Premium Indian travel website with curated packages and admin panel',
    image: 'https://res.cloudinary.com/dmjy2zhrb/image/upload/v1751810734/Tour_travles_sxnuyv.webp',
    technologies: ['Next.js 13', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Vercel', 'SEO', 'WhatsApp Integration'],
    links: {
      demo: 'https://tour-travels-nu.vercel.app/',
      github: 'https://github.com/faysalwani/Tour_Travels',
      live: 'https://tour-travels-nu.vercel.app/'
    },
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: '2023-05-01',
    endDate: '2023-07-15'
  },
  {
    id: '3',
    title: 'Old Portfolio Website',
    description: 'This is my previous personal portfolio website, developed using React and TypeScript. It features a clean, responsive layout, project showcases, and smooth navigation to highlight skills and work experience. Though basic compared to my newer projects, it remains a foundational piece in my developer journey.',
    shortDescription: 'Personal portfolio showcasing projects with TypeScript and React',
    image: 'https://res.cloudinary.com/dmjy2zhrb/image/upload/v1752037997/old_portfolio_pykvu7.webp',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      demo: 'https://faisalwani.vercel.app/',
      github: 'https://github.com/faysalwani/Portfolio',
      live: 'https://faisalwani.vercel.app/',
    },
    featured: false,
    category: 'web',
    status: 'completed',
    startDate: '2023-08-01',
    endDate: '2023-09-10'
  },
];

export const skillsData = [
  // Frontend
  { id: '1', name: 'React', level: 95, category: 'frontend', color: '#61DAFB' },
  { id: '2', name: 'TypeScript', level: 90, category: 'frontend', color: '#3178C6' },
  { id: '3', name: 'Vue.js', level: 85, category: 'frontend', color: '#4FC08D' },
  { id: '4', name: 'HTML/CSS', level: 95, category: 'frontend', color: '#E34F26' },
  { id: '5', name: 'Tailwind CSS', level: 90, category: 'frontend', color: '#06B6D4' },
  { id: '6', name: 'Next.js', level: 88, category: 'frontend', color: '#000000' },
  
  // Backend
  { id: '7', name: 'Node.js', level: 92, category: 'backend', color: '#339933' },
  { id: '8', name: 'Express.js', level: 90, category: 'backend', color: '#000000' },
  { id: '9', name: 'Python', level: 85, category: 'backend', color: '#3776AB' },
  { id: '10', name: 'Django', level: 80, category: 'backend', color: '#092E20' },
  { id: '11', name: 'GraphQL', level: 75, category: 'backend', color: '#E10098' },
  
  // Database
  { id: '12', name: 'MongoDB', level: 88, category: 'database', color: '#47A248' },
  { id: '13', name: 'PostgreSQL', level: 85, category: 'database', color: '#336791' },
  { id: '14', name: 'Redis', level: 80, category: 'database', color: '#DC382D' },
  { id: '15', name: 'MySQL', level: 82, category: 'database', color: '#4479A1' },
  
  // Tools
  { id: '16', name: 'Git', level: 95, category: 'tools', color: '#F05032' },
  { id: '17', name: 'Docker', level: 85, category: 'tools', color: '#2496ED' },
  { id: '18', name: 'AWS', level: 80, category: 'tools', color: '#FF9900' },
  { id: '19', name: 'Vercel', level: 90, category: 'tools', color: '#000000' },
  { id: '20', name: 'Figma', level: 85, category: 'tools', color: '#F24E1E' },
  
  // Soft Skills
  { id: '21', name: 'Problem Solving', level: 95, category: 'soft-skills', color: '#8B5CF6' },
  { id: '22', name: 'Team Collaboration', level: 90, category: 'soft-skills', color: '#10B981' },
  { id: '23', name: 'Communication', level: 88, category: 'soft-skills', color: '#F59E0B' },
  { id: '24', name: 'Project Management', level: 85, category: 'soft-skills', color: '#EF4444' }
];

export const qualificationsData = [
  // Education and Certifications
  // Each qualification should have a unique ID, title, institution, description, type, dates, and skills
  // Type can be 'degree', 'certification', or 'bootcamp'
  // Dates should be in ISO format (YYYY-MM-DD)
  // Skills should be an array of relevant skills for the qualification
  {
    id: '1',
    title: 'Bachelor of Science in Information Technology',
    institution: 'University of Kashmir, NIELIT',
    description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and computer systems. Graduated with honors.',
    type: 'degree',
    startDate: '2021-03-01',
    endDate: '2024-08-15',
    current: false,
    grade: '7.12 GPA',
    skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'Computer Systems', 'Mathematics'],
    credentialUrl: 'https://drive.google.com/file/d/1nBoeFtzFuSwGl-nNh3BbkKctekoV7Tp1/view?usp=drive_link',
    credentialId: 'KU/SGR/DC/23/046717',
  },
  {
    id: '2',
    title: 'Masters of Science in AI & ML',
    institution: 'NIELIT Srinagar',
    description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and computer systems. Graduated with honors',
    type: 'degree',
    startDate: '2025-08-01',
    endDate: '2027-08-01',
    current: true,
    skills: ['AWS', 'Cloud Architecture', 'System Design', 'Security']
  },
  // {
  //   id: '3',
  //   title: 'Drone Programming & Simulation',
  //   institution: 'NIELIT Srinagar',
  //   description: 'Intensive 12-week program covering modern web development technologies including React, Node.js, databases, and deployment strategies.',
  //   type: 'bootcamp',
  //   startDate: '2022-01-15',
  //   endDate: '2022-04-10',
  //   current: false,
  //   grade: 'Certificate of Completion',
  //   skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Git', 'Agile Development']
  // },
  // {
  //   id: '4',
  //   title: 'Google UX Design Certificate',
  //   institution: 'Google (via Coursera)',
  //   description: 'Comprehensive program covering user experience design principles, user research, wireframing, prototyping, and usability testing.',
  //   type: 'certification',
  //   startDate: '2023-08-01',
  //   endDate: '2023-11-30',
  //   current: false,
  //   credentialId: 'GOOGLE-UX-2023-789',
  //   credentialUrl: 'https://coursera.org/verify/professional-cert',
  //   skills: ['UX Design', 'User Research', 'Prototyping', 'Figma', 'Usability Testing']
  // }
];

export const certificatesData = [
  {
    id: '1',
    title: 'Android App Development',
    issuer: 'NIELIT Srinagar',
    description: 'Validates expertise in designing distributed systems and applications on the AWS platform with focus on scalability, security, and cost optimization.',
    image: 'https://res.cloudinary.com/dmjy2zhrb/image/upload/v1752046963/Android-Studio-Social_aofgdq.webp',
    issueDate: '2023-06-15',
    expiryDate: '2026-06-15',
    credentialId: '2023-NIELITSGR-Android/196',
    credentialUrl: 'https://drive.google.com/file/d/1N9L3JURpg5esYCYw3MwJhgdxLn4kQnhL/view?usp=drive_link',
    skills: ['AWS', 'Cloud Architecture', 'System Design', 'Security', 'Cost Optimization'],
    featured: true
  },
  {
    id: '2',
    title: 'Drone Programming & Simulation',
    issuer: 'NIELIT Srinagar',
    description: 'Comprehensive certification covering user experience design principles, user research methodologies, and design thinking processes.',
    image: 'https://res.cloudinary.com/dmjy2zhrb/image/upload/v1752046964/pexels-dr-failov-2151930529-32018235_1_1_hptjtt.webp',
    issueDate: '2023-11-30',
    credentialId: '2023-NIELITSGR-DA/184',
    credentialUrl: 'https://drive.google.com/file/d/1ckXs4A-dsgWiKuSdaf54wizdDFDAuP8o/view?usp=drive_link',
    skills: ['UX Design', 'User Research', 'Prototyping', 'Figma', 'Design Thinking'],
    featured: true
  },
  // {
  //   id: '3',
  //   title: 'MongoDB Certified Developer',
  //   issuer: 'MongoDB Inc.',
  //   description: 'Professional certification demonstrating proficiency in MongoDB database design, development, and administration.',
  //   image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   issueDate: '2023-03-20',
  //   expiryDate: '2025-03-20',
  //   credentialId: 'MONGO-DEV-2023-456',
  //   credentialUrl: 'https://university.mongodb.com/certification',
  //   skills: ['MongoDB', 'Database Design', 'Aggregation', 'Indexing', 'Performance Tuning'],
  //   featured: false
  // },
  // {
  //   id: '4',
  //   title: 'React Developer Certification',
  //   issuer: 'Meta (Facebook)',
  //   description: 'Advanced certification covering React ecosystem, state management, performance optimization, and modern development practices.',
  //   image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   issueDate: '2023-09-10',
  //   credentialId: 'META-REACT-2023-123',
  //   credentialUrl: 'https://developers.facebook.com/certification',
  //   skills: ['React', 'Redux', 'Hooks', 'Performance Optimization', 'Testing'],
  //   featured: true
  // },
  // {
  //   id: '5',
  //   title: 'Docker Certified Associate',
  //   issuer: 'Docker Inc.',
  //   description: 'Certification validating skills in containerization, Docker fundamentals, and container orchestration.',
  //   image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   issueDate: '2023-07-25',
  //   expiryDate: '2025-07-25',
  //   credentialId: 'DOCKER-DCA-2023-789',
  //   credentialUrl: 'https://docker.com/certification',
  //   skills: ['Docker', 'Containerization', 'Docker Compose', 'Kubernetes Basics', 'DevOps'],
  //   featured: false
  // }
];

export const settingsData = {
  siteName: 'Fay_salwani ',
  siteDescription: 'Professional Portfolio Website - Full Stack Developer & UI/UX Designer',
  siteKeywords: 'portfolio, developer, full stack, react, node.js, ui/ux design',
  maintenanceMode: false,
  allowRegistration: false
};