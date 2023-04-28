import "./InformationCupe.css";
import { AppInfo } from "../../../../components/context/AppInfoContext";
import CupeSide from "./components/CupeSide";

const InformationCupe = () => {
  const { currentCupeImages } = AppInfo();
  return (
    <div className="cupeContainer">
      <div className="cupe" id="cupe">
        <div className="top" />
        <div>
          <CupeSide
            id="s1"
            fImg={currentCupeImages[0]}
            sImg={currentCupeImages[1]}
          />
          <CupeSide
            id="s2"
            fImg={currentCupeImages[2]}
            sImg={currentCupeImages[3]}
          />
          <CupeSide
            id="s3"
            fImg={currentCupeImages[4]}
            sImg={currentCupeImages[5]}
          />
          <CupeSide
            id="s4"
            fImg={currentCupeImages[6]}
            sImg={currentCupeImages[7]}
          />
        </div>
      </div>
    </div>
  );
};

export default InformationCupe;
