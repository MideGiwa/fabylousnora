import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          {/* Section Title */}
          <h2
            style={{
              fontFamily: '"Libre Baskerville", serif',
              fontWeight: 700,
              fontStyle: "normal", // Bold handled by fontWeight
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0",
            }}
          >
            {title}
          </h2>

          {/* Shop Now Button */}
          <button
            className="hover:underline"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 700,
              fontStyle: "normal", // Bold handled by fontWeight
              fontSize: "16px",
              lineHeight: "100%",
              color: "#BD007C",       // primary text color
              backgroundColor: "#FFFFFF",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              padding: "6px 16px",   // optional for spacing
            }}
          >
            Shop Now
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}   // ← passed to ProductCard
              price={product.price}   // ← passed to ProductCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
