import PrimaryButton from "../buttons/Buttons";
import "./NavBar.css";
import Fade from "react-reveal/Fade";
import Logo2 from "../../img/Logo2.png";
import Search from "../../img/search.png";
import { Link } from "react-router-dom";
import { AppInfo } from "../context/AppInfoContext";
import { Flip } from "react-reveal";

const NavBar = () => {
  const { filterBySearch, cartQuantity } = AppInfo();

  return <nav className="navBar">
      <div className="logoAndCart">
        <Link to="/">
          <img className="logoImg" alt="logo" src={Logo2} />
        </Link>
        {cartQuantity ? <Fade right>
              <Link to="/cart">
                <button className="cartBtn">
                  <div className="cartItemsCounter">
                    {cartQuantity}
                  </div>
                </button>
              </Link>
            </Fade> : null}
      </div>

      <Flip left>
        <form className="searchForm">
          <div className="searchImgAndText">
            <img className="searchImg" alt="Search" src={Search} />
            <input onChange={e => filterBySearch(e.target.value.toLowerCase())} type="search" className="searchText" placeholder="Sök här . . ." />
          </div>
          <Link to="/">
            <PrimaryButton title="Sök" />
          </Link>
        </form>
      </Flip>

      <Link to="/developer">
        <PrimaryButton title="Utvecklaren" />
      </Link>
    </nav>;
};
export default NavBar;
