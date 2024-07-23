import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

// Import images
import aloeVera from "../images/aloe.jpg";
import snakePlant from "../images/snake.jpg";
import fiddleLeafFig from "../images/fidle.jpg";
import monstera from "../images/monstera.jpg";
import orchid from "../images/orchid.jpg";
import peaceLily from "../images/peace.jpg";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    thumbnail: aloeVera,
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    category: "Succulents",
    thumbnail: snakePlant,
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 20,
    category: "Foliage",
    thumbnail: fiddleLeafFig,
  },
  {
    id: 4,
    name: "Monstera",
    price: 25,
    category: "Foliage",
    thumbnail: monstera,
  },
  {
    id: 5,
    name: "Orchid",
    price: 30,
    category: "Flowering",
    thumbnail: orchid,
  },
  {
    id: 6,
    name: "Peace Lily",
    price: 35,
    category: "Flowering",
    thumbnail: peaceLily,
  },
];

const ProductListingPage = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const handleAddToCart = (plant) => {
    addToCart({ ...plant, quantity: 1 });
  };

  return (
    <div className="product-listing-page">
      {["Succulents", "Foliage", "Flowering"].map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-category">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="plant-item">
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={cartItems.some((item) => item.id === plant.id)}
                  >
                    {cartItems.some((item) => item.id === plant.id)
                      ? "In Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
