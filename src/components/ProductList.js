import React from 'react'
import './productList.css';
import Card from './Card';

const ProductList = () => {
  let product = [
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/618hqM-yxtL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "One PLus",
      desc : "OnePlus 10 Pro 5G (12GB, 256GB)",
      rating : "4",
      count : "3,446",
      price : "71,999",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61vZSG1KuoL._AC_UY327_FMwebp_QL65_.jpg",
      brandName : "Samsung",
      desc : "Samsung Galaxy Z Flip 4 5G (8GB, 256GB)",
      rating : "4.5",
      count : "10,705",
      price : "94,999",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/6157kr+aeaL._AC_UY327_FMwebp_QL65_.jpg",
      brandName : "IQOO",
      desc : "iQOO 9T 5G (12GB, 256GB)",
      rating : "3.5",
      count : "628",
      price : "54,999",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61i8Vjb17SL._AC_UY327_FMwebp_QL65_.jpg",
      brandName : "Apple",
      desc : "Apple iPhone 13 Pro Max (256GB) - Sierra Blue",
      rating : "5",
      count : "1,164",
      price : "1,30,900",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/618Wek95laS._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Dennis Lingo",
      desc : "Men's formal Shirt",
      rating : "4",
      count : "24,021",
      price : "499",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71cFpnm0b6S._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Look Mark",
      desc : "Men's Poly Cotton",
      rating : "3",
      count : "1,524",
      price : "664",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71R5jae3ZnL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Amazon Brand - Inkast Denim Co.",
      desc : "Men's Casual Shirt",
      rating : "5",
      count : "898",
      price : "589",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61DHYW4RBhL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "ZEROYAA",
      desc : "Men's Long Sleeve Dress Shirt",
      rating : "3.5",
      count : "10,197",
      price : "3,945",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71bPzgXWzFL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "STUDIO NEXX",
      desc : "Men's Slim Fit Cotton Chinos Trouser",
      rating : "4",
      count : "109",
      price : "799",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/616xchp1ECL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Ben Martin",
      desc : "Men's Relaxed Jeans",
      rating : "4.5",
      count : "26,351",
      price : "619",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81n22WOahOL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "ZEESEN",
      desc : "Ripped Jeans for Men Denim",
      rating : "3.5",
      count : "774",
      price : "6,307",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81oPK3VLboL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Arrow",
      desc : "Checkered Tailored Fit Formal Trouser",
      rating : "2.5",
      count : "205",
      price : "1,927",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61aRXK6OF0L._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Adidas",
      desc : "Mens Eq21 Run Shoes",
      rating : "5",
      count : "103",
      price : "3,999",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81t4iZmQuWL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Nike",
      desc : "Revolution 6 NN Men's Running Shoes",
      rating : "4",
      count : "26",
      price : "3,695",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/814e+-mp3lL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Puma",
      desc : "Men's Enzo 2 Closed Shoe",
      rating : "4.5",
      count : "24,021",
      price : "2,459",
    },
    {
      imglink : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81-NHlRrVFL._AC_UL480_FMwebp_QL65_.jpg",
      brandName : "Woodland",
      desc : "Men's G 40777cma Leather Sneaker",
      rating : "4",
      count : "4,773",
      price : "2,921",
    },
  ]
  return (
    <div className='productList'>
      {product.map((product)=>{
        return(<Card product={product}/>)
      })}
    </div>
  )
}

export default ProductList
