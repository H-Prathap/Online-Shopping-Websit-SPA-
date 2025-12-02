import React, { useEffect,useState } from 'react'
import axios from 'axios'
import '../../assets/Styles/product.css'
import StarIcon from '@mui/icons-material/Star';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';


const Product = () => {
   const [products, setProducts] = useState([])
    let navigate=  useNavigate('')
  let fetchapi =async ()=>{
    let apidata= await axios.get('http://localhost:4000/store')
        setProducts(apidata.data)
  }
  useEffect(()=>{
    fetchapi()
  },[])
  let viewmore=(id)=>{
    navigate(`/adminportal/viewcard/${id}`)
  }
  let deleteproduct= async (id)=>{
    let bool = window.confirm("do you want to delete this item...!")
    if (bool){
     await axios.delete(`http://localhost:4000/store/${id}`) 
      alert("item is  deleted ")
    }
  else{
    alert("not  deleted")
  }
  }
  return (
    <>
   <div className="products">
    <div className="heading">
      <div className="container">
        {products.map((elem)=>{
          let {id, title, price, category, image, rating, } = elem
          return(
            <div className="card" key={id}>
              <div className="category">{category}</div>
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="title">{title}</div>
              <div className="box">
                { <div className="rating"> {rating.rate }  
                  <StarIcon/>
                   {/* <span>{rating.count}</span> */}
                  </div> }
                <div className="price"><CurrencyRupeeIcon/> {Math.floor(price*80)}</div>
              </div>
              <div className="btns">
                <button title='view more '
                onClick={()=>viewmore(id)} >
                  view 
                  </button>
                <button onClick={() => deleteproduct(id)}>

                    delete  
                    </button>
              </div>
              
            </div>
          )
        })}

      </div>
    </div>
   </div>
    </>
  )
}

export default Product
