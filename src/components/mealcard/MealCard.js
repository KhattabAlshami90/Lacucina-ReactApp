import './MealCard.css'
import LightSpeed from 'react-reveal'
import { Link } from 'react-router-dom';
const MealCard = (props) => {
  return <LightSpeed left>
      <Link to={`/meal/${props.id}`} className="mealLink">
        <div className="mealCard" >
          <img className="mealImg" alt={props.title} src={props.img} />
          <div className="mealText">
            <div className="mealTitleAndPrice">
              <h2 className="mealTitle">
                {props.title}
              </h2>
              <h3 className="mealPrice">
                {props.price}
              </h3>
            </div>
            <p className="mealDescription">
              {props.description}
            </p>
          </div>
        </div>
      </Link>
    </LightSpeed>;
}

export default MealCard