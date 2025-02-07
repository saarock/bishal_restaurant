import React from 'react';

const HotelShowCase = () => {
  return (
    <>
      {/* Hotel Showcase Section */}
      <section className="hotel-showcase-section bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white">
              Welcome to <span className="text-yellow-500">Hotel Lumbini Tandoori Bhojanalaya</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Experience luxury and comfort with breathtaking views and serene surroundings.
            </p>
          </div>

          {/* Hotel Images */}
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Hotel Image */}
            <div className="hotel-image w-full lg:w-1/2">
              <img
                src="./images/location1.png"
                alt="Hotel Building"
                className="rounded-lg shadow-lg hover:scale-105 transform transition"
              />
              <p className="text-center text-gray-400 mt-4">The magnificent hotel building</p>
            </div>

            {/* Road Image */}
            <div className="road-image w-full lg:w-1/2">
              <img
                src="./images/location2.png"
                alt="Road to Hotel"
                className="rounded-lg shadow-lg hover:scale-105 transform transition"
              />
              <p className="text-center text-gray-400 mt-4">The scenic road leading to the hotel</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelShowCase;
