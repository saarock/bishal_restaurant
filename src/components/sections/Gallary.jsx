import React, { useState } from 'react';

const Gallary = () => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');

  // Array of images with details (src, alt, description)
  const images = [
    { src: './images/two.png', alt: 'Gallery Image 1', description: 'Delicious Burger with Fries' },
    { src: './images/three.png', alt: 'Gallery Image 2', description: 'Fresh Veggie Salad' },
    { src: './images/four.png', alt: 'Gallery Image 3', description: 'Spicy Chicken Wings' },
    { src: './images/six.png', alt: 'Gallery Image 4', description: 'Crispy Fried Fish' },
    { src: './images/five.png', alt: 'Gallery Image 5', description: 'Tasty Samosas' },
    { src: './images/seven.png', alt: 'Gallery Image 6', description: 'Aromatic Biriyani' },
  ];

  const openLightbox = (imageSrc, description) => {
    setCurrentImage(imageSrc);
    setCurrentDescription(description);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
    setCurrentDescription('');
  };

  return (
    <>
      <section className="our-gallery bg-dark-50 py-16 text-gray-800" id="gallery">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="top-container flex flex-col sm:flex-row justify-between items-center mb-12">
            <div className="top-container-left-child text-center sm:text-left">
              <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
                Explore <span className="text-yellow-500"> our</span><br /> Gallery
              </h2>
            </div>
            <div className="top-container-right-child text-gray-600 mt-6 sm:mt-0 sm:ml-8">
              <p className="text-lg">
                A glimpse of our moments, events, and creations.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-item rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openLightbox(image.src, image.description)}
              >
                <img
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
            <button className="absolute top-28 right-10 text-white text-3xl font-bold" onClick={closeLightbox}>
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img
                id="lightboxImage"
                className="max-w-full max-h-full rounded-lg"
                src={currentImage}
                alt="Full Image"
              />
              <p className="text-white text-lg mt-4">{currentDescription}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallary;
