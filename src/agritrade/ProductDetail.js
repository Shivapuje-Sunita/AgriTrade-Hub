import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";
import SellerForm from "./SellerForm";

function ProductDetail({ product, onClose }) {
  const [imageVisible, setImageVisible] = useState(true);
  const [showSellerForm, setShowSellerForm] = useState(false);

  const toggleImageVisibility = () => {
    setImageVisible(!imageVisible);
  };

  const handleSellButtonClick = () => {
    setShowSellerForm(true);
  };

  const closeSellerForm = () => {
    setShowSellerForm(false);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-details">
          <span className="close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h2>{product.name}</h2>
          {imageVisible && (
            <div className="popup1">
              <img src={product.image} alt="Enlarged" />
            </div>
          )}
          <div className="product-info">
            <p className="price"> ₹ {product.price}kg</p>
            <p className="info">Last 30 Days</p>
            <div>
              <button className="high-button">High: ₹ {product.high}</button>
              <button className="low-button">Low: ₹ {product.low}</button>
            </div>
            <p className="info1">Fundamentals</p>
            <p>Description: {product.description}</p>
            <p>Sowing Months: {product.sowingmonths}</p>
            <p>Yield: {product.yield}</p>
            <div className="location1">
              <span>Humnabad</span>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div>
              <button className="sell-button" onClick={handleSellButtonClick}>
                PLACE SELL REQUEST
              </button>
            </div>
          </div>
        </div>
      </div>
      {showSellerForm && (
        <SellerForm
          product={product}
          onClose={closeSellerForm}
          setShowSellerForm={setShowSellerForm}
        />
      )}
    </div>
  );
}

export default ProductDetail;
