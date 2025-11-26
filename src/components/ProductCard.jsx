import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-3 aspect-[3/4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-sm font-medium mb-1">{title}</h3>
      <p className="text-sm font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;
