import "./Buttons.css";
import { AppInfo } from "../context/AppInfoContext";
import { Fade, Flip } from "react-reveal";

const PrimaryButton = ({ title, onClick }) => {
  return (
    <Fade bottom>
      <button className="primaryButton">
        {title}
      </button>
    </ Fade>
  );
};
const SecondaryBuotton = ({ title, onBtnClick, onMouseOver, onMouseLeave }) => {
  return <Flip>
      <button onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={() => onBtnClick(title)} className="secondaryButton">
        {title}
      </button>
    </Flip>;
};

const CategoryBuotton = ({ title}) => {
  const { filterByCategory } = AppInfo();
  return (
    <button onClick={() => filterByCategory(title)} className="secondaryButton">
      {title}
    </button>
  );
};

const SideBuotton = ({ title, onMouseOver, onMouseLeave }) => {
  return (
    <button
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className="secondaryButton"
    >
      {title}
    </button>
  );
};
const MobileMenuBuotton = ({ title, onBtnClick, btnRef, className }) => {
  return (
    <button onClick={onBtnClick} className="secondaryButton" ref={btnRef}>
      {title}
    </button>
  );
};

export default PrimaryButton;
export { SecondaryBuotton };
export { CategoryBuotton };
export { SideBuotton };
export { MobileMenuBuotton };
