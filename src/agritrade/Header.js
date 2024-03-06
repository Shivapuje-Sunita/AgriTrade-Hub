import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import the necessary icons
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-item">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search here"
              className="search-input"
            />
          </div>
        </div>
        <div className="header-item">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>add to cart</span>
        </div>
      </div>
      <div className="categories">
        <div className="category">
          <img
            src="https://th.bing.com/th/id/OIP.85gSt3W8VaD0u3_8tD0JIAHaEo?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="fruits"
          />
          <span>Fruits</span>
        </div>
        <div className="category">
          <img
            src="https://th.bing.com/th/id/OIP.40MsSqBdmqwQf5JckS4wzwHaF4?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="vegetables"
          />
          <span>Vegetables</span>
        </div>
        <div className="category">
          <img
            src="https://c8.alamy.com/comp/DEJD6D/ricecornpeanutsoybean-and-wheat-DEJD6D.jpg"
            alt="groceries"
          />
          <span>Staples</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
