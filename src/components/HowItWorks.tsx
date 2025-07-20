import React from 'react';
import { MessageCircle, FileCheck, Send, Plane } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('step1Title'),
      description: t('step1Description')
    },
    {
      number: 2,
      icon: <FileCheck className="w-8 h-8" />,
      title: t('step2Title'),
      description: t('step2Description')
    },
    {
      number: 3,
      icon: <Send className="w-8 h-8" />,
      title: t('step3Title'),
      description: t('step3Description')
    },
    {
      number: 4,
      icon: <Plane className="w-8 h-8" />,
      title: t('step4Title'),
      description: t('step4Description')
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('howItWorksTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('currentLanguage') === 'en' ? 'The process of admission and obtaining grants to US universities through 4 simple steps' : '4 oddiy qadam orqali AQSh universitetlariga qabul va grant olish jarayoni'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 z-0">
                    <div className="h-full bg-orange-500 w-1/2"></div>
                  </div>
                )}

                <div className="text-center relative z-10">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl font-bold text-xl mb-6 shadow-xl">
                    {step.number}
                  </div>

                  {/* Step Icon */}
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {step.icon}
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline for Mobile */}
          <div className="lg:hidden mt-16">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start space-x-4 mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;