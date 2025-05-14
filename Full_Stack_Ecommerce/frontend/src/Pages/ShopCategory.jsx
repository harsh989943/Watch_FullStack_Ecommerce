import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext"; // Corrected path
import dropdown_icon1 from "../Components/Assets/dropdown_icon.png"; // Corrected path
import Item from "../Components/Item/Item"; // Corrected path
import "./CSS/ShopCategory.css"; // Corrected path

const ShopCategory=(props)=>{
    const {all_product} = useContext(ShopContext)

    return(

<div className="shop-category">
<img className="shopcategory-banner"   src={props.banner} alt=""/>

<div className="shopcategory-indexSort">
<p>
<span>Displaying</span> Products
</p>
<div className="shopcategory-sort">
Sort By<img src={dropdown_icon1} alt="" />
</div>
</div>

<div className="shopcategory-products">
    {all_product.map((item,i)=>{

        if(props.category===item.category){
        return<Item key={i}  id={item.id} name={item.name} image={item.image}  new_price={item.new_price}  old_price={item.old_price}/>
        }
        else{
            return null;
        }

    })}
</div>
<div className="shopcategory-loadmore">
    Explore More
</div>
</div>
    )
}



export  default ShopCategory;