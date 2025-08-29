import { useState } from "react";
import { useCart } from "../context/CartContext";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const { addToCart } = useCart();

  const menuCategories = [
    { id: "appetizers", name: "Appetizers", icon: "🥟" },
    { id: "mains", name: "Main Courses", icon: "🍛" },
    { id: "rice-noodles", name: "Rice & Noodles", icon: "🍜" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Steamed Momo",
        description:
          "Traditional Nepalese dumplings filled with spiced vegetables or chicken, served with tangy tomato chutney",
        price: "$10.99",
        image: "/api/placeholder/300/200",
        spicy: 2,
        vegetarian: true,
        popular: true,
      },
      {
        name: "Fried Momo",
        description:
          "Crispy fried dumplings filled with seasoned meat or vegetables, golden brown and delicious",
        price: "$11.99",
        image: "/api/placeholder/300/200",
        spicy: 2,
        vegetarian: false,
        popular: false,
      },
      {
        name: "Samosa Chaat",
        description:
          "Crispy samosas topped with yogurt, tamarind chutney, and fresh coriander",
        price: "$8.99",
        image: "/api/placeholder/300/200",
        spicy: 1,
        vegetarian: true,
        popular: false,
      },
      {
        name: "Paneer Tikka",
        description:
          "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions",
        price: "$12.99",
        image: "/api/placeholder/300/200",
        spicy: 2,
        vegetarian: true,
        popular: true,
      },
      {
        name: "Chicken Sekuwa",
        description:
          "Traditional Nepalese grilled chicken marinated in aromatic spices and herbs",
        price: "$14.99",
        image: "/api/placeholder/300/200",
        spicy: 3,
        vegetarian: false,
        popular: true,
      },
    ],
    mains: [
      {
        name: "Butter Chicken",
        description:
          "Tender chicken in rich, creamy tomato-based sauce with aromatic spices",
        price: "$17.99",
        image: "/api/placeholder/300/200",
        spicy: 2,
        vegetarian: false,
        popular: true,
      },
      {
        name: "Dal Bhat Tarkari",
        description:
          "Traditional Nepalese meal with lentil soup, rice, and seasonal vegetable curry",
        price: "$15.99",
        image: "/api/placeholder/300/200",
        spicy: 2,
        vegetarian: true,
        popular: true,
      },
      {
        name: "Lamb Rogan Josh",
        description:
          "Slow-cooked lamb in rich gravy with Kashmiri spices and yogurt",
        price: "$19.99",
        image: "/api/placeholder/300/200",
        spicy: 3,
        vegetarian: false,
        popular: false,
      },
      {
        name: "Palak Paneer",
        description:
          "Fresh cottage cheese cubes in creamy spinach gravy with garlic and ginger",
        price: "$16.99",
        image: "/api/placeholder/300/200",
        spicy: 1,
        vegetarian: true,
        popular: true,
      },
      {
        name: "Chicken Curry",
        description:
          "Traditional Nepalese style chicken curry with onions, tomatoes, and authentic spices",
        price: "$16.99",
        image: "/api/placeholder/300/200",
        spicy: 2,
        vegetarian: false,
        popular: false,
      },
    ],
    "rice-noodles": [
      {
        name: "Chicken Biryani",
        description:
          "Fragrant basmati rice layered with spiced chicken, saffron, and fresh herbs",
        price: "$18.99",
        image: "/api/placeholder/300/200",
        spicy: 2,
        vegetarian: false,
        popular: true,
      },
      {
        name: "Vegetable Fried Rice",
        description:
          "Wok-tossed rice with mixed vegetables, soy sauce, and aromatic spices",
        price: "$13.99",
        image: "/api/placeholder/300/200",
        spicy: 1,
        vegetarian: true,
        popular: false,
      },
      {
        name: "Chowmein",
        description:
          "Stir-fried noodles with vegetables and your choice of chicken or vegetarian",
        price: "$14.99",
        image: "/api/placeholder/300/200",
        spicy: 2,
        vegetarian: true,
        popular: true,
      },
      {
        name: "Plain Basmati Rice",
        description:
          "Perfectly steamed long-grain basmati rice, fragrant and fluffy",
        price: "$2.99",
        image: "/api/placeholder/300/200",
        spicy: 0,
        vegetarian: true,
        popular: false,
      },
      {
        name: "Jeera Rice",
        description: "Aromatic basmati rice tempered with cumin seeds and ghee",
        price: "$4.99",
        image: "/api/placeholder/300/200",
        spicy: 0,
        vegetarian: true,
        popular: false,
      },
    ],
    desserts: [
      {
        name: "Gulab Jamun",
        description:
          "Soft milk dumplings soaked in rose-flavored sugar syrup, served warm",
        price: "$6.99",
        image: "/api/placeholder/300/200",
        spicy: 0,
        vegetarian: true,
        popular: true,
      },
      {
        name: "Kheer",
        description: "Traditional rice pudding with milk, cardamom, and nuts",
        price: "$5.99",
        image: "/api/placeholder/300/200",
        spicy: 0,
        vegetarian: true,
        popular: false,
      },
      {
        name: "Kulfi",
        description:
          "Dense, creamy frozen dessert flavored with cardamom and pistachios",
        price: "$4.99",
        image: "/api/placeholder/300/200",
        spicy: 0,
        vegetarian: true,
        popular: false,
      },
      {
        name: "Rasgulla",
        description: "Spongy cottage cheese balls in light sugar syrup",
        price: "$5.99",
        image: "/api/placeholder/300/200",
        spicy: 0,
        vegetarian: true,
        popular: false,
      },
      {
        name: "Jalebi",
        description:
          "Crispy spiral-shaped sweet soaked in saffron-flavored sugar syrup",
        price: "$6.99",
        image: "/api/placeholder/300/200",
        spicy: 0,
        vegetarian: true,
        popular: true,
      },
    ],
  };

  const getSpicyLevel = (level: number) => {
    const spiceIcons = ["🌶️", "🌶️🌶️", "🌶️🌶️🌶️"];
    return level > 0 ? spiceIcons[level - 1] : "";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover authentic Nepalese and Indian flavors crafted with
            traditional recipes and the finest ingredients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl shadow-lg p-2">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 m-1 rounded-xl font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
              }`}
            >
              <span className="text-lg mr-2">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map(
            (item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Item Image */}
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🍽️</div>
                  </div>
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  {item.vegetarian && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Vegetarian
                    </div>
                  )}
                </div>

                {/* Item Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {item.spicy > 0 && (
                        <span className="text-xs">
                          {getSpicyLevel(item.spicy)}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      {item.price}
                    </span>
                    <button
                      onClick={() =>
                        addToCart({
                          id: `${activeCategory}-${index}`,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          description: item.description,
                          category: activeCategory,
                        })
                      }
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Decide? Try Our Chef's Special
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our experienced chefs create a perfect combination meal
              featuring the best of Nepalese and Indian cuisine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Order Chef's Special
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:border-gray-400 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
                View Full Menu PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
