import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Basket = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  // Function to get appropriate emoji for food items
  const getFoodEmoji = (itemName: string) => {
    const name = itemName.toLowerCase();
    if (name.includes("momo") || name.includes("dumpling")) return "🥟";
    if (name.includes("biryani") || name.includes("rice")) return "🍛";
    if (name.includes("curry") || name.includes("chicken")) return "🍖";
    if (name.includes("paneer") || name.includes("cheese")) return "🧀";
    if (name.includes("samosa")) return "🥟";
    if (name.includes("noodle") || name.includes("chowmein")) return "🍜";
    if (name.includes("tikka")) return "🍢";
    if (name.includes("dessert") || name.includes("sweet")) return "🍰";
    if (name.includes("lassi") || name.includes("drink")) return "🥤";
    return "🍽️"; // Default food emoji
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-transparent transition-all"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sliding cart panel from RIGHT side */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out border-l border-gray-600">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-600">
            <h2 className="text-lg font-semibold text-orange-400">
              Your Order ({getTotalItems()} items)
            </h2>
            {/* Close Button */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-md text-orange-200 hover:text-orange-400 hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg
                  className="w-16 h-16 text-gray-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10m-10 0v5a2 2 0 002 2h6a2 2 0 002-2v-5"
                  />
                </svg>
                <h3 className="text-lg font-medium text-orange-400 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-orange-200 mb-4">
                  Add some delicious items from our menu!
                </p>
                <Link
                  to="/menu"
                  onClick={() => setIsCartOpen(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Browse Menu
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-700 rounded-lg p-3 border border-gray-600"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                      <span className="text-2xl">
                        {getFoodEmoji(item.name)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-orange-400 truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-orange-200">
                        $
                        {(
                          parseFloat(item.price.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-orange-200"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-orange-200"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 text-red-400 hover:text-red-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-600 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-orange-400">
                  Total:
                </span>
                <span className="text-xl font-bold text-orange-400">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <div className="space-y-2">
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-4 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 block border-2 border-orange-500 hover:border-orange-600"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-transparent hover:bg-orange-500 text-orange-400 hover:text-white py-3 px-4 rounded-xl font-bold text-center transition-all duration-300 border-2 border-orange-500 hover:border-orange-600"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
