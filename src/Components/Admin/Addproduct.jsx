import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/Styles/addproduct.css';

const Addproduct = () => {
  const [newproducts, setNewProducts] = useState({
    title: '',
    price: '',
    Description: '',
    image: '',
    category: '',
    rating: {
      rate: '',
      count: '',
    },
  });

  const handleinput = (e) => {
    const { name, value } = e.target;

    if (name === 'rate' || name === 'count') {
      setNewProducts({
        ...newproducts,
        rating: {
          ...newproducts.rating,
          [name]: value,
        },
      });
    } else {
      setNewProducts({
        ...newproducts,
        [name]: value,
      });
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    // ✅ prepare product object with correct data types
    const productToSend = {
      ...newproducts,
      price: Number(newproducts.price),
      rating: {
        rate: Number(newproducts.rating.rate),
        count: Number(newproducts.rating.count),
      },
    };

    try {
      let response = await axios.post(
        "http://localhost:4000/products",
        productToSend
      );
      
      alert("✅ Product Added Successfully!");

      // ✅ reset form
      setNewProducts({
        title: '',
        price: '',
        Description: '',
        image: '',
        category: '',
        rating: {
          rate: '',
          count: '',
        },
      });

      console.log("Server Response: ", response.data);

    } catch (error) {
      console.log("❌ Error adding product:", error);
      alert("Failed to add product!");
    }
  };

  return (
    <div className="addproduct">
      <h1>Add Product</h1>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="inputs">
            <input type="text" placeholder="Enter title name" name="title" value={newproducts.title} onChange={handleinput} />
            <input type="number" placeholder="Enter price in $" name="price" value={newproducts.price} onChange={handleinput} />
            <input type="text" placeholder="Enter Description" name="Description" value={newproducts.Description} onChange={handleinput} />
            <select name="category" value={newproducts.category} onChange={handleinput}>
              <option value="">Select Category</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
            <input type="text" placeholder="Enter image URL" name="image" value={newproducts.image} onChange={handleinput} />
            <input type="number" placeholder="Enter rating" name="rate" value={newproducts.rating.rate} onChange={handleinput} />
            <input type="number" placeholder="Enter count" name="count" value={newproducts.rating.count} onChange={handleinput} />
          </div>
          <button>Add Products</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
