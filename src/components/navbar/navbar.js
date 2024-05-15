import { Link } from "react-router-dom";
import useWindowSize from "utils/useWindowSize";
import MobileMenu from "./mobile-menu/mobile-menu";
import DesktopMenu from "./desktop-menu/desktop-menu";
function Navbar() {
  const { width } = useWindowSize();
  return (
    <div className="navbar">
      <div className="navbar__left-side">
        <Link to="/">
          <div className="navbar__left-side__logo">
            <span className="navbar__left-side__logo__text">
              DEVRABIC <b>ECOM</b> STORE
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar__right-side">
        {width < 800 ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </div>
  );
}

export default Navbar;
