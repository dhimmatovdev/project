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
    heroTitle: 'Top Universities Are Within Your Reach — Achieve Your Dream with Humo Agency!',
    heroSubtitle: 'Study at top US and European universities with full scholarship opportunities',
    getStarted: 'Boshlash',
    scholarshipOpportunities: '100% Scholarship Opportunities',
    noSatRequired: 'No SAT Required',
    ieltsOrDuolingo: 'IELTS or Duolingo',
    f1VisaHelp: 'F1 Visa Assistance',
    successfulStudents: 'Successful Students',
    partnerUniversities: 'Partner Universities',
    visaSuccess: 'Visa Success Rate',
    
    // About Section
    aboutTitle: 'Humo Agency Haqida',
    aboutDescription: 'Humo Agency - AQSh va Yevropa\'ning eng yaxshi universitetlariga to\'liq grant bilan o\'qish imkoniyati.',
    aboutFeature1: '100% grant imkoniyatlari',
    aboutFeature2: 'SAT talab qilinmaydi',
    aboutFeature3: 'IELTS yoki Duolingo etarli',
    aboutFeature4: 'Shaxsiy universitet ro\'yxati',
    ourMission: 'Bizning Missiyamiz',
    missionDescription: 'Humo Agency har bir talabaning AQSh va Yevropa universitetlariga qabul qilish va to\'liq grant olish orzularini amalga oshirishda yordam beradi. Biz professional maslahat va to\'liq qo\'llab-quvvatlash orqali muvaffaqiyatli kelajak qurishingizga yordam beramiz.',
    
    // Services Section
    servicesTitle: 'Bizning Xizmatlarimiz',
    servicesDescription: 'Professional xizmatlar orqali AQSh universitetlariga qabul va grant olish jarayonida to\'liq yordam',
    service1Title: 'Qabul va Grant Yordami',
    service1Description: 'AQSh universitetlariga qabul jarayonida to\'liq yordam va grant imkoniyatlarini topish',
    service2Title: 'Viza Suhbati Tayyorligi',
    service2Description: 'F1 viza suhbatiga professional tayyorgarlik va amaliy mashqlar',
    service3Title: 'Shaxsiy Universitet Ro\'yxati',
    service3Description: 'Sizning profilingizga mos keladigan universitetlar ro\'yxatini tayyorlash',
    service4Title: 'Arzon Narxlar',
    service4Description: 'Barcha xizmatlar uchun hamyonbop narxlar va to\'lov rejalari',
    duolingoDescription: 'Online imtihon, 48 soat ichida natija, 5000+ universitet tomonidan qabul qilinadigan test',
    testPrice: 'Test narxi',
    resultTime: 'Natija vaqti',
    universities: 'Universitetlar',
    
    // How It Works
    howItWorksTitle: 'Qanday Ishlaydi',
    howItWorksDescription: '4 oddiy qadam orqali AQSh universitetlariga qabul va grant olish jarayoni',
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
    successDescription: 'Bizning talabalarning muvaffaqiyat hikoyalari va AQSh universitetlaridagi yutuqlari',

    // Visa Success
    visaSuccessTitle: 'Viza Muvaffaqiyatlari',
    visaSuccessDescription: 'Humo Agency orqali viza olgan talabalarimizning haqiqiy muvaffaqiyat hikoyalari',
    
    // Team
    teamTitle: 'Meet Our Team',
    teamDescription: 'Tajribali professional ekspertlar sizni muvaffaqiyatga olib boradi',
    workWithMentors: 'Professional Mentorlar Bilan Ishlang',
    mentorSupport: 'Har bir mentor sizning muvaffaqiyatingiz uchun shaxsiy maslahat va qo\'llab-quvvatlash beradi',
    chooseMentor: 'Mentor Tanlash',
    
    // Gallery
    galleryTitle: 'Galereya',
    galleryDescription: 'Bizning talabalarning muvaffaqiyat lahzalari va universitetlardagi hayotdan suratlar',
    
    // FAQ
    faqTitle: 'Tez-tez So\'raladigan Savollar',
    faqDescription: 'Eng ko\'p so\'raladigan savollar va ularning javoblari',
    
    // Contact
    contactTitle: 'Biz Bilan Bog\'laning',
    contactDescription: 'Bizning mutaxassislar bilan bog\'laning va bepul maslahat oling',
    getInTouch: 'Biz Bilan Bog\'laning',
    officeInformation: 'Ofis Ma\'lumotlari',
    ourAddress: 'Bizning Manzilimiz',
    bookConsultation: 'Bepul Konsultatsiyaga yoziling',
    applyNow: 'Hujjat Topshirish',
    
    // Footer
    footerDescription: 'Sizning orzuyingizga eltuvchi ishonchli hamrohingiz.',
    navigation: 'Navigatsiya',
    usefulLinks: 'Foydali Havolalar',
    gpaCalculator: 'GPA Kalkulyatori',
    duolingoInfo: 'Duolingo Ma\'lumoti',
    allRightsReserved: 'Barcha huquqlar himoyalangan.',
    privacyPolicy: 'Maxfiylik Siyosati',
    termsOfService: 'Foydalanish Shartlari',
    admissionHelp: 'Qabul Yordami',
    visaConsultation: 'Viza Maslahati',
    scholarshipHelp: 'Grant Yordami',
    personalConsultation: 'Shaxsiy Maslahat',
    
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
    fallAdmission: 'Kuzgi Qabul',
    springAdmission: 'Qishki Qabul',
    fallDescription: 'Avgustdan martgacha hujjat topshirish',
    springDescription: 'Maydan noyabrgacha hujjat topshirish',

    // Team
    founderBio: 'Humo Agency hammuassisi. Dunyo bo\'ylab 30+ universitetga qabul qilingan va 1 million dollardan ortiq grant yutgan. 100+ talabaga 90% dan to\'liq o\'qish grantini yutishda va chet elda o\'qish sayohatlariga muvaffaqiyatli tayyorgarlik ko\'rishda yordam bergan. Milliy va xalqaro konferensiyalar, forumlar, festivallar va Model Birlashgan Millatlar dasturlarida faol ishtirok etadi.',
    founder: 'Asoschisi'
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
    heroTitle: 'Top Universities Are Within Your Reach 🇺🇸 — Achieve Your Dream with Humo Agency!',
    heroSubtitle: 'Full scholarship opportunities at top US universities',
    getStarted: 'Get Started',
    scholarshipOpportunities: '100% scholarship opportunities',
    noSatRequired: 'No SAT Required',
    ieltsOrDuolingo: 'Only IELTS or Duolingo test required',
    f1VisaHelp: 'F1 Visa Support',
    successfulStudents: 'Successful Students',
    partnerUniversities: 'Partner Universities',
    visaSuccess: 'Visa Success',
    
    // About Section
    aboutTitle: 'About Humo Agency',
    aboutDescription: 'Full scholarship opportunities at top US universities.',
    aboutFeature1: 'Full scholarship opportunities at top US universities',
    aboutFeature2: 'No SAT Required',
    aboutFeature3: 'Only IELTS or Duolingo test required',
    aboutFeature4: 'A list of universities that match your profile',
    ourMission: 'Our Mission',
    missionDescription: 'Full support from professional mentors',
    
    // Services Section
    servicesTitle: 'Our Services',
    servicesDescription: 'Complete assistance in admission and scholarship application process for US universities through professional services',
    service1Title: 'Admission & Scholarship Assistance',
    service1Description: 'Comprehensive support for the university admission process and scholarship opportunities',
    service2Title: 'Visa Interview Preparation',
    service2Description: 'Professional F1 visa interview preparation with practical training sessions',
    service3Title: 'Personalized University List',
    service3Description: 'Customized university recommendations based on your profile and preferences',
    service4Title: 'Affordable Pricing',
    service4Description: 'Budget-friendly pricing and flexible payment plans for all services',
    duolingoDescription: 'Online test, results within 48 hours, accepted by 5000+ universities',
    testPrice: 'Test Fee',
    resultTime: 'Result Time',
    universities: 'Universities',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    howItWorksDescription: 'The process of admission and obtaining scholarships for US universities in 4 simple steps',
    step1Title: 'Consultation',
    step1Description: 'Free consultation and goal-setting session',
    step2Title: 'Document Preparation',
    step2Description: 'Preparation and review of all required documents',
    step3Title: 'Application Submission',
    step3Description: 'University applications and scholarship acquisition',
    step4Title: 'Visa Preparation',
    step4Description: 'F1 visa interview preparation and ongoing support',
    
    // Success Stories
    successTitle: 'Success Stories',
    successDescription: 'Our students\' success stories and achievements in US universities',

    // Visa Success
    visaSuccessTitle: 'Visa Success Stories',
    visaSuccessDescription: 'Real success stories of our students who obtained visas through Humo Agency',
    
    // Team
    teamTitle: 'Meet Our Team',
    teamDescription: 'Experienced professionals who guide you to success',
    workWithMentors: 'Work with Professional Mentors',
    mentorSupport: 'Each mentor provides personalized guidance and support to ensure your success',
    chooseMentor: 'Choose a Mentor',
    
    // Gallery
    galleryTitle: 'Gallery',
    galleryDescription: 'Success stories of our students and glimpses of university life',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'The most frequently asked questions and their answers',
    
    // FAQ Questions and Answers
    faq1Question: 'How can I get a 100% scholarship?',
    faq1Answer: 'To get a 100% scholarship at US universities, academic performance, English proficiency, and proper document preparation are crucial. Our mentors help you find the most suitable universities and scholarship opportunities. Typically, a GPA of 3.5+, IELTS 6.5+, or Duolingo 95+ is required.',
    faq2Question: 'What documents are required?',
    faq2Answer: 'Main documents include: foreign passport, educational documents (diploma, certificate), transcript, English test results (IELTS/TOEFL/Duolingo), personal statement, recommendation letters, CV (for graduate programs). Each university may have additional specific requirements.',
    faq3Question: 'Is taking the SAT test mandatory?',
    faq3Answer: 'No, most universities do not require the SAT test. We specialize in working with universities that do not require SAT. An English proficiency test (IELTS, TOEFL, or Duolingo) is sufficient.',
    faq4Question: 'How should I prepare for the visa interview?',
    faq4Answer: 'The visa interview is one of the most important steps. We provide mock interview sessions, preparation for the most frequently asked questions, proper document organization, and confidence building. We have a 95% visa success rate.',
    faq5Question: 'How long does the process take?',
    faq5Answer: 'The complete process takes 6-12 months. Documents for fall semester are submitted from August to March, and for spring semester from May to November. Starting as early as possible is recommended.',
    faq6Question: 'What is the cost of services?',
    faq6Answer: 'Our service costs vary depending on goals and required services. We offer affordable prices and flexible payment plans. For detailed information, you can discuss during a free consultation session.',
    faq7Question: 'Information about Duolingo test',
    faq7Answer: 'Duolingo English Test is an online English proficiency test. It costs $59, results are ready within 48 hours, and is accepted by 5000+ universities. The test is taken online from home and is very convenient.',
    faq8Question: 'How is GPA calculated?',
    faq8Answer: 'GPA (Grade Point Average) is the average grade indicator. A special calculator is used to convert Uzbek grades to the American system. It is usually calculated on a 4.0 scale and a 3.5+ is recommended.',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactDescription: 'Connect with our specialists and receive a free consultation',
    getInTouch: 'Get in Touch',
    officeInformation: 'Office Information',
    ourAddress: 'Our Address',
    bookConsultation: 'Book a Free Consultation',
    applyNow: 'Apply Now',
    
    // Footer
    footerDescription: 'Your trusted partner in achieving your academic dreams.',
    navigation: 'Navigation',
    usefulLinks: 'Useful Links',
    gpaCalculator: 'GPA Calculator',
    duolingoInfo: 'Duolingo Information',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    admissionHelp: 'Admission Help',
    visaConsultation: 'Visa Consultation',
    scholarshipHelp: 'Scholarship Help',
    personalConsultation: 'Personal Consultation',
    
    // Documents
    documentsTitle: 'Required Documents',
    passport: 'Foreign Passport',
    diploma: 'High School or University Diploma',
    transcripts: 'Academic Transcripts',
    englishTest: 'English Proficiency Test (IELTS/TOEFL/Duolingo)',
    personalStatement: 'Personal Statement',
    recommendationLetters: 'Recommendation Letters',
    resume: 'Resume (for graduate programs)',
    
    // Admission Cycles
    admissionTitle: 'Admission Cycles',
    fallAdmission: 'Fall Admission',
    springAdmission: 'Spring Admission',
    fallDescription: 'Document submission from August to March',
    springDescription: 'Document submission from May to November',

    // Team
    founderBio: 'Co-founder of Humo Agency. Accepted to over 30 universities worldwide and secured over $1 million in scholarships. Has helped 100+ students secure 90% to full-tuition scholarships and successfully prepare for their study abroad journeys. Actively participates in national and international conferences, forums, festivals, and Model United Nations programs.',
    founder: 'Founder'
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