import { Fade } from "react-reveal";
import { SideBuotton } from "../../../../components/buttons/Buttons";
import "./SidBar.css";
import { AppInfo } from "../../../../components/context/AppInfoContext";

const SidBar = () => {
  const {
    setCupeMain,
    setCupeOther,
    setCupeDotNet,
    setCupeFrontEnd,
    resetMobileMenu,
    setFrontEndText,
    setDotNetText,
    setOtherText,
    handleSetHide,
    handleSetShow
  } = AppInfo();

  const handleFrontEndBtn = () => {
    setFrontEndText();
    handleSetShow();
    setCupeFrontEnd();
  };
  const handleDotNetBtn = () => {
    setDotNetText();
    handleSetShow();
    setCupeDotNet();
  };
  const handleOtherBtn = () => {
    setOtherText();
    handleSetShow();
    setCupeOther();
  };
  const handleBtnLeave = () => {
    handleSetHide();
    resetMobileMenu();
    setCupeMain();
  };

  return (
    <aside className="as">
      <Fade right>
        <ul className="sidul">
          <li>
            <SideBuotton
              onMouseOver={handleFrontEndBtn}
              onMouseLeave={handleBtnLeave}
              title="Front-End"
            />
          </li>
          <li className="desBtnContainer">
            <SideBuotton
              onMouseOver={handleDotNetBtn}
              onMouseLeave={handleBtnLeave}
              title=".Net & C#"
            />
            <span className="des-menu-btn">|||</span>
          </li>
          <li>
            <SideBuotton
              onMouseOver={handleOtherBtn}
              onMouseLeave={handleBtnLeave}
              title="Övrigt"
            />
          </li>
        </ul>
      </Fade>
    </aside>
  );
};

export default SidBar;
