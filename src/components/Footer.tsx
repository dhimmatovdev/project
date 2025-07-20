import React from 'react';
import { MessageCircle, Instagram, Facebook, Mail, ExternalLink, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t('navigation'),
      links: [
        { name: t('home'), href: '#home' },
        { name: t('about'), href: '#about' },
        { name: t('services'), href: '#services' },
        { name: t('universities'), href: '#universities' },
        { name: t('mentors'), href: '#mentors' },
        { name: t('gallery'), href: '#gallery' },
        { name: t('faq'), href: '#faq' },
        { name: t('contact'), href: '#contact' }
      ]
    },
    {
      title: t('services'),
      links: [
        { name: t('admissionHelp'), href: '#services' },
        { name: t('visaConsultation'), href: '#services' },
        { name: t('scholarshipHelp'), href: '#services' },
        { name: t('personalConsultation'), href: '#contact' }
      ]
    },
    {
      title: t('usefulLinks'),
      links: [
        { name: 'GPA Calculator', href: 'https://oakland.edu/gpa-calculator/', external: true },
        { name: 'Duolingo Test', href: 'https://englishtest.duolingo.com/', external: true },
        { name: 'IELTS Info', href: 'https://www.ielts.org/', external: true },
        { name: 'StudyUSA', href: 'https://www.studyusa.com/', external: true }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: 'Telegram',
      href: 'https://t.me/humoagency',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: 'Instagram',
      href: 'https://www.instagram.com/humo_agency',
      color: 'hover:text-pink-500'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1Aarp16e1E',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: 'Email',
      href: 'mailto:info@humoagency.uz',
      color: 'hover:text-gray-500'
    }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/humo_logo.png" 
                alt="Humo Agency Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="text-xl font-bold">Humo Agency</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex items-start space-x-2 mb-4">
              <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
              <span className="text-gray-400 text-sm">
                {t('currentLanguage') === 'en' ? 'Yunusobod District, Amir Temur Street 108, Tashkent, Uzbekistan' : 'Yunusobod tumani, Amir Temur shoh ko\'chasi 108-uy, Toshkent, O\'zbekiston'}
              </span>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors p-2 rounded-lg hover:bg-gray-800`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-1"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-gray-400 hover:text-orange-400 transition-colors text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Humo Agency. {t('allRightsReserved')}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                {t('termsOfService')}
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                {t('contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;