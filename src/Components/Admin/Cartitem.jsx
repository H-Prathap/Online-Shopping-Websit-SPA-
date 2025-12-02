import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../assets/Styles/cartitem.css';
import { useNavigate } from 'react-router-dom';

const Cartitem = () => {

  const [cartitems, setCartitems] = useState([]);

  const navigate = useNavigate();

  const fetchcart = async () => {
    try {
      const response = await axios.get('http://localhost:4000/cartitems');
      setCartitems(response.data);
    } catch (error) {
      console.log("API error:", error);
    }
  };

  useEffect(() => {
    fetchcart();
  }, []);

  // ✅ Navigate to ViewCard
  let viewItem = (id) => {
    navigate(`/AdminPortal/ViewCard/${id}`);
  };

  // ✅ Delete individual item
  let deleteproduct = async (id) => {
    let confirmDelete = window.confirm("Do you want to delete this item?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/cartitems/${id}`);
        fetchcart();
      } catch (error) {
        console.log("Delete error:", error);
        alert("Item not deleted");
      }
    }
  };

  return (
    <div className="cart-table">
      <h1>Your Cart</h1>

      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price </th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {cartitems.map((item, index) => {
            const { id, image, title, price } = item;

            return (
              <tr key={id || index}>
                <td>{index + 1}</td>

                {/* ✅ Click Image to navigate */}
                <td
                  onClick={() => viewItem(id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={image} alt={title} width="60" />
                </td>

                {/* ✅ Click Title to navigate */}
                <td
                  onClick={() => viewItem(id)}
                  style={{ cursor: "pointer" }}
                >
                  {title}
                </td>

                <td>₹ {price * 80}</td>

                <td>
                  <button
                    onClick={() => deleteproduct(id)}
                    className="remove-btn"
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}

          {/* ✅ Grand Total Row */}
          <tr className="grand-total-row">
            <td colSpan="3"></td>
            <td style={{ fontWeight: "bold" }}>
              Grand Total: ₹ {cartitems.reduce((acc, item) => acc + item.price * 80, 0)}
            </td>
            
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default Cartitem;
