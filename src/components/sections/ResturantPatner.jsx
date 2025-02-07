import React from 'react';

const RestaurantPartner = () => {
  // Array of partners
  const partners = [
    {
      name: 'Bishal Bhusal',
      role: 'Owner',
      phone: ['9768887770', '01-5922928'],
      instagramLink: 'https://www.instagram.com/bishal_bhusal12/',
      image: './images/owner.png'
    },
    {
      name: 'Partner Two',
      role: 'Chef',
      phone: ['1234567890', '01-1234567'],
      instagramLink: 'https://www.instagram.com/partner_two/',
      image: './images/partner_two.png'
    },
    {
      name: 'Partner Three',
      role: 'Manager',
      phone: ['9876543210', '01-7654321'],
      instagramLink: 'https://www.instagram.com/partner_three/',
      image: './images/partner_three.png'
    }
    // Add more partners as needed
  ];

  return (
    <>
      <section className="restaurant-partners py-16 text-gray-800" id="contact">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="top-container flex flex-col sm:flex-row justify-between items-center mb-12">
            <div className="top-container-left-child text-center sm:text-left">
              <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
                Meet Our <span className="text-yellow-500">Restaurant and tech Partners</span><br />
              </h2>
            </div>
            <div className="top-container-right-child text-gray-600 mt-6 sm:mt-0 sm:ml-8">
              <p className="text-lg">
                Our talented team and trusted restaurant partners work hard to bring you the best!
              </p>
            </div>
          </div>

          {/* Partner Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {/* Mapping through partners array to create partner items dynamically */}
            {partners.map((partner, index) => (
              <div key={index} className="partner-item rounded-lg overflow-hidden shadow-lg text-center">
                <img
                  className="w-full h-64 object-cover"
                  src={partner.image}
                  alt={`Restaurant Partner ${index + 1}`}
                />
                <div className="content p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{partner.name}</h3>
                  <p className="text-gray-600 owner">{partner.role}</p>
                  <p className="mb-1 text-lg">
                    Phone: <span className="text-green-400">{partner.phone.join('<br />')}</span>
                  </p>
                  <p className="text-lg">
                    Follow us on social media:
                    <a
                      href={partner.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-500 transition duration-300"
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantPartner;
