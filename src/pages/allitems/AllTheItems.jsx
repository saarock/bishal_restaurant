import React, { useState } from 'react';

const AllTheItems = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  const menuItems = [
    { name: 'Chicken si Momo', price: '225 RS', image: 'https://cdn3d.iconscout.com/3d/premium/thumb/momos-3d-icon-download-in-png-blend-fbx-gltf-file-formats--momo-dumpling-gyoza-indian-food-pack-drink-icons-10522012.png?f=webp', category: 'Non-Veg', rating: 4.8 },
    { name: 'Paneer Momo', price: '6.49 RS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGFswRoOm85yC4mHTr02XqoHGoYlbXFDLOg&s', category: 'Veg', rating: 4.5 },
    { name: 'Veg Momo', price: '5.49 RS', image: 'https://example.com/veg-momo.jpg', category: 'Veg', rating: 4.7 },
    { name: 'Spicy Chicken Momo', price: '6.99 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Saadha Khana', price: '150 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Veg', rating: 4.9 },
    { name: 'Chicken Khana', price: '250 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Fish Khana', price: '300 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Mutton Khana', price: '350 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Omelet Anda', price: '220 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Chicken Fry Rice', price: '200 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Egg Fry Rice', price: '170 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Jira Fry Rice', price: '170 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Veg Fry Rice', price: '150 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Veg', rating: 4.9 },
    { name: 'Chicken Curry', price: '140 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Chicken Butter Masala', price: '250 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Egg Omelet', price: '70 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Egg Curry', price: '80 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Omelet Curry', price: '90 RS', image: 'https://example.com/spicy-chicken-momo.jpg', category: 'Non-Veg', rating: 4.9 },
    { name: 'Muttor Paneer', price: '150 RS', image: 'https://example.com/muttor-paneer.jpg', category: 'Veg', rating: 4.8 },
    { name: 'Paalak Paneer', price: '150 RS', image: 'https://example.com/paalak-paneer.jpg', category: 'Veg', rating: 4.7 },
    { name: 'Mix Veg', price: '110 RS', image: 'https://example.com/mix-veg.jpg', category: 'Veg', rating: 4.6 },
    { name: 'Daal Fry', price: '70 RS', image: 'https://example.com/daal-fry.jpg', category: 'Veg', rating: 4.5 },
    { name: 'Raajma', price: '80 RS', image: 'https://example.com/raajma.jpg', category: 'Veg', rating: 4.6 },
    { name: 'Rajma Special', price: '120 RS', image: 'https://example.com/rajma-special.jpg', category: 'Veg', rating: 4.8 },
    { name: 'Aaalu Muttor', price: '100 RS', image: 'https://example.com/aaalu-muttor.jpg', category: 'Veg', rating: 4.7 },
    { name: 'Chana Masala', price: '100 RS', image: 'https://example.com/chana-masala.jpg', category: 'Veg', rating: 4.7 },
    { name: 'Aaalu Dam', price: '120 RS', image: 'https://example.com/aaalu-dam.jpg', category: 'Veg', rating: 4.8 },
    { name: 'Mushroom Curry', price: '150 RS', image: 'https://example.com/mushroom-curry.jpg', category: 'Veg', rating: 4.9 }
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
