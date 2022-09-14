import React from 'react'
import '../style/card.css'
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { useStateValue } from './StateProvider';

const Card = (props) => {
  const { imglink, brandName, desc, rating, count, price } = props;
  const { myReducer } = useStateValue();
  const [ , dispatch] = myReducer;
  const addToCard = (selectedValue) => {
    let timeStamp =  new Date().getTime();
    selectedValue = {...selectedValue, id:timeStamp};
    dispatch({
      type:'ADD_TO_CART',
      payload: selectedValue
    });
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
    <div className="card">
      <div className="image-container">
        <img src={imglink} alt="image" />
      </div>
      <div className="details">
        <p className="productBrand">{brandName}</p>
        <p className="productdesc">{desc}</p>
        <p className="productrating">{starRating(rating)} ^{count}</p>
        <p className="productprice">&#8377; {price}/-</p>
      </div>
      <div className="buy">
        <button className="addToCart" onClick={()=>addToCard(props)}>Add to cart</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
    </>
  )
}

export default Card
