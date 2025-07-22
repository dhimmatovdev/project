import React from 'react';
import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Telegram Bot',
      description: t('currentLanguage') === 'en' ? 'Automatic consultation and application' : 'Avtomatik maslahat va ariza berish',
      value: '@HumoAgencyAdmission_bot',
      link: 'https://t.me/HumoAgencyAdmission_bot',
      color: 'bg-blue-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Support',
      description: t('currentLanguage') === 'en' ? 'Quick help and consultation' : 'Tezkor yordam va maslahat',
      value: '@humoagency_help',
      link: 'https://t.me/humoagency_help',
      color: 'bg-green-500'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      description: t('currentLanguage') === 'en' ? 'News and success stories' : 'Yangiliklar va muvaffaqiyat hikoyalari',
      value: '@humo_agency',
      link: 'https://www.instagram.com/humo_agency',
      color: 'bg-pink-500'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: 'Facebook',
      description: t('currentLanguage') === 'en' ? 'Community and events' : 'Jamiyat va tadbirlar',
      value: 'Humo Agency',
      link: 'https://www.facebook.com/share/1Aarp16e1E',
      color: 'bg-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {t('currentLanguage') === 'en' ? 'Contact Us' : 'Biz Bilan Bog\'laning'}
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className={`${method.color} text-white p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        {method.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500 font-semibold">{method.value}</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Info */}
              <div className="mt-8 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('currentLanguage') === 'en' ? 'Office Information' : 'Ofis Ma\'lumotlari'}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {t('currentLanguage') === 'en' ? 'Yunusobod District, Amir Temur Street 108, Tashkent, Uzbekistan' : 'Yunusobod tumani, Amir Temur shoh ko\'chasi 108-uy, Toshkent, O\'zbekiston'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      +998 90 123 45 67
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      info@humoagency.uz
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-xl overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t('currentLanguage') === 'en' ? 'Our Address' : 'Bizning Manzilimiz'}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {t('currentLanguage') === 'en' ? 'Yunusobod District, Amir Temur Street 108, Tashkent, Uzbekistan' : 'Yunusobod tumani, Amir Temur shoh ko\'chasi 108-uy, Toshkent, O\'zbekiston'}
                    </span>
                  </div>
                </div>
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2!2d69.2401!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sAmir%20Temur%20Street%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1647834567890!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Humo Agency Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700 dark:text-gray-300">+998 90 123 45 67</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700 dark:text-gray-300">info@humoagency.uz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Start */}
            <div>
              <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">
                  {t('currentLanguage') === 'en' ? 'Start Today!' : 'Bugun Boshlang!'}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-sm font-bold shadow-lg">
                      1
                    </div>
                    <span>{t('currentLanguage') === 'en' ? 'Book a free consultation session' : 'Bepul maslahat seansini buyurtma qiling'}</span>
                    <span>{t('currentLanguage') === 'en' ? 'Book a free consultation session' : 'Bepul maslahat seansini buyurtma qiling'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-sm font-bold shadow-lg">
                      2
                    </div>
                    <span>{t('currentLanguage') === 'en' ? 'Get a list of universities matching your profile' : 'Profilingizga mos universitetlar ro\'yxatini oling'}</span>
                    <span>{t('currentLanguage') === 'en' ? 'Get a list of universities matching your profile' : 'Profilingizga mos universitetlar ro\'yxatini oling'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-sm font-bold shadow-lg">
                      3
                    </div>
                    <span>{t('currentLanguage') === 'en' ? 'Start the document preparation process' : 'Hujjatlarni tayyorlash jarayonini boshlang'}</span>
                    <span>{t('currentLanguage') === 'en' ? 'Start the document preparation process' : 'Hujjatlarni tayyorlash jarayonini boshlang'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-sm font-bold shadow-lg">
                      4
                    </div>
                    <span>{t('currentLanguage') === 'en' ? 'Successfully get admitted to US universities' : 'AQSh universitetlariga muvaffaqiyatli qabul qiling'}</span>
                    <span>{t('currentLanguage') === 'en' ? 'Successfully get admitted to US universities' : 'AQSh universitetlariga muvaffaqiyatli qabul qiling'}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-white to-gray-50 text-orange-600 py-5 rounded-2xl font-bold text-lg hover:from-gray-50 hover:to-white transition-all duration-300 shadow-xl hover:shadow-2xl">
                  {t('applyNow')}
                </button>
              </div>

              {/* Useful Links */}
              <div className="mt-8 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('usefulLinks')}
                </h4>
                <div className="space-y-3">
                  <a
                    href="https://oakland.edu/gpa-calculator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-gray-700 dark:text-gray-300">GPA Calculator</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                  <a
                    href="https://englishtest.duolingo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-gray-700 dark:text-gray-300">Duolingo Test</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;