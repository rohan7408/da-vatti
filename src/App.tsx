import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Basket, Checkout, Toast } from "./components";
import { Home, MenuPage, BookingPage } from "./pages";
import { CartProvider, useCart } from "./context/CartContext";

const AppContent = () => {
  const { toastMessage, showToast, setShowToast } = useCart();

  return (
    <div className="App bg-gray-700 text-orange-400 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <Basket />
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="success"
      />
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;
