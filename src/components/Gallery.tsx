import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Graduation Ceremony',
      description: 'Talabalarning bitirish marosimi'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Visa Interview Success',
      description: 'Muvaffaqiyatli viza suhbati'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'University Campus',
      description: 'AQSh universitetlari kampusi'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Student Life',
      description: 'Talaba hayoti va tadbirlar'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Scholarship Award',
      description: 'Grant sovrinlari marosimi'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Orientation Day',
      description: 'Yangi talabalar uchun orientatsiya'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1438073/pexels-photo-1438073.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Library Study',
      description: 'Kutubxonada o\'qish jarayoni'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Success Celebration',
      description: 'Muvaffaqiyatni nishonlash'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/1438074/pexels-photo-1438074.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Mentorship Session',
      description: 'Mentor bilan uchrashuvlar'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('galleryTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('galleryDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-60"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-60"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-60"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-bold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-sm opacity-80">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;