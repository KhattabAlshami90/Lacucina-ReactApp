import formatCurrency from '../../utilities/FormatCurrency';
import { AppInfo } from '../context/AppInfoContext';
import MealCard from '../mealcard/MealCard'
import './Foodlist.css'

const Foodlist = () => {
  const{mealList} = AppInfo();
  return <div className="foodListContainer">
      {mealList.length ? mealList.map(item => {
            return <MealCard key={item.id} id={item.id} title={item.title} price={formatCurrency(item.price)} description={item.description} img={item.image} />;
          }) : <h2 className="alert">Inga måltider</h2>}
    </div>;
};

export default Foodlist