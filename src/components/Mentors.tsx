import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ment1 from '../../public/1.png';
import ment2 from '../../public/2.png';
const Mentors: React.FC = () => {
  const { t } = useLanguage();

  const mentors = [
    {
      id: '1',
      name: 'Asomiddin Akhadov',
      role: 'CEO',
      additionalRole: 'Visa Consultant',
      image: ment1,
      telegram: 'https://t.me/akhadooff',
      instagram: 'https://instagram.com/akhadooff'
    },
    {
      id: '2',
      name: 'Avazbek Ismoilov',
      role: 'Head Mentor',
      additionalRole: 'Student Success Manager',
      image: ment2,
      telegram: 'https://t.me/avazbekus',
      instagram: 'https://instagram.com/avazbekus'
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tajribali professional mentorlar sizni muvaffaqiyatga olib boradi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto ">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="group">
              <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 h-full">
                {/* Mentor Photo */}
                <div className="relative mb-4">
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="text-center mb-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-1">
                    {mentor.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {mentor.additionalRole}
                  </p>
                </div>

                {/* Contact Actions */}
                <div className="flex justify-center space-x-3 mt-auto">
                  <a
                    href={mentor.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href={mentor.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {t('workWithMentors')}
            </h3>
            <p className="text-lg mb-6">
              {t('mentorSupport')}
            </p>
            <button className="bg-gradient-to-r from-white to-gray-50 text-orange-600 px-10 py-4 rounded-2xl font-semibold hover:from-gray-50 hover:to-white transition-all duration-300 shadow-xl hover:shadow-2xl">
              {t('chooseMentor')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;