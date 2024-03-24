import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./SellerForm.css";

function SellerForm({ product, onClose, setShowSellerForm }) {
  const [formData, setFormData] = useState({
    productName: product.name,
    quantity: "",
    quality: "",
    shippingAddress: "",
    phoneNumber: "",
    deliveryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/submitOrder", formData);
      console.log("Order submitted successfully");
      alert("Your order is confirmed!!");
      setFormData({
        productName: product.name,
        quantity: "",
        quality: "",
        shippingAddress: "",
        phoneNumber: "",
        deliveryDate: "",
      });
      setShowSellerForm(false);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="popup1">
      <div className="popup1-content">
        <div className="popup1-details">
          <span className="close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h4>Product Checkout Form</h4>
          <form onSubmit={handleSubmit}>
            <label>
              Product Name:
              <input
                type="text"
                name="productName"
                value={formData.productName}
                readOnly
              />
            </label>
            <label>
              Quality:
              <select name="quality" onChange={handleChange}>
                <option value="">Select Quality</option>
                <option value="better">Better</option>
                <option value="good">Good</option>
                <option value="veryGood">Very Good</option>
                <option value="excellent">Excellent</option>
              </select>
            </label>
            <label>
              Quantity (kg):
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </label>
            <label>
              Shipping Address:
              <textarea
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </label>
            <label>
              Delivery Date:
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SellerForm;
