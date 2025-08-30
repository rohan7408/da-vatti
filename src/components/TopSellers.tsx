import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const TopSellers = () => {
  const { addToCart } = useCart();

  const topSellerItems = [
    {
      id: 1,
      name: "Plain Basmati Rice",
      price: "2.99",
      image: "/assets/plain-basmati-rice-3.png",
      description: "Aromatic basmati rice cooked to perfection",
    },
    {
      id: 2,
      name: "Garlic Naan",
      price: "3.99",
      image: "/assets/garlic-naan-11.png",
      description: "Fresh baked naan bread with aromatic garlic",
    },
    {
      id: 3,
      name: "Steamed Momo",
      price: "10.99",
      image: "/assets/steamed-momo.png",
      description: "Traditional Nepalese dumplings served with spicy sauce",
    },
    {
      id: 4,
      name: "Butter Chicken",
      price: "17.99",
      image: "/assets/butter-chicken-11.png",
      description:
        "Delicious chicken tikka cooked in rich creamy red tomato sauce",
    },
  ];

  return (
    <section className="py-16 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
              TOP SELLERS
            </h2>
            <button className="flex items-center text-orange-300 hover:text-orange-400 transition-colors duration-200">
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
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-600 hover:border-orange-400"
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
                    <h3 className="text-xl font-bold text-orange-400 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-orange-200 text-sm mb-4 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl font-bold text-orange-400 shrink-0">
                      ${item.price}
                    </span>
                    <button
                      onClick={() =>
                        addToCart({
                          id: `top-seller-${item.id}`,
                          name: item.name,
                          price: `$${item.price}`,
                          image: item.image,
                          description: item.description,
                          category: "Top Sellers",
                        })
                      }
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border-2 border-orange-500 hover:border-orange-600 shrink-0"
                    >
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
          <Link
            to="/menu"
            className="bg-transparent hover:bg-orange-500 text-orange-400 hover:text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 border-2 border-orange-500 hover:border-orange-600 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
