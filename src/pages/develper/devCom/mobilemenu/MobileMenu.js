import React, { useRef } from "react";
import { Fade } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";
import { MobileMenuBuotton } from "../../../../components/buttons/Buttons";
import { AppInfo } from "../../../../components/context/AppInfoContext";
import "./MobileMenu.css";

function MobileMenu() {
  const {
    showMobileMenu,
    toggleMobileMenu,
    setCupeFrontEnd,
    setCupeDotNet,
    setCupeOther,
    setCupeMain
  } = AppInfo();


  const toggleMenu = () => {
    toggleMobileMenu();
    setCupeMain();
  };

  const frontEndBtn = useRef(null);
  const dotNetBtn = useRef(null);
  const otherBtn = useRef(null);

  const setBtnDefaultColors = () => {
    frontEndBtn.current.style.backgroundColor = "#37526d";
    dotNetBtn.current.style.backgroundColor = "#37526d";
    otherBtn.current.style.backgroundColor = "#37526d";
  };

  const setFronClicked = () => {
    setBtnDefaultColors();
    frontEndBtn.current.style.backgroundColor = "#0d2432";
    setCupeFrontEnd();
  };
  const setDotNetClicked = () => {
    setBtnDefaultColors();
    dotNetBtn.current.style.backgroundColor = "#0d2432";
    setCupeDotNet();
  };
  const setOtherClicked = () => {
    setBtnDefaultColors();
    otherBtn.current.style.backgroundColor = "#0d2432";
    setCupeOther();
  };

  return (
    <div className="mobileMenu">
      <RubberBand>
        <button className="mobileMenuButtton" onClick={toggleMenu}>
          ||||
        </button>
      </RubberBand>

      {showMobileMenu
        ? <nav>
            <Fade bottom>
              <ul>
                <li>
                  <MobileMenuBuotton
                    className="mobileMenuSubBtn"
                    onBtnClick={setFronClicked}
                    btnRef={frontEndBtn}
                    title="Front-End"
                  />
                </li>
                <li>
                  <MobileMenuBuotton
                    onBtnClick={setDotNetClicked}
                    btnRef={dotNetBtn}
                    title=".Net&C#"
                  />
                </li>
                <li>
                  <MobileMenuBuotton
                    onBtnClick={setOtherClicked}
                    btnRef={otherBtn}
                    title="Övrigt"
                  />
                </li>
              </ul>
            </Fade>
          </nav>
        : null}
    </div>
  );
}

export default MobileMenu;
