import React from 'react';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: t('aboutFeature1'),
      description: 'Amerika\'ning eng yaxshi universitetlarida to\'liq grant imkoniyatlari'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t('aboutFeature2'),
      description: 'Faqat IELTS yoki Duolingo testi yetarli'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('aboutFeature3'),
      description: 'Professional mentorlar tomonidan to\'liq qo\'llab-quvvatlash'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('aboutFeature4'),
      description: 'Sizning profilingizga mos keladigan universitetlar ro\'yxati'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white p-8 rounded-3xl mb-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Bizning Missiyamiz</h3>
              <p className="text-lg leading-relaxed">
                Humo Agency har bir talabaning AQSh universitetlariga qabul qilish va to'liq grant olish orzularini amalga oshirishda yordam beradi. Biz professional maslahat va to'liq qo'llab-quvvatlash orqali muvaffaqiyatli kelajak qurishingizga yordam beramiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-orange-500 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('documentsTitle')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{t('passport')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{t('diploma')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{t('transcripts')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{t('englishTest')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{t('personalStatement')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{t('recommendationLetters')}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {t('fallAdmission')}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('fallDescription')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {t('springAdmission')}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('springDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;