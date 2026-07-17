import React from "react";

const ProductList = () => {
  const categories = ["electronics", "clothing", "home appliances"];
  const products = [
    { id: 1, name: "camera", price: 10000, category: "electronics" },
    { id: 2, name: "T-shirt", price: 500, category: "clothing" },
    { id: 3, name: "pots", price: 2000, category: "home appliances" },
    { id: 4, name: "laptop", price: 50000, category: "electronics" },
    { id: 5, name: "sheos", price: 2000, category: "clothing" },
    { id: 6, name: "fridge", price: 30000, category: "home applisnces" },
  ];

  const handlefilter =(e)=>{
     e.preventDefault();
     const filterProducts= 
  }
  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <h2>Product List</h2>
      <select name="categories" id="categories" onClick={handlefilter}>
        <option value="electronics">electronics</option>
        <option value="clothing">clothing</option>
        <option value="home appliances">home appliance</option>
      </select>
      <div>
        {products.map((products) => {
          return (
            <div key={products.id}>
              <h3>{products.name}</h3>
              <h4>{products.price}</h4>
              <h4>{products.category}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
