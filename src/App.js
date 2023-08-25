import "./App.css";
import FoodSection from "./FoodSection";
import OilSection from "./OilSection";
import Total from "./Total";
import { useState } from "react";


function App() {
  const [priceA, setPriceA] = useState(0);
  const [priceB, setPriceB] = useState(0);
  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Mini Cafe</h1>
      <div className="inner-up">
        <OilSection priceA={priceA} setPriceA={setPriceA} ></OilSection>
        <FoodSection priceB={priceB} setPriceB={setPriceB} ></FoodSection>
      </div>
      <div>
        <Total priceA={priceA} priceB={priceB}></Total>
      </div>
    </div>
  );
}

export default App;
