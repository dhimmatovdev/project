import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ConsultationModal from './ConsultationModal';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqs = [
    {
      id: 1,
      question: t('currentLanguage') === 'en' ? t('faq1Question') : '100% grantni qanday olish mumkin?',
      answer: t('currentLanguage') === 'en' ? t('faq1Answer') : 'AQSh universitetlarida 100% grant olish uchun akademik natijalar, ingliz tili darajasi va to\'g\'ri hujjat tayyorlash muhim. Bizning mentorlar sizga eng mos universitetlarni tanlash va grant imkoniyatlarini topishda yordam beradi. Odatda GPA 3.5+, IELTS 6.5+ yoki Duolingo 95+ ball talab qilinadi.'
    },
    {
      id: 2,
      question: t('currentLanguage') === 'en' ? t('faq2Question') : 'Qanday hujjatlar talab qilinadi?',
      answer: t('currentLanguage') === 'en' ? t('faq2Answer') : 'Asosiy hujjatlar: xorijiy pasport, ta\'lim hujjatlari (diploma, attestat), baholar daftarchasi, ingliz tili testi natijalari (IELTS/TOEFL/Duolingo), shaxsiy bayonot, tavsiya xatlari, CV (magistratura uchun). Har bir universitet o\'zining qo\'shimcha talablariga ega bo\'lishi mumkin.'
    },
    {
      id: 3,
      question: t('currentLanguage') === 'en' ? t('faq3Question') : 'SAT test topshirish majburiyatmi?',
      answer: t('currentLanguage') === 'en' ? t('faq3Answer') : 'Yo\'q, ko\'pchilik universitetlar SAT testini majburiy qilmaydi. Biz SAT talab qilmaydigan universitetlar bilan ishlashga ixtisoslashganmiz. Ingliz tili testi (IELTS, TOEFL yoki Duolingo) etarli.'
    },
    {
      id: 4,
      question: t('currentLanguage') === 'en' ? t('faq4Question') : 'Viza suhbatiga qanday tayyorlanish kerak?',
      answer: t('currentLanguage') === 'en' ? t('faq4Answer') : 'Viza suhbati eng muhim bosqichlardan biri. Biz mock interview sessiyalari, eng ko\'p so\'raladigan savollarni tayyorlash, hujjatlarni to\'g\'ri tartibga solish va ishonch hosil qilish bo\'yicha to\'liq tayyorgarlik beramiz. Bizning 95% viza muvaffaqiyat darajamiz bor.'
    },
    {
      id: 5,
      question: t('currentLanguage') === 'en' ? t('faq5Question') : 'Jarayon qancha vaqt oladi?',
      answer: t('currentLanguage') === 'en' ? t('faq5Answer') : 'To\'liq jarayon 6-12 oy vaqt oladi. Kuz semestri uchun hujjatlar avgust-mart oylarida, bahor semestri uchun may-noyabr oylarida topshiriladi. Iloji boricha erta boshlash tavsiya etiladi.'
    },
    {
      id: 6,
      question: t('currentLanguage') === 'en' ? t('faq6Question') : 'Xizmat narxi qancha?',
      answer: t('currentLanguage') === 'en' ? t('faq6Answer') : 'Bizning xizmatlar narxi maqsad va kerakli xizmatlar hajmiga qarab o\'zgaradi. Biz hamyonbop narxlar va moslashuvchan to\'lov rejalari taklif qilamiz. Batafsil ma\'lumot uchun bepul maslahat seansida gaplashishingiz mumkin.'
    },
    {
      id: 7,
      question: t('currentLanguage') === 'en' ? t('faq7Question') : 'Duolingo test haqida ma\'lumot',
      answer: t('currentLanguage') === 'en' ? t('faq7Answer') : 'Duolingo English Test - bu onlayn ingliz tili testi. Narxi $59, natija 48 soat ichida tayyor bo\'ladi va 5000+ universitet tomonidan qabul qilinadi. Test uydan online tarzda topshiriladi va juda qulay.'
    },
    {
      id: 8,
      question: t('currentLanguage') === 'en' ? t('faq8Question') : 'GPA qanday hisoblanadi?',
      answer: t('currentLanguage') === 'en' ? t('faq8Answer') : 'GPA (Grade Point Average) - bu o\'rtacha baho ko\'rsatkichi. O\'zbekiston baholarini Amerika tizimiga o\'girish uchun maxsus kalkulyator ishlatiladi. Odatda 4.0 tizimda hisoblanadi va 3.5+ dan yuqori bo\'lishi tavsiya etiladi.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('faqTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('faqDescription')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500" />
                  )}
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                {t('currentLanguage') === 'en' ? 'Have More Questions?' : 'Ko\'proq Savol Bormi?'}
              </h3>
              <p className="text-lg mb-6">
                {t('currentLanguage') === 'en' ? 'Speak directly with our specialists and get answers to all your questions' : 'Bizning mutaxassislar bilan to\'g\'ridan-to\'g\'ri gaplashing va barcha savollaringizga javob oling'}
              </p>
              <button className="bg-gradient-to-r from-white to-gray-50 text-orange-600 px-10 py-4 rounded-2xl font-semibold hover:from-gray-50 hover:to-white transition-all duration-300 shadow-xl hover:shadow-2xl">
                <span onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                  {t('currentLanguage') === 'en' ? 'Schedule Free Consultation' : 'Bepul Konsultatsiyaga yoziling'}
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <ConsultationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default FAQ;