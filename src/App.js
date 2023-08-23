import "./App.css";
import FoodSection from "./FoodSection";
import OilSection from "./OilSection";
import Total from "./Total";


function App() {
  return (
    <div className="container">
      <div className="inner-up">
        <OilSection></OilSection>
        <FoodSection></FoodSection>
      </div>
      <div>
        <Total></Total>
      </div>
    </div>
  );
}

export default App;
