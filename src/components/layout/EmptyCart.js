import React from 'react'
import '../style/emptyCart.css'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='emptycart'>
      <div className="inner">
        <h1>Your Amazon Cart is Empty.</h1>
        <Link style={{textDecoration:'none'}} to='/'>
            <button className='contshop'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default EmptyCart
