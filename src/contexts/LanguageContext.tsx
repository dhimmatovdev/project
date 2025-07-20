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
    universities: 'Universitetlar',
    mentors: 'Mentorlar',
    gallery: 'Galereya',
    faq: 'Savollar',
    contact: 'Aloqa',
    
    // Hero Section
    heroTitle: 'Orzuingizga — Humo Agency bilan erishing!',
    heroSubtitle: 'AQSh va Yevropa universitetlariga to\'liq grant bilan o\'qish imkoniyati',
    getStarted: 'Boshlash',
    scholarshipOpportunities: '100% Grant Imkoniyatlari',
    noSatRequired: 'SAT talab qilinmaydi',
    ieltsOrDuolingo: 'IELTS yoki Duolingo',
    f1VisaHelp: 'F1 Visa Yordami',
    successfulStudents: 'Muvaffaqiyatli Talabalar',
    partnerUniversities: 'Hamkor Universitetlar',
    visaSuccess: 'Viza Muvaffaqiyati',
    
    // About Section
    aboutTitle: 'Humo Agency Haqida',
    aboutDescription: 'Humo Agency - talabalarni AQSh va Yevropa\'ning eng yaxshi universitetlariga qabul qilish va to\'liq grantlar olishda yordam beradigan ishonchli tashkilot.',
    aboutFeature1: '100% grant imkoniyatlari',
    aboutFeature2: 'SAT talab qilinmaydi',
    aboutFeature3: 'IELTS yoki Duolingo etarli',
    aboutFeature4: 'Shaxsiy universitet ro\'yxati',
    ourMission: 'Bizning Missiyamiz',
    missionDescription: 'Humo Agency har bir talabaning AQSh va Yevropa universitetlariga qabul qilish va to\'liq grant olish orzularini amalga oshirishda yordam beradi. Biz professional maslahat va to\'liq qo\'llab-quvvatlash orqali muvaffaqiyatli kelajak qurishingizga yordam beramiz.',
    
    // Services Section
    servicesTitle: 'Bizning Xizmatlarimiz',
    service1Title: 'Qabul va Grant Yordami',
    service1Description: 'AQSh universitetlariga qabul jarayonida to\'liq yordam va grant imkoniyatlarini topish',
    service2Title: 'Viza Suhbati Tayyorligi',
    service2Description: 'F1 viza suhbatiga professional tayyorgarlik va amaliy mashqlar',
    service3Title: 'Shaxsiy Universitet Ro\'yxati',
    service3Description: 'Sizning profilingizga mos keladigan universitetlar ro\'yxatini tayyorlash',
    service4Title: 'Arzon Narxlar',
    service4Description: 'Barcha xizmatlar uchun hamyonbop narxlar va to\'lov rejalari',
    duolingoDescription: 'Online imtihon, 48 soat ichida natija, 4000+ universitet tomonidan qabul qilinadigan test',
    testPrice: 'Test narxi',
    resultTime: 'Natija vaqti',
    universities: 'Universitet',
    
    // How It Works
    howItWorksTitle: 'Qanday Ishlaydi',
    step1Title: 'Maslahat',
    step1Description: 'Bepul konsultatsiya va maqsadlaringizni aniqlash',
    step2Title: 'Hujjat Tayyorlash',
    step2Description: 'Barcha kerakli hujjatlarni tayyorlash va tekshirish',
    step3Title: 'Ariza Topshirish',
    step3Description: 'Universitetlarga arizalar topshirish va grant olish',
    step4Title: 'Viza Tayyorligi',
    step4Description: 'F1 viza uchun suhbat tayyorligi va qo\'llab-quvvatlash',
    
    // Success Stories
    successTitle: 'Muvaffaqiyat Hikoyalari',
    
    // Mentors
    mentorsTitle: 'Bizning Mentorlarimiz',
    workWithMentors: 'Professional Mentorlar Bilan Ishlang',
    mentorSupport: 'Har bir mentor sizning muvaffaqiyatingiz uchun shaxsiy maslahat va qo\'llab-quvvatlash beradi',
    chooseMentor: 'Mentor Tanlash',
    
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
    universities: 'Universities',
    mentors: 'Mentors',
    gallery: 'Gallery',
    faq: 'FAQ',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Top Universities Are Within Your Reach. 🇺🇸 Achieve Your Dream with Humo Agency!',
    heroSubtitle: 'Get full scholarships to study at top universities in the USA and Europe',
    getStarted: 'Get Started',
    scholarshipOpportunities: '100% Scholarship Opportunities',
    noSatRequired: 'No SAT Required',
    ieltsOrDuolingo: 'IELTS or Duolingo',
    f1VisaHelp: 'F1 Visa Help',
    successfulStudents: 'Successful Students',
    partnerUniversities: 'Partner Universities',
    visaSuccess: 'Visa Success',
    
    // About Section
    aboutTitle: 'About Humo Agency',
    aboutDescription: 'Humo Agency is a trusted organization that helps students get admitted into top universities in the USA and Europe, including securing full scholarships.',
    aboutFeature1: '100% scholarship opportunities',
    aboutFeature2: 'No SAT required',
    aboutFeature3: 'IELTS or Duolingo accepted',
    aboutFeature4: 'Personal University List',
    ourMission: 'Our Mission',
    missionDescription: 'Humo Agency is dedicated to helping every student achieve their dream of being accepted into U.S. and European universities with full scholarships. Through professional guidance and complete support, we help build a successful future.',
    
    // Services Section
    servicesTitle: 'Our Services',
    service1Title: 'Admission & Scholarship Help',
    service1Description: 'Complete support for university admission process and finding scholarship opportunities',
    service2Title: 'Visa Interview Preparation',
    service2Description: 'Professional preparation for F1 visa interview with practical training',
    service3Title: 'Personal University List',
    service3Description: 'Customized university list based on your profile and preferences',
    service4Title: 'Affordable Pricing',
    service4Description: 'Budget-friendly prices and flexible payment plans for all services',
    duolingoDescription: 'Online test, results in 48 hours, accepted by 4000+ universities',
    testPrice: 'Test Fee',
    resultTime: 'Result Time',
    universities: 'Universities',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    step1Title: 'Consultation',
    step1Description: 'Free consultation and goal setting session',
    step2Title: 'Document Preparation',
    step2Description: 'Prepare and review all required documents',
    step3Title: 'Application Submission',
    step3Description: 'University Applications and Scholarship Acquisition',
    step4Title: 'Visa Preparation',
    step4Description: 'F1 visa interview preparation and support',
    
    // Success Stories
    successTitle: 'Success Stories',
    
    // Mentors
    mentorsTitle: 'Meet Our Mentors',
    workWithMentors: 'Work with Professional Mentors',
    mentorSupport: 'Each mentor provides personalized guidance and support for your success',
    chooseMentor: 'Choose Mentor',
    
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