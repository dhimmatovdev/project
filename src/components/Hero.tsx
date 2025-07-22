import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const backgroundImages = [
    'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-800">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>
      </div>

      {/* Slider Controls */}

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('heroTitle')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl">
              <span className="text-white text-sm font-medium">✓ SAT talab qilinmaydi</span>
            </div>
            <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl">
              <span className="text-white text-sm font-medium">✓ IELTS yoki Duolingo</span>
            </div>
            <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl">
              <span className="text-white text-sm font-medium">✓ F1 Visa Yordami</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleGetStarted}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            <span>{t('getStarted')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <div className="text-white/80">{t('successfulStudents')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80">{t('partnerUniversities')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">{t('scholarshipOpportunities')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80">{t('visaSuccess')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;