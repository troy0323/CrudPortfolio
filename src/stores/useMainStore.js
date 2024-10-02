import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    home: {
      title: 'Hey, I am Troy, Computer Science Student',
      age: 22,
      address: 'Block 6 Lot 15 Mediterranean Heights Phase 1 San Jose, Rodriguez, Rizal',
    },
    contact: {
      address: 'Rizal, Philippines',
      email: 'troypardillo20@gmail.com',
    },
    profile: {
      name: 'Troy Victor Pardillo',
      basicInformation:
        'I am a 4th-year Computer Science student pursuing a career in cybersecurity with a strong foundation in cybersecurity fundamentals, network security, and threat identification. Passionate about protecting digital assets and staying ahead in the evolving cybersecurity landscape. Eager to explore more and learn different things to continuously improve my skills and knowledge.',
      education: [
        {
          institution: 'AMA Fairview (2019-2021)',
          degree: 'Information and Communication Technology',
          honors: 'Graduated with High Honors',
        },
        {
          institution: 'New Era University',
          degree: 'Bachelor of Science in Computer Science',
          honors: 'Dean’s Lister',
        },
      ],
      certifications: [
        'Fortinet Certified Fundamentals in Cybersecurity',
        'Fortinet Certified Associate in Cybersecurity',
        'FCA - Fortigate Operator',
        'FCF - Technical Introduction to Cybersecurity',
        'FCF - Introduction to Threat Landscape',
        'FCF - Getting Started in Cybersecurity',
        'Cisco Introduction to Cybersecurity',
        'Cisco Cyber Threat Management',
        'Cisco Endpoint Security',
        'Cisco Hardware Basics',
        'Cisco Operating System Basics',
        'Cisco Introduction to Data Science',
        'Cybersecurity Workshop - Capture the Flag',
        'Introduction to Python',
        'Business Analytics with Python',
        'Data Analytics Essentials',
        'Oracle Cloud Data Management',
        'Oracle Cloud Infrastructure',
        'SQL and Relational Database',
      ],
      softSkills: [
        'Communication',
        'Teamwork',
        'Problem-Solving',
        'Adaptability',
        'Time Management',
        'Attention to Detail',
        'Work Ethic',
        'Flexibility',
        'Patience',
        'Hardworking',
        'Discipline',
        'Willingness to learn',
        'Responsible',
      ],
      hardSkills: [
        'Network Security',
        'Threat Identification',
        'Endpoint Security',
        'Cloud Security',
        'Threat Intelligence',
        'Programming Languages (Java, Python, SQL)',
        'Knowledge of Power BI',
        'Knowledge of Pentaho',
        'Database Management',
        'Knowledge of Microsoft Suite',
      ],
    },
  }),
  actions: {
    updateHome(data) {
      this.home = { ...this.home, ...data };
    },
    updateContact(data) {
      this.contact = { ...this.contact, ...data };
    },
    updateProfile(data) {
      this.profile = { ...this.profile, ...data };
    },
    addCertification(certification) {
      this.profile.certifications.push(certification);
    },
    deleteCertification(index) {
      this.profile.certifications.splice(index, 1);
    },
    addEducation(education) {
      this.profile.education.push(education);
    },
    deleteEducation(index) {
      this.profile.education.splice(index, 1);
    },
  },
});
