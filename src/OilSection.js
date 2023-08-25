import React, {  useState } from "react";
import { oilTypes } from "./Data";
import "./oilSection.css";
let uniqueID = 0;




export default function OilSection({ priceA, setPriceA }) {
 
  let [selectedOilType, setOilType] = useState({
    name: "",
    price: 0
  });

  function handleRadioBtn(event) {
    let totalEl = document.getElementById("total-price");
    let volumeInput = document.getElementById("volume-input");
    let priceInput = document.getElementById("price-inp");
    volumeInput.value="";
    priceInput.value="";
    totalEl.innerHTML="0.00 $";
    if (event.target.value === "volume") {
      volumeInput.disabled = false;
      priceInput.disabled = true;
    } else {
      priceInput.disabled = false;
      volumeInput.disabled = true;
    }
  }

  function handleOilTypeChange(event) {
    let priceEl = document.getElementById("price-input");
    let selectedOilType = oilTypes.find((o) => o.name === event.target.value);
    setOilType(selectedOilType);
    console.log(selectedOilType);
    priceEl.value = selectedOilType.price;
  }

  function handleVolumeChange(event) {
    let totalEl = document.getElementById("total-price");
    if (Number(event.target.value > 0)) {    
      let price = Number(event.target.value) * selectedOilType.price;
      totalEl.innerHTML = price.toFixed(2).toString()+"$";
      setPriceA(price);
    }
    else{
      setPriceA(0);
      totalEl.innerHTML="0.00 $";
    }
  }

  function handlePriceChange(event) {
    let totalEl=document.getElementById("total-price");
    let volumeInput=document.getElementById("volume-input");
    if(Number(event.target.value)>0)
    {
      totalEl.innerHTML=Number(event.target.value).toFixed(2).toString()+"$";
      volumeInput.value=(Number(event.target.value)/selectedOilType.price).toFixed(2);
      setPriceA(Number(event.target.value));
    }
    else{
      totalEl.innerHTML="0.00 $"
      volumeInput.value="";
    }
  }
  return (
    <div className="oil-container">
      <h1>Oil Section</h1>
      <div className="oil-sec">
        <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
          <label>Oil Type</label>
          <select onChange={(e) => handleOilTypeChange(e)}>
            {oilTypes.map((o) => (
              <option key={uniqueID++} value={o.name}>
                {o.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="oil-sec">
        <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
          <label>Price</label>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input id="price-input" className="input-style" disabled></input>
            <label style={{ fontSize: "25px" }}>$</label>
          </div>
        </div>
      </div>

      <div className="oil-sec">
        <div
          style={{
            border: "1px solid black",
            padding: "10px 35px",
            borderRadius: "15px",
          }}
        >
          <div>
            <input
              type="radio"
              id="volume"
              value="volume"
              name="options"
              onChange={(e) => handleRadioBtn(e)}
            ></input>
            <label>By volume</label>
          </div>

          <div>
            <input
              type="radio"
              id="price"
              name="options"
              value="price"
              onChange={(e) => handleRadioBtn(e)}
            ></input>
            <label>By price</label>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="m-3">
            <input
              type="number"
              className="mr-3"
              disabled
              id="volume-input"
              onChange={(e) => handleVolumeChange(e)}
            ></input>
            <label>l.</label>
          </div>

          <div className="m-3">
            <input
              onChange={(e) => handlePriceChange(e)}
              type="number"
              className="mr-3"
              disabled
              id="price-inp"
            ></input>
            <label>$</label>
          </div>
        </div>
      </div>

      <div className="oil-sec">
        <div
          style={{
            width: "90%",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          <div>
            <h2>Total Price</h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <p id="total-price" style={{ fontSize: "55px" }}>
              0.00 $
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
