import React from 'react'

const Discount = () => {
  return (
    <>
      <section className="discount-section bg-gray-900 py-16 relative">
        <div className="container mx-auto px-4 opacity-50 pointer-events-none">
          {/* Section Header */}
          <div className="top-container flex flex-col sm:flex-row justify-between items-center mb-12">
            <div className="top-container-left-child text-center sm:text-left">
              <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 text-white">
                Exclusive <span className="text-yellow-500"> Discounts</span><br /> items
              </h2>
            </div>
            <div className="top-container-right-child text-gray-600 mt-6 sm:mt-0 sm:ml-8">
              <p className="text-lg">
                Grab these deals before they're gone! Fresh, delicious, and at a great price.
              </p>
            </div>
          </div>

          {/* Discount Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Discount Item */}
            <div className="item relative bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGFswRoOm85yC4mHTr02XqoHGoYlbXFDLOg&s"
                alt="Burger"
                className="w-full h-56 object-cover"
              />
              <div className="content p-6">
                <h3 className="text-2xl font-bold text-white">Juicy Burger</h3>
                <p className="text-gray-600 mt-2">25% Discount</p>
                <div className="price mt-4 flex justify-between items-center">
                  <span className="text-red-500 font-bold text-lg">$2.60</span>
                  <span className="line-through text-gray-500">$3.50</span>
                </div>
              </div>
            </div>
            {/* Add more items as needed */}
          </div>
        </div>
        {/* Lock Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-2xl font-bold">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0-8a4 4 0 00-4 4v3m4 0h3m-7-3V9a4 4 0 118 0v3m-7 0h7" />
            </svg>
            <p>This section is locked</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discount;
