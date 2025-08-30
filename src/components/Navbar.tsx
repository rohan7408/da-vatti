import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems, setIsCartOpen } = useCart();

  const navItems = [
    { name: "Home", href: "/", section: null },
    { name: "Menu", href: "/menu", section: null },
    { name: "Locations", href: "/", section: "locations" },
    { name: "Reviews", href: "/", section: "reviews" },
  ];

  // Smooth scroll function
  const smoothScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle navigation with smooth scroll
  const handleNavigation = (item: (typeof navItems)[0]) => {
    setIsMenuOpen(false);

    if (item.section) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          smoothScrollToSection(item.section!);
        }, 100);
      } else {
        // If already on home page, just scroll
        smoothScrollToSection(item.section);
      }
    }
  };

  // Handle home navigation (always navigate and scroll to top)
  const handleHomeNavigation = () => {
    setIsMenuOpen(false);
    navigate("/");
    // Always scroll to top when going to home
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  // Handle menu navigation (always scroll to top)
  const handleMenuNavigation = () => {
    setIsMenuOpen(false);
    navigate("/menu");
    // Always scroll to top when going to menu
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  // Handle hash changes and initial load
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && location.pathname === "/") {
      setTimeout(() => {
        smoothScrollToSection(hash);
      }, 100);
    }
  }, [location]);

  // Check if nav item is active
  const isNavItemActive = (item: (typeof navItems)[0]) => {
    if (item.section) {
      return location.pathname === "/" && location.hash === `#${item.section}`;
    }
    return location.pathname === item.href;
  };

  return (
    <nav className="bg-gray-800 shadow-lg fixed w-full top-0 z-50 border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-auto rounded-md object-contain cursor-pointer hover:opacity-80 transition-opacity"
                src="/assets/IMG_9886.jpg"
                alt="Da Vatti Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation & Cart */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.section ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isNavItemActive(item)
                        ? "text-orange-400"
                        : "text-orange-300 hover:text-orange-400"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : item.name === "Menu" ? (
                  <button
                    key={item.name}
                    onClick={handleMenuNavigation}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isNavItemActive(item)
                        ? "text-orange-400"
                        : "text-orange-300 hover:text-orange-400"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : item.name === "Home" ? (
                  <button
                    key={item.name}
                    onClick={handleHomeNavigation}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isNavItemActive(item)
                        ? "text-orange-400"
                        : "text-orange-300 hover:text-orange-400"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isNavItemActive(item)
                        ? "text-orange-400"
                        : "text-orange-300 hover:text-orange-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-orange-300 hover:text-orange-400 transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z"
                />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button & cart */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-orange-300 hover:text-orange-400 transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z"
                />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-600 inline-flex items-center justify-center p-2 rounded-md text-orange-300 hover:text-orange-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 shadow-lg border-t border-gray-600">
            {navItems.map((item) =>
              item.section ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium ${
                    isNavItemActive(item)
                      ? "text-orange-400"
                      : "text-orange-300 hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </button>
              ) : item.name === "Menu" ? (
                <button
                  key={item.name}
                  onClick={handleMenuNavigation}
                  className={`block w-full text-left px-3 py-2 text-base font-medium ${
                    isNavItemActive(item)
                      ? "text-orange-400"
                      : "text-orange-300 hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </button>
              ) : item.name === "Home" ? (
                <button
                  key={item.name}
                  onClick={handleHomeNavigation}
                  className={`block w-full text-left px-3 py-2 text-base font-medium ${
                    isNavItemActive(item)
                      ? "text-orange-400"
                      : "text-orange-300 hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isNavItemActive(item)
                      ? "text-orange-400"
                      : "text-orange-300 hover:text-orange-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
