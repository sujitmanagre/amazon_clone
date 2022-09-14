import React from 'react'
import '../style/shoppingCart.css'
import EmptyCart from './EmptyCart.js'
import { FaCheckCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { useStateValue } from './StateProvider';

const ShoppingCart = () => {
  const { myReducer } = useStateValue();
  const [data, dispatch] = myReducer;

  const getTotalAmount = () => {
    let total = 0;
    data.cartList.map(item =>{
      return total = Number(total) + Number(item.price);
    })
    return total;
  }

  const getTotalItem = () => {
    return data.cartList.length
  }

  const removeFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    })
  }

  var starRating = (rating) =>{
    if(rating==1) return (<> <FaStar color='orange' /><FiStar color='orange' /><FiStar color='orange' /><FiStar color='orange' /><FiStar color='orange' /> </>)
    if(rating==1.5) return (<> <FaStar color='orange' /><FaStarHalfAlt color='orange' /><FiStar color='orange' /><FiStar color='orange' /><FiStar color='orange' /> </>)
    if(rating==2) return (<> <FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /><FiStar color='orange' /><FiStar color='orange' /> </>)
    if(rating==2.5) return (<> <FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /><FiStar color='orange' /><FiStar color='orange' /> </>)
    if(rating==3) return (<> <FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /><FiStar color='orange' /> </>)
    if(rating==3.5) return (<> <FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /><FiStar color='orange' /> </>)
    if(rating==4) return (<> <FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FiStar color='orange' /> </>)
    if(rating==4.5) return (<> <FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStarHalfAlt color='orange' /> </>)
    if(rating==5) return (<> <FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /><FaStar color='orange' /> </>)
  }

  return (<>
    { data.cartList.length===0 ? <EmptyCart/> :
    <div className="shoppingCart">
      <div className="shoppingBasket">
        <div className="heading">
          <h2>Shopping Cart</h2>

        </div>
        <div className="itemList">
          <div className='price'>Price</div>


          <ul className="cartItem">
            { 
              data.cartList.map(item => (<li key={item.id}>
              <div className="image-container">
                <img src={item.imglink} alt="image" />
              </div>
              <div className="details">
                <p className="productBrand">{item.brandName}</p>
                <p className="productdesc">{item.desc}</p>
                <p className="productrating" style={{color:'#007185'}}>{starRating(item.rating)} ^ {item.count}</p>
                <p><button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button></p>
              </div>
              <div className="price">
                <p className="productprice">&#8377; {item.price}/-</p>
              </div>
              </li>))
            }
          </ul>

          <div className='totalPrice'>Subtotal ({getTotalItem()} items): <strong>&#8377; {getTotalAmount()}/-</strong></div>
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
          <div className="subTotal">Subtotal ({getTotalItem()} items): <strong>&#8377; {getTotalAmount()}/-</strong></div>
          <div className="checkBox"><input type="checkbox" /><label>This order contains a gift</label></div>
          <div className="proceed"><button>Proceed to Buy</button></div>
        </div>
      </div>
      }</>)
}

      export default ShoppingCart
