import React from 'react';

const Service = () => {
  return (
    <>
      {/* Service Section */}
      <section id="service">
        <div className="py-16">
          <div className="max-w-screen-xl mx-auto px-4 service-child">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Service Items */}
              <div className="service-item bg-white">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-yellow-500 text-white rounded-full shadow-lg">
                    <i className="fas fa-3x fa-user-tie"></i>
                  </div>
                  <h5 className="text-2xl font-semibold text-gray-800 mb-3">Master Chefs</h5>
                  <p className="text-gray-600 mb-4">
                    Our chefs are experts in crafting exquisite dishes with the finest ingredients and a passion for excellence.
                  </p>
                </div>
              </div>

              <div className="service-item bg-white">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-yellow-500 text-white rounded-full">
                    <i className="fas fa-3x fa-utensils"></i>
                  </div>
                  <h5 className="text-2xl font-semibold text-gray-800 mb-3">Good Quality Food</h5>
                  <p className="text-gray-600 mb-4">
                    We ensure every dish is prepared with premium ingredients, offering the perfect balance of taste and quality.
                  </p>
                </div>
              </div>

              <div className="service-item bg-white">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-yellow-500 text-white rounded-full shadow-lg">
                    <i className="fas fa-3x fa-concierge-bell"></i>
                  </div>
                  <h5 className="text-2xl font-semibold text-gray-800 mb-3">Clean Restaurant Service</h5>
                  <p className="text-gray-600 mb-4">
                    Experience a clean and inviting atmosphere where every detail is designed for your comfort and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
