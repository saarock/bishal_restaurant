import React, { useState } from 'react';

const AllTheItems = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  const menuItems = [
    { name: 'Chicken Momo', price: '$5.99', image: 'https://cdn3d.iconscout.com/3d/premium/thumb/momos-3d-icon-download-in-png-blend-fbx-gltf-file-formats--momo-dumpling-gyoza-indian-food-pack-drink-icons-10522012.png?f=webp', category: 'Non-Veg', rating: 4.8 },
    { name: 'Paneer Momo', price: '$6.49', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGFswRoOm85yC4mHTr02XqoHGoYlbXFDLOg&s', category: 'Veg', rating: 4.5 },
    { name: 'Veg Momo', price: '$5.49', image: 'https://example.com/veg-momo.jpg', category: 'Veg', rating: 4.7 },
    { name: 'Spicy Chicken Momo', price: '$6.99', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
  ];

  // Filter menu items based on search query, selected category, and price filter
  const filteredItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (categoryFilter === 'All' || item.category === categoryFilter) &&
    (priceFilter === 'All' || (priceFilter === 'Under 6' ? parseFloat(item.price.slice(1)) < 6 : parseFloat(item.price.slice(1)) >= 6))
  );

  return (
    <section className="alltheitems bg-white text-gray-800 py-16" id="menu">
      <div className="container mx-auto px-4">
        {/* Top Section with Search */}
        <div className="top-container flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="top-container-left-child text-center sm:text-left">
            <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
              Our <span className="text-yellow-500">Best</span><br /> Menus
            </h2>
          </div>
          <div className="top-container-right-child text-gray-600 mt-6 sm:mt-0 sm:ml-8">
            <p className="text-lg">
              Discover our best and most popular items that everyone loves! From savory to sweet, we have it all.
            </p>
          </div>
        </div>

        {/* Category and Price Filters */}
        <div className="filter-buttons text-center mb-6">
          <button className={`px-6 py-2 rounded-lg mr-4 ${categoryFilter === 'All' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`} onClick={() => setCategoryFilter('All')}>
            All Categories
          </button>
          <button className={`px-6 py-2 rounded-lg mr-4 ${categoryFilter === 'Veg' ? 'bg-green-500 text-white' : 'bg-gray-200'}`} onClick={() => setCategoryFilter('Veg')}>
            Veg
          </button>
          <button className={`px-6 py-2 rounded-lg ${categoryFilter === 'Non-Veg' ? 'bg-red-500 text-white' : 'bg-gray-200'}`} onClick={() => setCategoryFilter('Non-Veg')}>
            Non-Veg
          </button>
        </div>

        {/* Price Filter */}
        <div className="price-filter text-center mb-6">
          <button className={`px-6 py-2 rounded-lg mr-4 ${priceFilter === 'All' ? 'bg-gray-300' : 'bg-gray-200'}`} onClick={() => setPriceFilter('All')}>All Prices</button>
          <button className={`px-6 py-2 rounded-lg mr-4 ${priceFilter === 'Under 6' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setPriceFilter('Under 6')}>Under $6</button>
          <button className={`px-6 py-2 rounded-lg ${priceFilter === '6 and Above' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setPriceFilter('6 and Above')}>$6 and Above</button>
        </div>

        {/* Search Input */}
        <div className="search-container mb-6 text-center">
          <input
            type="text"
            placeholder="Search menu items..."
            className="p-2 w-full sm:w-1/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Menu Items */}
        <div className="bottom-container grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={index} className="item rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="img-section">
                  <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
                </div>
                <div className="content-section p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-yellow-500 font-semibold text-lg">{item.price}</p>
                  <div className="rating flex justify-center items-center space-x-2 mt-2">
                    <span className="text-yellow-400 text-xl">{"★".repeat(Math.round(item.rating))}{"☆".repeat(5 - Math.round(item.rating))}</span>
                    <span className="text-gray-600">({item.rating})</span>
                  </div>
                  <div className="category mt-2">
                    <span className={`text-sm px-2 py-1 rounded-full ${item.category === 'Veg' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No items found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllTheItems;
