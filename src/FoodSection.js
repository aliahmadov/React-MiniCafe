import React from "react";
import "./foodSection.css";
import { foods } from "./Data";
export default function FoodSection() {
  return (
    <div className="food-container">
      <h1>Food Section</h1>
      <div style={{border:"1px solid black",display:"flex",justifyContent:"right"}}>
        <div>

        </div>
        <div style={{flexBasis:"60%",display:"flex",justifyContent:"center"}}>
        <h3 style={{flexBasis:"50%"}}>Price</h3>
        <h3>Quantity</h3>
        </div>
      </div>
      {foods.map((f) => (
        <div className="food-sec">
          <div className="food-sec-left">
            <input type="checkbox"></input>
            <label>{f.name}</label>
          </div>

          <div className="food-sec-right">
                <input disabled></input>
                <input disabled></input>
          </div>
        </div>
      ))}

      <div className="total-cont">
        <div className="total-rect">
            <div>
                <h2>Total Price</h2>
            </div>
            <div style={{textAlign:"right"}}>
            <p style={{ fontSize: "55px" }}>64.00 $</p>
            </div>
        </div>
      </div>
    </div>
  );
}
