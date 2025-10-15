import React, { useState } from 'react';
import { Award, MapPin, GraduationCap, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VisaSuccess: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const visaSuccessStories = [
    {
      id: '1',
      image: '/visa.jpg',
      country: currentLanguage.code === 'uz' ? 'Latviya' : 'Latvia',
      flag: '🇱🇻',
      program: currentLanguage.code === 'uz' ? 'Magistratura - Biznes Menejment' : 'Master\'s - Business Management',
      duration: currentLanguage.code === 'uz' ? '2 yil' : '2 years',
      location: currentLanguage.code === 'uz' ? 'Riga, Latviya' : 'Riga, Latvia',
      title: currentLanguage.code === 'uz' ? 'Humo Agency\'dan yana bir muvaffaqiyatli natija!' : 'Another successful result from Humo Agency!',
      description: currentLanguage.code === 'uz'
        ? 'Talabamiz Rigada joylashgan 2 yillik Biznes Menejment magistratura dasturi uchun talabalar vizasini oldi! Ajoyib tomoni shundaki, Erasmus+ dasturi orqali ular Yevropaning boshqa davlatlarida ham o\'qish va tajriba olish imkoniyatiga ega bo\'ladilar!'
        : 'Our student received a student visa for a 2-year Master\'s program in Business Management located in Riga, Latvia! What makes this path even more exciting is that through the Erasmus+ program, they will have the opportunity to study and gain experience in other European countries as well!',
      features: currentLanguage.code === 'uz'
        ? ['Erasmus+ dasturi', '2 yillik dastur', 'Yevropa davlatlarida tajriba']
        : ['Erasmus+ program', '2-year program', 'Experience in European countries'],
      admissionStatus: currentLanguage.code === 'uz' ? '2026 Bahor uchun qabul boshlandi!' : 'Admissions for Spring 2026 have started!'
    },
    {
      id: '2',
      image: '/visa1.jpg',
      country: currentLanguage.code === 'uz' ? 'AQSh' : 'USA',
      flag: '🇺🇸',
      program: 'MBA',
      duration: currentLanguage.code === 'uz' ? '2 yil' : '2 years',
      location: currentLanguage.code === 'uz' ? 'Florida, AQSh' : 'Florida, USA',
      title: currentLanguage.code === 'uz' ? 'Birinchi urinishda viza!' : 'First attempt visa success!',
      description: currentLanguage.code === 'uz'
        ? 'Talabamiz Amerika elchixonasida birinchi urinishda talabalar vizasini oldi! Florida shtatida MBA dasturi uchun 2 yillik o\'qish. Humo Agency har doim natijalar asosida gapiradi!'
        : 'Our student obtained their student visa on the very first attempt at the American embassy! MBA in Florida for 2 years of study. Humo Agency always speaks based on results!',
      features: currentLanguage.code === 'uz'
        ? ['Birinchi urinishda viza', 'MBA dasturi', 'Florida shtatida']
        : ['First attempt success', 'MBA program', 'Florida state'],
      admissionStatus: currentLanguage.code === 'uz' ? 'Konsultatsiya uchun murojaat qiling' : 'Contact for consultation'
    },
    {
      id: '3',
      image: '/visa2.jpg',
      country: currentLanguage.code === 'uz' ? 'Yevropa' : 'Europe',
      flag: '🇪🇺',
      program: currentLanguage.code === 'uz' ? 'Talaba vizasi' : 'Student Visa',
      duration: currentLanguage.code === 'uz' ? 'Muvaffaqiyatli' : 'Successful',
      location: currentLanguage.code === 'uz' ? 'Yevropa Ittifoqi' : 'European Union',
      title: currentLanguage.code === 'uz' ? 'Yana bir muvaffaqiyat!' : 'Another success!',
      description: currentLanguage.code === 'uz'
        ? 'Talabamiz Yevropa davlatiga talabalar vizasini muvaffaqiyatli oldi! Professional tayyorgarlik va to\'g\'ri hujjat tayyorlash orqali muvaffaqiyatga erishdik.'
        : 'Our student successfully obtained a student visa to a European country! We achieved success through professional preparation and proper document handling.',
      features: currentLanguage.code === 'uz'
        ? ['Professional tayyorgarlik', 'To\'liq hujjat yordami', 'Viza muvaffaqiyati']
        : ['Professional preparation', 'Full document support', 'Visa success'],
      admissionStatus: currentLanguage.code === 'uz' ? 'Keyingi muvaffaqiyat siz bo\'lishingiz mumkin!' : 'The next success could be YOU!'
    }
  ];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % visaSuccessStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + visaSuccessStories.length) % visaSuccessStories.length);
  };

  const currentStory = visaSuccessStories[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Award className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {t('visaSuccessTitle')}
            </h2>
            <Award className="w-10 h-10 text-orange-500" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('visaSuccessDescription')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto overflow-hidden group">
                <img
                  src={currentStory.image}
                  alt={currentStory.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-lg">
                  <span className="text-2xl">{currentStory.flag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center space-x-2 text-white">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">{currentStory.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-xl font-bold text-sm">
                      {currentStory.country}
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentStory.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {currentStory.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 bg-orange-50 dark:bg-gray-700 rounded-xl p-3">
                      <GraduationCap className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {currentLanguage.code === 'uz' ? 'Dastur' : 'Program'}
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">{currentStory.program}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-orange-50 dark:bg-gray-700 rounded-xl p-3">
                      <Award className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {currentLanguage.code === 'uz' ? 'Davomiyligi' : 'Duration'}
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">{currentStory.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {currentStory.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border-l-4 border-green-500">
                    <p className="text-green-800 dark:text-green-300 font-semibold">
                      {currentStory.admissionStatus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevStory}
              className="p-3 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {visaSuccessStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-lg transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-orange-400 to-red-500 shadow-lg w-12'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="p-3 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next story"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {visaSuccessStories.filter((_, index) => index !== currentIndex).map((story) => (
              <div
                key={story.id}
                className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setCurrentIndex(visaSuccessStories.findIndex(s => s.id === story.id))}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-xl px-3 py-1 shadow-lg">
                    <span className="text-xl">{story.flag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {story.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {story.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-500 font-semibold">{story.country}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{story.program}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSuccess;
