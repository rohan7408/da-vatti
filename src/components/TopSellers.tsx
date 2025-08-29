const TopSellers = () => {
  const topSellerItems = [
    {
      id: 1,
      name: "Plain Basmati Rice",
      price: 2.99,
      image: "/assets/da-vatti-ashfield.webp", // Using placeholder until we have specific images
      description: "Aromatic basmati rice cooked to perfection",
    },
    {
      id: 2,
      name: "Garlic Naan",
      price: 3.99,
      image: "/assets/da-vatti-ashfield.webp", // Using placeholder until we have specific images
      description: "Fresh baked naan bread with aromatic garlic",
    },
    {
      id: 3,
      name: "Steamed Momo",
      price: 10.99,
      image: "/assets/da-vatti-ashfield.webp", // Using placeholder until we have specific images
      description: "Traditional Nepalese dumplings served with spicy sauce",
    },
    {
      id: 4,
      name: "Butter Chicken",
      price: 17.99,
      image: "/assets/da-vatti-ashfield.webp", // Using placeholder until we have specific images
      description:
        "Delicious chicken tikka cooked in rich creamy red tomato sauce",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              TOP SELLERS
            </h2>
            <button className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-200">
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topSellerItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-48 h-48 sm:h-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      ${item.price}
                    </span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Menu Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-800 px-8 py-3 rounded-lg font-semibold transition-all duration-200 border border-gray-300 hover:border-orange-500">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
