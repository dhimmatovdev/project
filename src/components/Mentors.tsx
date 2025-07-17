import React from 'react';
import { LinkedinIcon, Mail, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Mentors: React.FC = () => {
  const { t } = useLanguage();

  const mentors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      title: 'Admission Specialist',
      bio: 'Harvard MBA, 10+ yillik tajriba AQSh universitetlariga qabul qilish jarayonida',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Ivy League Universities', 'MBA Programs', 'Scholarship Applications'],
      students: 200,
      rating: 4.9
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Visa Consultant',
      bio: 'F1 visa bo\'yicha mutaxassis, 95% muvaffaqiyat darajasi bilan 500+ talabaga yordam bergan',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['F1 Visa Process', 'Interview Preparation', 'Document Review'],
      students: 500,
      rating: 4.8
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      title: 'Essay Writing Coach',
      bio: 'Stanford PhD, shaxsiy bayonot va esselarda mutaxassis, 300+ muvaffaqiyatli ariza',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Personal Statements', 'Academic Essays', 'Application Review'],
      students: 300,
      rating: 4.9
    },
    {
      id: '4',
      name: 'James Wilson',
      title: 'Career Counselor',
      bio: 'MIT alumni, STEM sohalari bo\'yicha mutaxassis, texnik universitetlarga qabul qilish',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['STEM Programs', 'Technical Universities', 'Career Guidance'],
      students: 250,
      rating: 4.7
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('mentorsTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tajribali professional mentorlar sizni muvaffaqiyatga olib boradi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="group">
              <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                {/* Mentor Photo */}
                <div className="relative mb-6">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-48 rounded-2xl object-cover shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-2xl text-xs font-medium shadow-lg">
                    {mentor.students}+ Students
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-2">{mentor.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center items-center space-x-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {mentor.rating}
                  </span>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-xl text-xs shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex justify-center space-x-3">
                  <button className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <LinkedinIcon className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-2xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Professional Mentorlar Bilan Ishlang
            </h3>
            <p className="text-lg mb-6">
              Har bir mentor sizning muvaffaqiyatingiz uchun shaxsiy maslahat va qo'llab-quvvatlash beradi
            </p>
            <button className="bg-gradient-to-r from-white to-gray-50 text-orange-600 px-10 py-4 rounded-2xl font-semibold hover:from-gray-50 hover:to-white transition-all duration-300 shadow-xl hover:shadow-2xl">
              Mentor Tanlash
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;