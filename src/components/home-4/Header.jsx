import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import HeaderMenuContent1 from "../common/header/dashboard/HeaderMenuContent";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(isLoggedIn === "true");
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one  navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Ace Responsive Menu --> */}

        <Link to="/" className="navbar_brand float-start dn-smd">
          <img
            className="logo1 img-fluid"
            src="/assets/images/header-logo.png"
            alt="header-logo.png"
          />
          <img
            className="logo2 img-fluid"
            src="/assets/images/header-logo2.png"
            alt="header-logo2.png"
          />
          <span>MomMilk</span>
        </Link>
        {/* site logo brand */}

        <nav>{isLoggedIn ? <HeaderMenuContent1 /> : <HeaderMenuContent />}</nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
