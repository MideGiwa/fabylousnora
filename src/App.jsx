import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import AboutUs from "./Pages/Aboutus";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShopWomen from "./Pages/ShopForWomen";
import ShopMen from "./Pages/ShopForMen";
import ShopChildren from "./Pages/ShopForChildren";
import ShopAccessories from "./Pages/ShopForAccessories";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* These paths match the structure: to={`/category/${cat.toLowerCase()}`} */}
        <Route path="/category/men" element={<ShopMen />} />
        <Route path="/category/women" element={<ShopWomen />} />
        <Route path="/category/children" element={<ShopChildren />} />
        <Route path="/category/accessories" element={<ShopAccessories />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;