import {  useParams } from "react-router-dom";
import "./MealDetails.css";
import foods from "../../Data";
import { AppInfo } from "../context/AppInfoContext";

const MealDetails = () => {
  const param = useParams();
  const id = parseInt(param.mealID);
  const filteredMeal = foods.find(item => item.id === id);
  const {
    removeFromCart,
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity
  } = AppInfo();
  const quantity = getItemQuantity(id);

  return <div className="mealDetailsContainer">
      <div className="mealDetailsCard">
        <div className="mealDetailsText">
          <div className="titleAndPara">
            <h1 className="mealDetailsTitle">
              {filteredMeal.title}
            </h1>
            <p className="mealDetailsDescription">
              {filteredMeal.description}
              {filteredMeal.description}
            </p>
          </div>
          <img className="mealDetailsImg" src={filteredMeal.image} alt="meal details" />
        </div>

        <div className="mealDetailsBtn">
          {quantity === 0 ? <button onClick={() => increaseCartQuantity(id)}>
                Lägg till kundsvagn
              </button> : <div className="cartControl">
                <div className="mealIncDec">
                  <button onClick={() => decreaseCartQuantity(id)}>-</button>
                  <span className="mealsQuantity">
                    {" "}{quantity}
                  </span>
                  <button onClick={() => increaseCartQuantity(id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(id)}>Radera</button>
              </div>}
        </div>
      </div>
    </div>;
};

export default MealDetails;
