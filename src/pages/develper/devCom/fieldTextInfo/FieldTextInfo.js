import "./FieldTextInfo.css";
import { Fade } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";
import { AppInfo} from "../../../../components/context/AppInfoContext";
import devLogo from "../../personIMG/Devlogo.png";

const FieldTextInfo = () => {
  const { fTextInfo } = AppInfo();
  return (
    <Fade right>
      <div className="fieldTextInfo">
        <Fade right>
          <h3 className="sideInfoTitle">
            {fTextInfo.firstTitle}
          </h3>
        </Fade>
        <RubberBand>
          <p className="sideInfoText">
            {fTextInfo.firstText}
          </p>
        </RubberBand>
        <Fade right>
          <h3 className="sideInfoTitle">
            {fTextInfo.secondTitle}
          </h3>
        </Fade>
        <RubberBand>
          <p className="sideInfoText">
            {fTextInfo.secondText}
          </p>
        </RubberBand>
        <RubberBand>
          <img className="devLogo" alt="Utvecklaren logo" src={devLogo} />
        </RubberBand>
      </div>
    </Fade>
  );
};
export default FieldTextInfo;
