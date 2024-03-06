import React, { useState, useEffect } from "react";
import "./ProductList.css";
import Header from "./Header";

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div id="products">
        {products.map((product, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-info">
              <h3>{product.title}</h3>
              <p>Category: {product.category}</p>
              <p>{product.description}</p>
              <p className="rating">
                {product.rating.rate}/5 ({product.rating.count})
              </p>
              <p className="price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
