import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";


const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);
return (
  <div className='productdisplay'>
    <div className="productdisplay-left">
      <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
      </div>
      <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
      </div>
    </div>
    <div className="productdisplay-right">
      <h1>{product.name}</h1>
      <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
      </div>
      <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
      </div>
      <div className="productdisplay-right-description">
      Stylish Stainless Steel Watches:Solid stainless steel watch bracelet, hidden butterfly pushed button,prevent perspiration, quality assurance.Free adjustment tool and extra links are available from seller. which is simple and easy to operate.
      </div>
      <div className="productdisplay-right-size">
          
          
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <p className='productdisplay-right-category'><span>Category :</span>Women ,Men , Kids</p>
      <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest, Trending</p>
    </div>
  </div>
)
}


export default ProductDisplay;