import Categories from "../categories/Categories";
import Foodlist from "../foodlist/Foodlist";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <Categories />
      <Foodlist />
    </div>
  );
};
export default Container;
