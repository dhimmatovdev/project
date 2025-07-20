import React, { useState } from 'react';
import { MapPin, Star, ExternalLink, X, GraduationCap, Users, Award, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface University {
  id: string;
  name: string;
  location: string;
  ranking: string;
  logo: string;
  description: string;
  popularPrograms: string[];
  scholarshipRange: string;
  tuitionRange: string;
  acceptanceRate: string;
  studentCount: string;
  website: string;
}

interface Major {
  id: string;
  name: string;
  description: string;
  icon: string;
  topUniversities: string[];
  averageSalary: string;
  jobOutlook: string;
}

const Universities: React.FC = () => {
  const { t } = useLanguage();
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);

  const universities: University[] = [
    {
      id: '1',
      name: 'Harvard University',
      location: 'Cambridge, Massachusetts',
      ranking: '#1 National Universities',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636, it is the oldest institution of higher education in the United States.',
      popularPrograms: ['Business Administration', 'Medicine', 'Law', 'Computer Science', 'Economics'],
      scholarshipRange: '$0 - $75,000',
      tuitionRange: '$54,000 - $57,000',
      acceptanceRate: '3.4%',
      studentCount: '23,000+',
      website: 'https://harvard.edu'
    },
    {
      id: '2',
      name: 'Stanford University',
      location: 'Stanford, California',
      ranking: '#6 National Universities',
      logo: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Stanford University is a private research university in Stanford, California. Known for its academic strength, wealth, and proximity to Silicon Valley.',
      popularPrograms: ['Computer Science', 'Engineering', 'Business', 'Medicine', 'Psychology'],
      scholarshipRange: '$0 - $70,000',
      tuitionRange: '$56,000 - $58,000',
      acceptanceRate: '4.3%',
      studentCount: '17,000+',
      website: 'https://stanford.edu'
    },
    {
      id: '3',
      name: 'MIT',
      location: 'Cambridge, Massachusetts',
      ranking: '#2 National Universities',
      logo: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Massachusetts Institute of Technology is a private land-grant research university in Cambridge, Massachusetts. Known for its innovation in science and technology.',
      popularPrograms: ['Engineering', 'Computer Science', 'Physics', 'Mathematics', 'Economics'],
      scholarshipRange: '$0 - $65,000',
      tuitionRange: '$53,000 - $55,000',
      acceptanceRate: '6.7%',
      studentCount: '11,000+',
      website: 'https://mit.edu'
    },
    {
      id: '4',
      name: 'UC Berkeley',
      location: 'Berkeley, California',
      ranking: '#22 National Universities',
      logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'University of California, Berkeley is a public land-grant research university in Berkeley, California. Known for its academic excellence and research programs.',
      popularPrograms: ['Engineering', 'Business', 'Computer Science', 'Biology', 'Economics'],
      scholarshipRange: '$0 - $30,000',
      tuitionRange: '$14,000 - $44,000',
      acceptanceRate: '16.3%',
      studentCount: '45,000+',
      website: 'https://berkeley.edu'
    },
    {
      id: '5',
      name: 'Yale University',
      location: 'New Haven, Connecticut',
      ranking: '#5 National Universities',
      logo: 'https://images.pexels.com/photos/1438073/pexels-photo-1438073.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Yale University is a private Ivy League research university in New Haven, Connecticut. Known for its outstanding undergraduate program and school spirit.',
      popularPrograms: ['Liberal Arts', 'Medicine', 'Law', 'Drama', 'Political Science'],
      scholarshipRange: '$0 - $70,000',
      tuitionRange: '$59,000 - $62,000',
      acceptanceRate: '4.6%',
      studentCount: '13,000+',
      website: 'https://yale.edu'
    },
    {
      id: '6',
      name: 'Princeton University',
      location: 'Princeton, New Jersey',
      ranking: '#1 National Universities',
      logo: 'https://images.pexels.com/photos/1438074/pexels-photo-1438074.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Princeton University is a private Ivy League research university in Princeton, New Jersey. Known for its undergraduate focus and beautiful campus.',
      popularPrograms: ['Economics', 'Computer Science', 'Public Policy', 'Physics', 'History'],
      scholarshipRange: '$0 - $65,000',
      tuitionRange: '$56,000 - $59,000',
      acceptanceRate: '5.8%',
      studentCount: '5,400+',
      website: 'https://princeton.edu'
    }
  ];

  const majors: Major[] = [
    {
      id: '1',
      name: 'Computer Science',
      description: 'Study algorithms, programming, software development, artificial intelligence, and computer systems.',
      icon: '💻',
      topUniversities: ['MIT', 'Stanford', 'Carnegie Mellon', 'UC Berkeley', 'Harvard'],
      averageSalary: '$95,000 - $150,000',
      jobOutlook: 'Excellent (22% growth)'
    },
    {
      id: '2',
      name: 'Business Administration',
      description: 'Learn management, finance, marketing, operations, and entrepreneurship skills for business leadership.',
      icon: '💼',
      topUniversities: ['Harvard', 'Stanford', 'Wharton', 'MIT Sloan', 'Chicago Booth'],
      averageSalary: '$70,000 - $120,000',
      jobOutlook: 'Good (8% growth)'
    },
    {
      id: '3',
      name: 'Engineering',
      description: 'Apply mathematics and science to design, build, and maintain structures, machines, and systems.',
      icon: '⚙️',
      topUniversities: ['MIT', 'Stanford', 'UC Berkeley', 'Caltech', 'Georgia Tech'],
      averageSalary: '$75,000 - $130,000',
      jobOutlook: 'Good (6% growth)'
    },
    {
      id: '4',
      name: 'Medicine',
      description: 'Study human health, disease prevention, diagnosis, and treatment to become a healthcare professional.',
      icon: '🏥',
      topUniversities: ['Harvard', 'Johns Hopkins', 'Stanford', 'UCSF', 'Mayo Clinic'],
      averageSalary: '$200,000 - $400,000',
      jobOutlook: 'Excellent (15% growth)'
    },
    {
      id: '5',
      name: 'Economics',
      description: 'Analyze how societies allocate resources, understand markets, and study economic behavior.',
      icon: '📊',
      topUniversities: ['Harvard', 'MIT', 'Stanford', 'Chicago', 'Princeton'],
      averageSalary: '$65,000 - $110,000',
      jobOutlook: 'Good (13% growth)'
    },
    {
      id: '6',
      name: 'Psychology',
      description: 'Study human behavior, mental processes, and develop skills in research and therapy.',
      icon: '🧠',
      topUniversities: ['Stanford', 'Harvard', 'UC Berkeley', 'UCLA', 'Yale'],
      averageSalary: '$50,000 - $90,000',
      jobOutlook: 'Good (3% growth)'
    },
    {
      id: '7',
      name: 'International Relations',
      description: 'Study global politics, diplomacy, international law, and cross-cultural communication.',
      icon: '🌍',
      topUniversities: ['Harvard', 'Georgetown', 'Princeton', 'Columbia', 'Yale'],
      averageSalary: '$55,000 - $95,000',
      jobOutlook: 'Good (7% growth)'
    },
    {
      id: '8',
      name: 'Data Science',
      description: 'Combine statistics, programming, and domain expertise to extract insights from data.',
      icon: '📈',
      topUniversities: ['MIT', 'Stanford', 'UC Berkeley', 'Carnegie Mellon', 'Harvard'],
      averageSalary: '$85,000 - $140,000',
      jobOutlook: 'Excellent (35% growth)'
    }
  ];

  const openUniversityModal = (university: University) => {
    setSelectedUniversity(university);
  };

  const openMajorModal = (major: Major) => {
    setSelectedMajor(major);
  };

  const closeModals = () => {
    setSelectedUniversity(null);
    setSelectedMajor(null);
  };

  return (
    <section id="universities" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('universitiesTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('universitiesDescription')}
          </p>
        </div>

        {/* Universities Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('partnerUniversitiesTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university) => (
              <div
                key={university.id}
                onClick={() => openUniversityModal(university)}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={university.logo}
                    alt={university.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                      {university.name}
                    </h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{university.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {university.ranking}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {university.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">
                    {university.scholarshipRange}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Majors Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('fieldsOfStudyTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majors.map((major) => (
              <div
                key={major.id}
                onClick={() => openMajorModal(major)}
                className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 text-center">{major.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center group-hover:text-orange-500 transition-colors">
                  {major.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-4 line-clamp-3">
                  {major.description}
                </p>
                <div className="text-center">
                  <span className="text-green-600 font-semibold text-sm">
                    {major.averageSalary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University Modal */}
        {selectedUniversity && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={closeModals}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedUniversity.logo}
                      alt={selectedUniversity.name}
                      className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedUniversity.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedUniversity.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModals}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Ranking</div>
                        <div className="text-gray-600 dark:text-gray-400">{selectedUniversity.ranking}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Students</div>
                        <div className="text-gray-600 dark:text-gray-400">{selectedUniversity.studentCount}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Acceptance Rate</div>
                        <div className="text-gray-600 dark:text-gray-400">{selectedUniversity.acceptanceRate}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Tuition Range</div>
                      <div className="text-gray-600 dark:text-gray-400">{selectedUniversity.tuitionRange}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Scholarship Range</div>
                      <div className="text-green-600 font-medium">{selectedUniversity.scholarshipRange}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">About</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedUniversity.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Popular Programs</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedUniversity.popularPrograms.map((program, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-xl text-sm"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedUniversity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit Website</span>
                  </a>
                  <button className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                    <GraduationCap className="w-4 h-4" />
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Major Modal */}
        {selectedMajor && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={closeModals}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{selectedMajor.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedMajor.name}
                      </h3>
                      <div className="text-gray-600 dark:text-gray-400">
                        Field of Study
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModals}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">About This Field</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedMajor.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Career Outlook</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Average Salary:</span>
                        <div className="font-medium text-green-600">{selectedMajor.averageSalary}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Job Growth:</span>
                        <div className="font-medium text-blue-600">{selectedMajor.jobOutlook}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Top Universities</h4>
                    <div className="space-y-1">
                      {selectedMajor.topUniversities.map((university, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">{university}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                    <GraduationCap className="w-4 h-4" />
                    <span>Explore Programs</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                    <Users className="w-4 h-4" />
                    <span>Get Guidance</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Universities;