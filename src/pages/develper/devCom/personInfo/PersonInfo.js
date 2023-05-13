import "./PersonInfo.css";
import myPhoto from "../../personIMG/IMG_0288.jpg";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import MobileMenu from "../mobilemenu/MobileMenu";

const PersonInfo = () => {
  return (
    <div className="devNav">
      <div className="person-info">
        <Fade left>
          <img
            src={myPhoto}
            alt="Utvecklarens Bild"
            className="myImg"
            id="img"
          />
        </Fade>

        <RubberBand>
          <div className="info-text" id="info-text">
            <h2 className="info-h">Khattab Alshami</h2>
            <h2 className="info-h">khmoal90@gmail.com</h2>
            <h2 className="info-h">076-327 20 92</h2>
          </div>
        </RubberBand>
      </div>
      <MobileMenu />
    </div>
  );
};

export default PersonInfo;
