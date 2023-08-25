import React from "react";
import "./foodSection.css";
import { foods } from "./Data";



export default function FoodSection({ priceB, setPriceB }) {
  let uniqueID = 0;
  function handleFoodChange(event) {
    let id = event.target.id;
    console.log(id);
    let qtyInputEl = document.getElementById(`food-input-${id[id.length - 1]}`);
    
    if (event.target.checked === true) {
      qtyInputEl.disabled = false;
    } else {
      qtyInputEl.disabled = true;
      qtyInputEl.value="";
      handleQtyChange();
    }
  }
  
  function handleQtyChange() {
    let totalText=document.getElementById("total-food-price");
    let totalPrice = 0;
    let inputs = document.getElementsByClassName("qty-input");
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      totalPrice += Number(element.value)*foods[i].price;
      console.log(element.value);
    }
    setPriceB(totalPrice);
    totalText.innerHTML=totalPrice.toFixed(2).toString()+" $";
  }
  return (
    <div className="food-container">
      <h1>Food Section</h1>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <div></div>
        <div
          style={{
            flexBasis: "60%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 style={{ flexBasis: "50%" }}>Price</h3>
          <h3>Quantity</h3>
        </div>
      </div>
      {foods.map((f) => (
        <div key={uniqueID++} className="food-sec">
          <div className="food-sec-left">
            <input
              id={"food-" + uniqueID}
              value={f.name}
              onChange={(e) => handleFoodChange(e)}
              type="checkbox"
            ></input>
            <label>{f.name}</label>
          </div>

          <div className="food-sec-right">
            <input
              style={{ textAlign: "center", fontWeight: "bold" }}
              value={f.price}
              disabled
            ></input>
            <input
              onChange={handleQtyChange}
              className="qty-input"
              id={"food-input-" + uniqueID}
              disabled
            ></input>
          </div>
        </div>
      ))}

      <div className="total-cont">
        <div className="total-rect">
          <div>
            <h2>Total Price</h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <p id="total-food-price" style={{ fontSize: "55px" }}>0.00 $</p>
          </div>
        </div>
      </div>
    </div>
  );
}


