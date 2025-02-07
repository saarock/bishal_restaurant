import React from 'react';

const Famous = () => {
  const items = [
    {
      name: 'Chicken Momo',
      price: '$5.99',
      image: 'https://cdn3d.iconscout.com/3d/premium/thumb/momos-3d-icon-download-in-png-blend-fbx-gltf-file-formats--momo-dumpling-gyoza-indian-food-pack-drink-icons-10522012.png?f=webp',
    },
    {
      name: 'Paneer Momo',
      price: '$6.49',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGFswRoOm85yC4mHTr02XqoHGoYlbXFDLOg&s',
    },
    {
      name: 'Chicken Momo',
      price: '$5.99',
      image: 'https://cdn3d.iconscout.com/3d/premium/thumb/momos-3d-icon-download-in-png-blend-fbx-gltf-file-formats--momo-dumpling-gyoza-indian-food-pack-drink-icons-10522012.png?f=webp',
    },
    {
      name: 'Paneer Momo',
      price: '$6.49',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGFswRoOm85yC4mHTr02XqoHGoYlbXFDLOg&s',
    },
  ];

  return (
    <>
      <section className="famous bg-gray-900 text-white py-16" id="famous">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="top-container flex flex-col sm:flex-row justify-between items-center mb-12">
            <div className="top-container-left-child text-center sm:text-left">
              <h2 className="famous-best text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
                Best <span className="text-yellow-500">Popular</span>
                <br /> Items
              </h2>
            </div>
            <div className="top-container-right-child text-gray-300 mt-6 sm:mt-0 sm:ml-8">
              <p className="text-lg">
                Discover our best and most popular items that
                <br />
                everyone loves! From savory to sweet, we have it all.
              </p>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="bottom-container grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="item bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="img-section">
                  <img
                    className="w-full h-48 object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="content-section p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-yellow-400 font-semibold text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Famous;
