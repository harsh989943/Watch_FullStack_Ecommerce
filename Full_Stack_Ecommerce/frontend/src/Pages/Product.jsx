import React, { useContext, useEffect, useState } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product=()=>{


  const {all_product}=useContext(ShopContext);
  
  const {productId}=useParams();
  
  const product=all_product.find((e)=> e.id ===Number(productId));
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return(
      <div>
      <Breadcrums product={product}/>
  
      <ProductDisplay product={product}/>
  
      <DescriptionBox/>
  
      <RelatedProducts/>
  
      </div>
  
  
  );
  }
  export default Product;
