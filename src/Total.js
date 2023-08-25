import React from 'react';
import "./total.css"

export default function Total({ priceA, priceB }) {
  const totalPrice = (priceA + priceB).toFixed(2);
  return (
    <div className='total-container'>
      <p style={{fontSize:"60px"}}>Overall Price</p>
    <div style={{textAlign:"center"}}>
        <p style={{fontSize:"100px",fontWeight:"bold"}}>{totalPrice} $</p>
    </div>
    </div>
  )
}
