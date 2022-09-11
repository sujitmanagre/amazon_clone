import React from 'react'
import './card.css'
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

const Card = () => {
  return (<>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/618hqM-yxtL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">One Plus</p>
        <p className="productdesc">OnePlus 10 Pro 5G (12GB, 256GB)</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> ^3,446</p>
        <p className="productprice">&#8377; 71,999/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61vZSG1KuoL._AC_UY327_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Samsung</p>
        <p className="productdesc">Samsung Galaxy Z Flip4 5G (8GB, 256GB)</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> ^10,705</p>
        <p className="productprice">&#8377; 94,999/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/6157kr+aeaL._AC_UY327_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">IQOO</p>
        <p className="productdesc">iQOO 9T 5G (12GB, 256GB)</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> ^628</p>
        <p className="productprice">&#8377; 54,999/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61i8Vjb17SL._AC_UY327_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Apple</p>
        <p className="productdesc">Apple iPhone 13 Pro Max (256GB) - Sierra Blue</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> ^1,164</p>
        <p className="productprice">&#8377; 1,30,900/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>  
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/618Wek95laS._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Dennis Lingo</p>
        <p className="productdesc">Men's formal Shirt</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> ^24,021</p>
        <p className="productprice">&#8377; 499/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71cFpnm0b6S._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Look Mark</p>
        <p className="productdesc">Men's Poly Cotton</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> ^1,524</p>
        <p className="productprice">&#8377; 664/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71R5jae3ZnL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Amazon Brand - Inkast Denim Co.</p>
        <p className="productdesc">Men Casual Shirt</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /><FiStar color='orange' /> ^898</p>
        <p className="productprice">&#8377; 589/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61DHYW4RBhL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">ZEROYAA</p>
        <p className="productdesc">Men's Long Sleeve Dress Shirt</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> ^10,197</p>
        <p className="productprice">&#8377; 3,945/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71bPzgXWzFL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">STUDIO NEXX</p>
        <p className="productdesc">Men's Slim Fit Cotton Chinos Trouser</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /><FiStar color='orange' /> ^109</p>
        <p className="productprice">&#8377; 799/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/616xchp1ECL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Ben Martin</p>
        <p className="productdesc">Men's Relaxed Jeans</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /><FiStar color='orange' /> ^26,351</p>
        <p className="productprice">&#8377; 619/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81n22WOahOL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">ZEESEN</p>
        <p className="productdesc">Ripped Jeans for Men Denim</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> ^774</p>
        <p className="productprice">&#8377; 6,307/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81oPK3VLboL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Arrow</p>
        <p className="productdesc">Checkered Tailored Fit Formal Trouser</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /> ^1</p>
        <p className="productprice">&#8377; 1,927/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61aRXK6OF0L._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Adidas</p>
        <p className="productdesc">Mens Eq21 Run Shoes</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> ^103</p>
        <p className="productprice">&#8377; 3,999/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81t4iZmQuWL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Nike</p>
        <p className="productdesc">Revolution 6 NN Men's Running Shoes</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> ^26</p>
        <p className="productprice">&#8377; 3,695/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/814e+-mp3lL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Puma</p>
        <p className="productdesc">Men's Enzo 2 Closed Shoe</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> ^24,021</p>
        <p className="productprice">&#8377; 2,459/-</p>
      </div>
      <div className="buy">
        <button className="addToCart">Add to card</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    <div className="card">
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81-NHlRrVFL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">Woodland</p>
        <p className="productdesc">Men's G 40777cma Leather Sneaker</p>
        <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> ^4,773</p>
        <p className="productprice">&#8377; 2,921/-</p>
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
