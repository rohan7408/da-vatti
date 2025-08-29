import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Basket, Checkout, Toast } from "./components";
import { Home, MenuPage } from "./pages";
import { CartProvider, useCart } from "./context/CartContext";

const AppContent = () => {
  const { toastMessage, showToast, setShowToast } = useCart();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
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
