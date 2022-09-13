import React from 'react'
import './shoppingCart.css'
import { FaCheckCircle } from 'react-icons/fa';

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
              <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61MUoISbzjL._AC_AA180_.jpg" alt="image" />
            </div>
            <div className="details">
              <p className="productBrand">Logitech</p>
              <p className="productdesc">Wired Mouse</p>
              <p className="productrating">5 star ^ 5,373</p>
            </div>
            <div className="price">
              <p className="productprice">&#8377; 900/-</p>
            </div>
          </div>


          <div className='totalPrice'>Subtotal (4 items): <strong>&#8377; total price</strong></div>
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
        <div className="subTotal">Subtotal (4 items): <strong>&#8377; total price</strong></div>
        <div className="checkBox"><input type="checkbox" /><label>This order contains a gift</label></div>
        <div className="proceed"><button>Proceed to Buy</button></div>
      </div>
    </div>
  )
}

export default ShoppingCart
