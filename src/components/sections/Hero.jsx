import React from 'react';

const Hero = () => {
  const openLightbox = (image) => {
    // Add logic to open the lightbox or modal here
    console.log('Opening lightbox for', image);
  };

  return (
    <>
      <section className="relative bg-cover bg-center h-screen flex flex-col lg:flex-row hero" id="hero">
        <div className="absolute inset-0 opacity-50"></div>

        <div className="hero-child relative z-10 max-w-screen-xl mx-auto px-4 py-16 flex items-center flex-col lg:flex-row w-full">
          {/* Left Side Texts */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 hero-left wow fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-yellow-500">Tasty Food</span> <span className="text-gray-300">
                Welcome to The Bishal Lumbini Tandoori Bhojanalaya
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Indulge in the finest culinary creations, crafted by our master chefs to bring you an
              unforgettable dining experience.
            </p>

            <div className="space-x-4 space-y-2 mt-6">
              <a
                href="#menu"
                onClick={() => openLightbox('./images/menu.png')}
                className="explore-menu bg-yellow-500 hover:bg-yellow-400 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
              >
                Explore Our Menu <i className="fas fa-arrow-right"></i>
              </a>
              <a
                href="#menu"
                className="bg-yellow-500 hover:bg-yellow-400 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
              >
                Watch Video <i className="fas fa-play"></i>
              </a>
            </div>
          </div>

          {/* Right Side Dish Images */}
          <div className="hero-right w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="hero-right-child relative">
              <img src="./images/one.jpg" alt="Dish 1" className="hero-img w-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
