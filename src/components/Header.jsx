import { useState } from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import NoraLogo from "./IMG/noralogo.png";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Men", "Women", "Children", "Accessories"];

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top Header with padding */}
      <div className="py-4 px-[6%] md:px-[6%]">
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={NoraLogo}
              alt="Fabulous by Nora Logo"
              className="w-10 h-10 object-contain"
            />

            <h1
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "rgba(189, 0, 124, 1)",
              }}
            >
              FABULOUS BY NORA
            </h1>
          </Link>

          {/* Top Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-primary transition-colors">
              Shop
            </a>
            <Link
              to="/aboutus"
              className="hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <a href="#custom" className="hover:text-primary transition-colors">
              Custom Orders
            </a>
            <a href="#refund" className="hover:text-primary transition-colors">
              Refund Policy
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* SINGLE Perfect Full-Width Line */}
  <div className="relative h-0">
  {/* Changed 'border-border' to 'border-gray-200' */}
  <div className="absolute left-0 right-0 border-t border-gray-200"></div>
</div>

      {/* CATEGORY NAV — UPDATED WITH LINKS */}
      <div className="px-[6%] mt-4">
        <nav
          className="flex items-center gap-4 bg-[#CCCCCC1A] justify-between"
          style={{
            width: "458px",
            height: "41px",
            opacity: 1,
            borderRadius: "8px",
            padding: "0 12px",
          }}
        >
          {categories.map((cat) => (
            <Link // Changed from <button> to <Link>
              key={cat}
              to={cat === "All" ? "/" : `/category/${cat.toLowerCase()}`} // Dynamic routing
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium transition-all
                ${
                  activeCategory === cat
                    ? "bg-[#BD007C] text-white px-3 py-1 rounded-md"
                    : "text-[#BD007C] hover:bg-[#BD007C] hover:text-white px-3 py-1 rounded-md"
                }
              `}
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;