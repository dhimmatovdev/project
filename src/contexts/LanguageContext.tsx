import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

const translations = {
  uz: {
    // Navigation
    home: 'Bosh sahifa',
    about: 'Biz haqimizda',
    services: 'Xizmatlar',
    mentors: 'Mentorlar',
    gallery: 'Galereya',
    faq: 'Savollar',
    contact: 'Aloqa',
    
    // Hero Section
    heroTitle: 'Top Universitetlarga Sizning Yo\'lingiz',
    heroSubtitle: 'AQSh\'ning eng yaxshi universitetlariga 100% grant bilan o\'qish imkoniyati',
    getStarted: 'Boshlash',
    
    // About Section
    aboutTitle: 'Humo Agency Haqida',
    aboutDescription: 'Biz talabalarni AQSh\'ning eng yaxshi universitetlariga qabul qilish va to\'liq grantlar olishda yordam beradigan ishonchli maslahatchi agentligimiz.',
    aboutFeature1: '100% grant imkoniyatlari',
    aboutFeature2: 'SAT talab qilinmaydi',
    aboutFeature3: 'IELTS yoki Duolingo etarli',
    aboutFeature4: 'Shaxsiy kollej ro\'yxati',
    
    // Services Section
    servicesTitle: 'Bizning Xizmatlarimiz',
    service1Title: 'Qabul va Grant Yordami',
    service1Description: 'AQSh universitetlariga qabul jarayonida to\'liq yordam va grant imkoniyatlarini topish',
    service2Title: 'Viza Suhbati Tayyorligi',
    service2Description: 'F1 viza suhbatiga professional tayyorgarlik va amaliy mashqlar',
    service3Title: 'Shaxsiy Kollej Ro\'yxati',
    service3Description: 'Sizning profilingizga mos keladigan universitetlar ro\'yxatini tayyorlash',
    service4Title: 'Arzon Narxlar',
    service4Description: 'Barcha xizmatlar uchun hamyonbop narxlar va to\'lov rejalari',
    
    // How It Works
    howItWorksTitle: 'Qanday Ishlaydi',
    step1Title: 'Maslahat',
    step1Description: 'Bepul konsultatsiya va maqsadlaringizni aniqlash',
    step2Title: 'Hujjat Tayyorlash',
    step2Description: 'Barcha kerakli hujjatlarni tayyorlash va tekshirish',
    step3Title: 'Ariza Topshirish',
    step3Description: 'Universitetlarga arizalar topshirish va kuzatish',
    step4Title: 'Viza Tayyorligi',
    step4Description: 'F1 viza uchun suhbat tayyorligi va qo\'llab-quvvatlash',
    
    // Success Stories
    successTitle: 'Muvaffaqiyat Hikoyalari',
    
    // Mentors
    mentorsTitle: 'Bizning Mentorlarimiz',
    
    // Gallery
    galleryTitle: 'Galereya',
    
    // FAQ
    faqTitle: 'Tez-tez So\'raladigan Savollar',
    
    // Contact
    contactTitle: 'Biz Bilan Bog\'laning',
    applyNow: 'Hujjat Topshirish',
    
    // Footer
    footerDescription: 'Sizning orzuyingizga eltuvchi ishonchli hamrohingiz.',
    usefulLinks: 'Foydali Havolalar',
    gpaCalculator: 'GPA Kalkulyatori',
    duolingoInfo: 'Duolingo Ma\'lumoti',
    
    // Documents
    documentsTitle: 'Kerakli Hujjatlar',
    passport: 'Xorijiy Pasport',
    diploma: 'Maktab/Universitet Diplomasi',
    transcripts: 'Baholar Daftarchasi',
    englishTest: 'Ingliz Tili Testi (IELTS/TOEFL/Duolingo)',
    personalStatement: 'Shaxsiy Bayonot',
    recommendationLetters: 'Tavsiya Xatlari',
    resume: 'Rezyume (Magistratura uchun)',
    
    // Admission Cycles
    admissionTitle: 'Qabul Davrlari',
    fallAdmission: 'Kuz Qabuli',
    springAdmission: 'Bahor Qabuli',
    fallDescription: 'Avgustdan martgacha hujjat topshirish',
    springDescription: 'Maydan noyabrgacha hujjat topshirish'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    mentors: 'Mentors',
    gallery: 'Gallery',
    faq: 'FAQ',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Your Pathway to Top U.S. Universities',
    heroSubtitle: 'Get 100% scholarships to study at America\'s best universities',
    getStarted: 'Get Started',
    
    // About Section
    aboutTitle: 'About Humo Agency',
    aboutDescription: 'We are a trusted consultancy helping students get admitted to top U.S. universities and secure full scholarships.',
    aboutFeature1: '100% scholarship opportunities',
    aboutFeature2: 'No SAT required',
    aboutFeature3: 'IELTS or Duolingo accepted',
    aboutFeature4: 'Personalized college list',
    
    // Services Section
    servicesTitle: 'Our Services',
    service1Title: 'Admission & Scholarship Help',
    service1Description: 'Complete support for university admission process and finding scholarship opportunities',
    service2Title: 'Visa Interview Preparation',
    service2Description: 'Professional preparation for F1 visa interview with practical training',
    service3Title: 'Personalized College List',
    service3Description: 'Customized university list based on your profile and preferences',
    service4Title: 'Affordable Pricing',
    service4Description: 'Budget-friendly prices and flexible payment plans for all services',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    step1Title: 'Consultation',
    step1Description: 'Free consultation and goal setting session',
    step2Title: 'Document Preparation',
    step2Description: 'Prepare and review all required documents',
    step3Title: 'Application Submission',
    step3Description: 'Submit applications to universities and track progress',
    step4Title: 'Visa Preparation',
    step4Description: 'F1 visa interview preparation and support',
    
    // Success Stories
    successTitle: 'Success Stories',
    
    // Mentors
    mentorsTitle: 'Meet Our Mentors',
    
    // Gallery
    galleryTitle: 'Gallery',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    
    // Contact
    contactTitle: 'Contact Us',
    applyNow: 'Apply Now',
    
    // Footer
    footerDescription: 'Your trusted partner in achieving your dreams.',
    usefulLinks: 'Useful Links',
    gpaCalculator: 'GPA Calculator',
    duolingoInfo: 'Duolingo Information',
    
    // Documents
    documentsTitle: 'Required Documents',
    passport: 'Foreign Passport',
    diploma: 'High School/University Diploma',
    transcripts: 'Academic Transcripts',
    englishTest: 'English Test (IELTS/TOEFL/Duolingo)',
    personalStatement: 'Personal Statement',
    recommendationLetters: 'Recommendation Letters',
    resume: 'Resume (for Graduate level)',
    
    // Admission Cycles
    admissionTitle: 'Admission Cycles',
    fallAdmission: 'Fall Admission',
    springAdmission: 'Spring Admission',
    fallDescription: 'Document submission from August to March',
    springDescription: 'Document submission from May to November'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('humo-language');
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) {
        setCurrentLanguage(lang);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('humo-language', language.code);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code][key as keyof typeof translations.uz] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languages };