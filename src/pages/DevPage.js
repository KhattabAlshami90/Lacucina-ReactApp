import InformationCupe from "./develper/devCom/informationCupe/InformationCupe";
import PersonInfo from "./develper/devCom/personInfo/PersonInfo";
import SidBar from "./develper/devCom/sidBar/SidBar";
import { AppInfo} from "../components/context/AppInfoContext";
import FieldTextInfo from "./develper/devCom/fieldTextInfo/FieldTextInfo";

const DevPage = () => {
  const { showFInfoText } = AppInfo();

  return (
    <div>
      <PersonInfo />
      <SidBar />
      <InformationCupe />
      {showFInfoText ? <FieldTextInfo /> : null}
    </div>
  );
};
export default DevPage;
