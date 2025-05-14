import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../assets/upload_area.svg";


const AddProduct = () => {
  const [image, setImage] = useState(null); // Use null for initial state
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "", // Pre-fill with an empty string
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
    } else {
      setImage(null); // Clear image if no file is selected
    }
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    const formData = new FormData();
    formData.append("product", image); // Ensure correct key for image

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      responseData = await response.json();
    } catch (error) {
      console.error("Error uploading product:", error);
      // Handle errors appropriately, e.g., display an error message to the user
    }

    if (responseData && responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
        }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"): alert("Failed")
        })
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>

        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}   

          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="addproduct-itemfield">   

        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumnail-img"
            alt="Product thumbnail" // Add alt text for accessibility
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button onClick={Add_Product} className="addproduct-btn">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;