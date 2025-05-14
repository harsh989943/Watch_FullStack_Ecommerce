import React, { useState, useEffect } from "react";
import "./Popular.css";
import Item from "../Item/Item";


function Popular() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data))
      .catch((error) => console.error('Error fetching popular products:', error));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR SELLS</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.length > 0 ? (
          popularProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No popular products found.</p>
        )}
      </div>
    </div>
  );
}


export default Popular;