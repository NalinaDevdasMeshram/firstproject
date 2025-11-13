import React, { useState } from "react";
const Product = [
  { id: 1, name: "laptop", price: "50,000", category: "Electronics" },
  { id: 2, name: "pants", price: "5889", category: "Clothings" },
  { id: 3, name: "sofa", price: "25000", category: "Home" },
  { id: 4, name: "smartWatch", price: "5000", category: "Electronics" },
  { id: 5, name: "vaccume clearn", price: "599", category: "Home" },
  { id: 6, name: "T-shirt", price: "499", category: "Clothings" },
];

const categories = ["Electronics", "Home", "Clothings"];
const ProductList = () => {
  const [selectCategory, setSelectCategory] = useState("");

  const handlecheckbox = (category) => {
    console.log(category);
    if (selectCategory === category) {
      setSelectCategory("");
    } else {
      setSelectCategory(category);
    }
  };
  const filteredProduct =
    selectCategory.length === 0
      ? Product
      : Product.filter((p) => selectCategory.includes(p.category));
  return (
    <div>
      <h4>Product Listing</h4>
      <label>filtered by category:</label>
      <div>
        {categories.map((val) => (
          <label key={val}>
            <input
              type="checkbox"
              value={val}
              checked={selectCategory.includes(val)}
              onChange={() => handlecheckbox(val)}
            />
            {val}
          </label>
        ))}
      </div>
      <div>
        {filteredProduct.map((Product) => (
          <div key={Product.id}>
            <h5>name:{Product.name}</h5>
            <p>price:{Product.price}</p>
            <span>category:{Product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
