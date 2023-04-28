import GMK from './img/frukost/GM.gif'
import TPKO from './img/lunch/TPKO.webp'
import KRS from "./img/middag/KRS.webp";
import OÄS from "./img/frukost/OÄS.jpg";
import SAN from "./img/frukost/SAN.JPG";
import PCKL from "./img/lunch/PCKL.webp";
import Viltfarsbiffar from "./img/middag/viltfarsbiffar.jpg";
import PBM from "./img/lunch/pasta_med_bacon_och_majs.webp";
import Klassisk from "./img/middag/klassisk_kalops.jpg";
import Hallon from "./img/frukost/hallon.jpg";
import TomatSoppa from "./img/lunch/tomatsoppa.webp";


const foods = [
  {
    id: 0,
    title: "gröt, müsli och knäckebröd",
    price: 189,
    description:
      "välj gärna kolhydrater med ett högt fiberinnehåll. Du får energi iform av kolhydrater men också fibrer.",
    category: "frukost",
    image: GMK
  },
  {
    id: 1,
    title: "tomat- och paprikasoppa med korv och ostkräm",
    price: 299,
    description:
      "soppa är perfekt lunchmat och den här soppan mättar bra tack vare korv och mycket grönsaker. Välj en hetare eller mildare korv beroende på vad som föredras.",
    category: "lunch",
    image: TPKO
  },
  {
    id: 2,
    title: "köttfärslimpa med rotfrukter och svampröra",
    price: 199,
    description:
      "saftig köttfärslimpa får här sällskap av rotfrukter och en krämig svampröra. Resterna av köttfärslimpan blir till rejäl lunchmacka en annan dag.",
    category: "middag",
    image: KRS
  },
  {
    id: 3,
    title: "ost, ägg och skinka",
    price: 199,
    description:
      "ägg och skinka ger protein och andra näringsämnen. Leverpastej är ett bra sätt att få i sig järn. Mjölk, fil och yoghurt ger också bra protein.",
    category: "frukost",
    image: OÄS
  },
  {
    id: 4,
    title: "smör, avokado och nötter",
    price: 150,
    description:
      " nyttigt med bra fettkvalitet. Mandlar och nötter bidrar också med bra fett och även med vitaminer och mineraler.",
    category: "frukost",
    image: SAN
  },
  {
    id: 5,
    title: "pasta med currykryddad kycklingfärs och linser",
    price: 199,
    description:
      "pasta med kycklingfärs, curry, linser och majs. Det här blir en riktigt matig röra med protein från både kyckling och linser. Majsen bidrar med lite sötma åt den currykryddiga röran.",
    category: "lunch",
    image: PCKL
  },
  {
    id: 6,
    title: "viltfärsbiffar",
    price: 199,
    description:
      "saftiga och lättlagade viltfärsbiffar med fin smak av både enbär och timjan. Lite stekt gul lök i smeten bidrar också till god smak. Servera gärna biffarna med viltfärs till rårörda lingon, potatismos och en god sås.",
    category: "middag",
    image: Viltfarsbiffar
  },
  {
    id: 7,
    title: "supersnabb pasta med bacon och majs",
    price: 199,
    description:
      "hur trollar man fram en snabb lunch eller middag som alla älskar? Svaret är pasta med bacon. Nykokt tagliatelle med majs, bacon, grädde och lite chilisås är nog den enklaste pastarätt du kan göra, men också en av de godaste. Klart på en kvart!",
    category: "lunch",
    image: PBM
  },
  {
    id: 8,
    title: "klassisk kalops",
    price: 199,
    description:
      "den här klassiska kalopsen fyller dig med välbehag. Mört kött, spänstiga morötter och lök fräser du med kalvfond, lagerblad och kryddpepparkorn och blir till en komplett och gudomlig middag serverat med kokt potatis och inlagda rödbetor.",
    category: "middag",
    image: Klassisk
  },
  {
    id: 9,
    title: "vaniljdröm med hallon",
    price: 200,
    description:
      "en krämig, enkel och god frukost med granatäpplepulver. Genom att tillsätt en matsked granatäpplepulver får du i dig antioxidanter, vitaminer och mineraler.",
    category: "frukost",
    image: Hallon
  },
  {
    id: 10,
    title: "tomatsoppa och toast fylld med parmesan",
    price: 200,
    description:
      "tomatsoppan är mild och krämig. Med en matig toast är det perfekt lunch- eller middagsmat. Eller varför inte i utflyktstermosen",
    category: "lunch",
    image: TomatSoppa
  }
];
export default foods
