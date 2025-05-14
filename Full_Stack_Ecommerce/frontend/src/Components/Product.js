import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "./Breadcrum/Breadcrum";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import Description from "./DescriptionBox/Description";
import RelatedProducts from "./RelatedProducts/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext); // Ensure all_product is from ShopContext
  const { productId } = useParams(); // Extract productId from URL params

  // Use optional chaining to avoid errors when all_product is undefined
  const product = all_product?.find((e) => e.id === Number(productId));

  // If the product or all_product is not available, render a fallback (e.g., loading or error message)
  if (!all_product) {
    return <div>Loading products...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
