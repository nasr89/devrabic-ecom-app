import { Link, useLocation, useNavigate } from "react-router-dom";
import { isStoreSelected, isCartSelected } from "utils/checkRoutes";
import { useContext } from "react";
import { MainContext } from "utils/context";
import { signOutUser } from "utils/firebaseFunctions";
import { TailSpin } from "react-loader-spinner";
function DesktopMenu() {
  const { user, loading } = useContext(MainContext);
  const loc = useLocation();
  const navigate = useNavigate();
  const signOut = async () => {
    await signOutUser();
  };
  return (
    <>
      <Link
        to="/"
        className={`navbar__right-side__item
      ${isStoreSelected(loc.pathname) && "navbar__right-side__item--selected"}`}
      >
        Store
      </Link>
      <Link
        to="/cart"
        className={`navbar__right-side__item
      ${isCartSelected(loc.pathname) && "navbar__right-side__item--selected"}`}
      >
        Cart
      </Link>
      {loading ? (
        <TailSpin
          height="30"
          width="30"
          color="#3b4142"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          visible={true}
        />
      ) : user ? (
        <button onClick={signOut} className="navbar__right-side__btn primary">
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => navigate("/authenticate")}
          className="navbar__right-side__btn primary"
        >
          Login
        </button>
      )}
    </>
  );
}

export default DesktopMenu;
