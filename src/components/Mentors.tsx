import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Mentors: React.FC = () => {
  const { t } = useLanguage();

  const mentors = [
    {
      id: '1',
      name: 'Asomiddin Akhadov',
      role: 'Chief Executive Officer (CEO) & Director',
      additionalRole: 'Visa Consultant | Strategic Partnerships Lead | Brand Representative',
      image: '/asomiddin.jpg',
      telegram: 'https://t.me/akhadooff',
      instagram: 'https://instagram.com/akhadooff'
    },
    {
      id: '2',
      name: 'Avazbek Ismoilov',
      role: 'Co-Founder & Senior Admissions Executive',
      additionalRole: 'Student Mentor | Academic Guidance Specialist | Brand Representative',
      image: '/avazbek.jpg',
      telegram: 'https://t.me/avazbekus',
      instagram: 'https://instagram.com/avazbekus'
    }
  ];

  const founderBio = "Co-founder of Humo Agency. Accepted to over 30 universities worldwide and secured over $1 million in scholarships. Has helped 100+ students win 90% to full-tuition scholarships and successfully prepare for their study abroad journeys. Actively involved in national and international conferences, forums, festivals, and Model United Nations programs.";

  return (
    <section id="mentors" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tajribali professional ekspertlar sizni muvaffaqiyatga olib boradi
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Founder
            </h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 dark:from-orange-900/20 dark:via-orange-800/20 dark:to-orange-700/20 rounded-3xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/avazbek.jpg"
                    alt="Avazbek Ismoilov"
                    className="w-48 h-48 object-cover object-center rounded-3xl shadow-xl"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Avazbek Ismoilov
                  </h4>
                  <p className="text-orange-600 font-semibold text-lg mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {founderBio}
                  </p>
                  <div className="flex justify-center md:justify-start space-x-3 mt-6">
                    <a
                      href="https://t.me/avazbekus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com/avazbekus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Our Team
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="group">
              <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 h-full">
                {/* Mentor Photo */}
                <div className="relative mb-4">
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      style={{ aspectRatio: '1/1' }}
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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