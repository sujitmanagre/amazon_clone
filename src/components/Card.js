import React from 'react'
import './card.css'
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

const Card = ({product}) => {
  return (<>
    <div className="card">
      <div className="image-container">
        <img src={product.imglink} alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">{product.brandName}</p>
        <p className="productdesc">{product.desc}</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> ^{product.count}</p>
        <p className="productprice">&#8377; {product.price}/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    </>
  )
}

export default Card
