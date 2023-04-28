import DotNet from "./personIMG/Dotnetdark.png";
import FrontEnd from "./personIMG/Fronenddark.png";
import PhotoShop from "./personIMG/Photoshop.png";
import MsSql from "./personIMG/MSSql.png";
import Dev from "./personIMG/Utveckling.png";
import FDev from "./personIMG/FUtveckling.png";
import Design from "./personIMG/Design.png";
import FDotNet from './personIMG/FDotNet.png'
import HTML from "./personIMG/HTML.png";
import CSS from "./personIMG/CSS.png";
import JavaScript from "./personIMG/JavaScript.png";
import JB from "./personIMG/JB.png";
import React from "./personIMG/React.png";
import RedTS from "./personIMG/RedTS.png";
import cSharp from "./personIMG/Csharp.png";
import OOP from "./personIMG/OOP.png";
import ASP from "./personIMG/ASP.png";
import ApiMvc from "./personIMG/ApiMVC.png";
import EFF from "./personIMG/Eff.png";
import EFS from "./personIMG/Efs.png";
import Git from "./personIMG/Git.png";
import GitHub from "./personIMG/GitHub.png";
import Algoritmer from "./personIMG/algoritmer.png";
import DataStr from "./personIMG/dataStr.png";
import Java from "./personIMG/Java.png";
import Cphp from "./personIMG/Cphp.png";








const developerData = {
  frontEnd: {
    firstTitle: "Unika Sidor",
    firstText:
      "PhotoShop och CSS ger stor möjlighet att ge siten unika avtryck.",
    secondTitle: "Snapp & Dynamisk",
    secondtText:
      "JavaScript, TypeScript, ReactJS, Sass och BoorStrap gör det snabbare att skapa dynamiska sidor."
  },
  dotNet: {
    firstTitle: "ASP.Net Core",
    firstText: " C#, Razor Pages, MVC, WebAPI.",
    secondTitle: ".Net DataBas",
    secondtText: "Ms-SQL, ADO.NET, Dapper, Entity FrameWork Core."
  },
  other: {
    firstTitle: "IT Teknik",
    firstText:
      " Algoritmer, DataStrukturer, Binära, Hexadecimala, BCD TalSystem.",
    secondTitle: "Andra programmeringsSpråk",
    secondtText: "Java, C++, PHP.."
  }
};
const cupeImages = {
  main: [FrontEnd, FDev, DotNet, FDotNet, PhotoShop, Design, MsSql, Dev],
  frontEnd: [FrontEnd, FDev, React, RedTS, JavaScript, JB, HTML, CSS],
  dotNet: [DotNet, FDotNet, EFF, EFS, ASP, ApiMvc, cSharp, OOP],
  other: [
    Java,
    Cphp,
    Algoritmer,
    DataStr,
    Git,
    GitHub,
    PhotoShop,
    Design,
    ASP,
    ApiMvc,
    cSharp,
    OOP
  ]
};
export default developerData
export {cupeImages}