import './Cart.css';
import foods from '../Data';
import formatCurrency from '../utilities/FormatCurrency';
import { AppInfo } from '../components/context/AppInfoContext';


const Cart = () => {


  const { cartItems, getItemQuantity, decreaseCartQuantity, increaseCartQuantity, removeFromCart, getTotalPrice } = AppInfo();
  return <div className="cartItemsContainer">
      {cartItems.map(item => {
        return <div key={item.id} className="cartItemCard">
            <img alt="meal" className="cartMealImg" src={foods[item.id].image} />
            <div className="cartMealText">
              <h3 className="cartMealTitle">
                {foods[item.id].title}
              </h3>
              <span className="cartMealPrice">
                1x {formatCurrency(foods[item.id].price)}
              </span>
            </div>
            <div className="cartMealControl">
              <div className="cartMealIncDec">
                <button onClick={() => decreaseCartQuantity(item.id)}>
                  -
                </button>
                <span className="mealsQuantity">
                  {getItemQuantity(item.id)}
                </span>
                <button onClick={() => increaseCartQuantity(item.id)}>
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="removeBtn">
                Radera
              </button>
            </div>
            <span className="cartMealPrice">
              Totalt: {formatCurrency(getItemQuantity(item.id) * foods[item.id].price)}
            </span>
          </div>;
      })}
      <h2 className='total'>
        Totalt: {formatCurrency( getTotalPrice())}
      </h2>
    </div>;
}

export default Cart
