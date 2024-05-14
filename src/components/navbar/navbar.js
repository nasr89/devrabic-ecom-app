import { Link } from "react-router-dom"

function Navbar() {
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
      <div className="navbar__right-side"></div>
    </div>
  )
}

export default Navbar
