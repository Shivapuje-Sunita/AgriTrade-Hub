import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Popup from "./ProductDetail";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:9000/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <header>
        <h1>Product List</h1>
      </header>
      <div id="products" className={showPopup ? "blur" : ""}>
        {products.map((product) => (
          <div key={product._id} className="card">
            <div className="card-image">
              <img
                src={product.image}
                alt={product.name}
                onClick={() => handleImageClick(product)}
              />
              <div className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Humnabad</span>
              </div>
            </div>
            <div className="card-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">₹ {product.price}kg</p>
            </div>
          </div>
        ))}
      </div>
      {showPopup && <Popup product={selectedProduct} onClose={closePopup} />}
    </>
  );
}

export default ProductList;
