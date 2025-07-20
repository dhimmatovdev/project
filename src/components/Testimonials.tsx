import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Aziza Karimova',
      university: 'Harvard University',
      scholarship: '$70,000 grant',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Humo Agency orqali Harvard universitetiga to\'liq grant bilan qabul qilindim. Mentorlar professional yordam berishdi.',
      rating: 5
    },
    {
      id: '2',
      name: 'Jamshid Yusupov',
      university: 'MIT',
      scholarship: '$65,000 grant',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'MIT\'ga qabul qilish jarayonida Humo Agency\'ning yordami juda muhim edi. Viza suhbatiga tayyorgarlik ajoyib edi.',
      rating: 5
    },
    {
      id: '3',
      name: 'Malika Nazarova',
      university: 'Stanford University',
      scholarship: '$75,000 grant',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Stanford\'ga qabul qilish orzuim edi. Humo Agency bu orzuimni amalga oshirishga yordam berdi.',
      rating: 5
    },
    {
      id: '4',
      name: 'Bobur Aliyev',
      university: 'UC Berkeley',
      scholarship: '$60,000 grant',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Professional maslahat va to\'liq qo\'llab-quvvatlash tufayli UC Berkeley\'ga muvaffaqiyatli qabul qilindim.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('successTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('currentLanguage') === 'en' ? 'Success stories of our students and their achievements at US universities' : 'Bizning talabalarning muvaffaqiyat hikoyalari va AQSh universitetlaridagi yutuqlari'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Student Photo */}
              <div className="flex-shrink-0">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-32 h-32 rounded-3xl object-cover shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-orange-500 mb-2" />
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                <div className="flex justify-center md:justify-start items-center space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-orange-500 font-semibold">{currentTestimonial.university}</p>
                  <p className="text-green-600 font-medium">{currentTestimonial.scholarship}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-lg transition-all duration-300 ${
                    index === currentIndex ? 'bg-gradient-to-r from-orange-400 to-red-500 shadow-lg' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Other Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.filter((_, index) => index !== currentIndex).slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-2xl object-cover shadow-lg"
                  />
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h5>
                    <p className="text-sm text-orange-500">{testimonial.university}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  "{testimonial.quote.substring(0, 100)}..."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-green-600 font-medium">{testimonial.scholarship}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;