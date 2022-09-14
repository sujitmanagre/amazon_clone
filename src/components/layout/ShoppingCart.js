import React from 'react'
import '../style/shoppingCart.css'
import { FaCheckCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

const ShoppingCart = () => {
  return (
    <div className="shoppingCart">
      <div className="shoppingBasket">
        <div className="heading">
          <h2>Shopping Cart</h2>
          <p>Deselect all items</p>
        </div>
        <div className="itemList">
          <div className='price'>Price</div>


          <div className="cartItem">
            <div className="image-container">
              <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61vZSG1KuoL._AC_UY327_FMwebp_QL65_.jpg" alt="image" />
            </div>
            <div className="details">
              <p className="productBrand">Samsung</p>
              <p className="productdesc">Samsung Galaxy Z Flip 4 5G (8GB, 256GB)</p>
              <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> ^ 10,705</p>
              <p><button>Remove from Cart</button></p>
            </div>
            <div className="price">
              <p className="productprice">&#8377; 94,999/-</p>
            </div>
          </div>
          <div className="cartItem">
            <div className="image-container">
              <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81-NHlRrVFL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
            </div>
            <div className="details">
              <p className="productBrand">Woodland</p>
              <p className="productdesc">Men's G 40777cma Leather Sneaker</p>
              <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> ^ 4,773</p>
              <p><button>Remove from Cart</button></p>
            </div>
            <div className="price">
              <p className="productprice">&#8377; 2,921/-</p>
            </div>
          </div>
          <div className="cartItem">
            <div className="image-container">
              <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/616xchp1ECL._AC_UL480_FMwebp_QL65_.jpg" alt="image" />
            </div>
            <div className="details">
              <p className="productBrand">Ben Martin</p>
              <p className="productdesc">Men's Relaxed Jeans</p>
              <p className="productrating"><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> ^ 26,351</p>
              <p><button>Remove from Cart</button></p>
            </div>
            <div className="price">
              <p className="productprice">&#8377; 619/-</p>
            </div>
          </div>


          <div className='totalPrice'>Subtotal (3 items): <strong>&#8377; 98,539/-</strong></div>
        </div>
      </div>
      <div className="checkOut">
        <div className='alertBox'>
          <div className='checkIcon'>
            <FaCheckCircle />
          </div>
          <div className='checkLine'>
            <p className='lineOne'>Your order is eligible for FREE Delivery.</p>
            <p >Select this option at checkout.</p>
          </div>

        </div>
        <div className="subTotal">Subtotal (3 items): <strong>&#8377; 98,539/-</strong></div>
        <div className="checkBox"><input type="checkbox" /><label>This order contains a gift</label></div>
        <div className="proceed"><button>Proceed to Buy</button></div>
      </div>
    </div>
  )
}

export default ShoppingCart
