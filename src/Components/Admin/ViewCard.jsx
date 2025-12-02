import axios from 'axios'
import React, { useEffect,useState} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import '../../assets/Styles/view.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ViewCard = () => {
  let params=useParams()
  let productId=params.id
  // console.log(params)
  const [card, setCard] = useState({})
  let productapi=async ()=>{
    let productData = await axios.get(`http://localhost:4000/store/${productId}`)
    setCard(productData.data)
  }
  useEffect(()=>{
    productapi();
},[])
  // console.log(card)
  let {id, title, price, description, category, image, rating, } = card
  let navigate = useNavigate();
  let addtocart=async()=>{
    let bool=window.confirm("do you want to add this product to cart")
   if(bool){
    await axios.post('http://localhost:4000/cartitems',card)
    alert("product add the cart")
    
   }
   else{
    alert("product not added")
   }
  }
  return (
    <>
      <div className="viewcard">
      <div className="card">
          <div className="left">
            <div className="title">{title}</div>
      <img src={image} alt="" />
     <div className="but"> 
      <button onClick={addtocart}>
        Add to cart
        </button></div>
        </div>
     <div className="right">
  <div className="price">{Math.floor((price || 0) * 80)}</div>
  <span>{description || 'No description available'}</span>
  <div className='btns'>
    <button title='back' onClick={() => navigate('/adminportal/product')}>
      <ArrowBackIosIcon />
    </button>
  </div>
</div>

      </div>
      </div>
    </>
  )
}

export default ViewCard
