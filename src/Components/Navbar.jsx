import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">
    <h1>logo</h1>
        </div>
        <div className="links">
            <ul>
                <li><Link to={'/adminportal/'}>home <HomeIcon/> </Link></li>
                <li><Link to={'/adminportal/product'}>Product <SearchIcon/> </Link></li>
                <li><Link to={'/adminportal/addproduct'}>AddproductItem <AddCircleOutlineIcon/>  </Link></li>
                <li><Link to={'/adminportal/cartitem'}>Cartitem <ShoppingCartIcon/>  </Link></li>
                <li><Link to={'/'}>logout <LogoutIcon/>  </Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
