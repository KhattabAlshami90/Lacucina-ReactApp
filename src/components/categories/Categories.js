import { CategoryBuotton } from "../buttons/Buttons";
import "./Categories.css";
import { AppInfo } from "../context/AppInfoContext";
import { Flip } from "react-reveal";

const Categories = () => {
  const { uniqueCategories } = AppInfo();
  return (
    <div className="categories">
      {uniqueCategories.length
        ? uniqueCategories.map((item, index) => {
            return (
              <Flip key={index}>
                <CategoryBuotton title={item} />
              </Flip>
            );
          })
        : <h2>Det finns inga kategorier</h2>}
    </div>
  );
};

export default Categories;
