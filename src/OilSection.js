import React from "react";
import { oilTypes } from "./Data";
import "./oilSection.css";
let uniqueID = 0;

export default function OilSection() {
  return (
    <div className="oil-container">
      <h1>Oil Section</h1>
      <div className="oil-sec">
        <div style={{display:"flex",flexDirection:"column",width:"90%"}}>
          <label>Oil Type</label>
          <select>
            {oilTypes.map((o) => (
              <option key={uniqueID++} value={o.name}>
                {o.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="oil-sec">
        <div style={{display:"flex",flexDirection:"column",width:"90%"}}>
          <label>Price</label>
          <input className="input-style" disabled></input>
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
              id="quantity"
              value="quantity"
              name="options"
            ></input>
            <label>Quantity</label>
          </div>

          <div>
            <input
              type="radio"
              id="volume"
              name="options"
              value="volume"
            ></input>
            <label>Volume</label>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="m-3">
            <input className="mr-3" disabled></input>
            <label>l.</label>
          </div>

          <div className="m-3">
            <input className="mr-3" disabled></input>
            <label>qty.</label>
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
          <div >
            <h2>Total Price</h2>
          </div>
          <div style={{ textAlign: "right"}}>
            <p style={{ fontSize: "55px" }}>64.00 $</p>
          </div>
        </div>
      </div>
    </div>
  );
}
