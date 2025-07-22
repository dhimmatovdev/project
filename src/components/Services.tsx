import React from 'react';
import { GraduationCap, FileText, Users, DollarSign, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: t('service1Title'),
      description: t('service1Description'),
      features: ['University Selection', 'Application Review', 'Scholarship Search', 'Essay Writing Support']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: t('service2Title'),
      description: t('service2Description'),
      features: ['Mock Interviews', 'Document Preparation', 'Interview Training', 'Confidence Building']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('service3Title'),
      description: t('service3Description'),
      features: ['Profile Analysis', 'Personal University List', 'Reach Universities', 'Dream Universities']
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: t('service4Title'),
      description: t('service4Description'),
      features: ['Flexible Payment', 'No Hidden Fees', 'Success Guarantee', 'Discounts']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('currentLanguage') === 'en' ? 'Complete assistance in the process of admission and obtaining grants to US universities through professional services' : 'Professional xizmatlar orqali AQSh universitetlariga qabul va grant olish jarayonida to\'liq yordam'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="group/btn flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl hover:from-orange-600 hover:to-red-600 font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span>{t('currentLanguage') === 'en' ? 'Learn More' : 'Batafsil'}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Service Info */}
        <div className="mt-16 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Duolingo English Test</h3>
              <p className="text-lg mb-4">
                Online imtihon, 48 soat ichida natija, 4000+ universitet tomonidan qabul qilinadigan test
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">$59</div>
                  <div className="text-sm opacity-90">{t('testPrice')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">48h</div>
                  <div className="text-sm opacity-90">{t('resultTime')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-sm opacity-90">{t('universities')}</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://oakland.edu/gpa-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-white to-gray-50 text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:from-gray-50 hover:to-white transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>GPA Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;