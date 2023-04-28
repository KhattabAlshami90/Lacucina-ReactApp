import "./CupeSide.css";
import RubberBand from "react-reveal/RubberBand";

const CupeSide = ({ id, fImg, sImg }) => {
  const styleFirstImg = { backgroundImage: `url(${fImg})` };
  const styleSecondImg = { backgroundImage: `url(${sImg})` };

  return (
    <span id={id}>
      <RubberBand>
        <div className="imgDiv" style={styleFirstImg} />
      </RubberBand>
      <RubberBand>
        <div className="imgDiv" style={styleSecondImg} />
      </RubberBand>
    </span>
  );
};

export default CupeSide;
