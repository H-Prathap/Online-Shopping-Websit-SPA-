import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/Styles/home.css';

import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="dashboard-box">

        <h1>Welcome to Our Store 🛍️</h1>
        <p>Select an option below to continue shopping.</p>

        <div className="cards-wrapper">

          {/* Products */}
          <div className="card" onClick={() => navigate('/adminportal/product')}>
            <StoreIcon className="icon" />
            <h2>Products</h2>
            <p>View all products</p>
          </div>

          {/* Cart Items */}
          <div className="card" onClick={() => navigate('/adminportal/cartitem')}>
            <ShoppingCartIcon className="icon" />
            <h2>Cart Items</h2>
            <p>Check your added products</p>
          </div>

          {/* Logout */}
          <div
            className="card"
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            <LogoutIcon className="icon" />
            <h2>Logout</h2>
            <p>Sign out of your account</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
