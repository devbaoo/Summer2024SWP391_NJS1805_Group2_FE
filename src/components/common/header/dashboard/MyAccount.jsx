import { Link, useLocation, useNavigate } from "react-router-dom";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";

const MyAccount = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const fullname = userInfo ? userInfo.fullname : "";
  const profileMenuItems = [
    { id: 1, name: "My Profile", ruterPath: "/my-profile" },
    { id: 2, name: "My Message", ruterPath: "/my-message" },
    { id: 3, name: "My Favourite", ruterPath: "/my-favourites" },
    { id: 4, name: "My Package", ruterPath: "/my-package" },
    { id: 5, name: "Log out", ruterPath: "/logout" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const linkStyle = {
    default: { color: "#484848" },
    hover: { color: "#484848" },
    active: { color: "#ff5a5f" },
  };

  return (
    <>
      <div className="user_set_header">
        <img
          className="float-start"
          src="/assets/images/team/e1.png"
          alt="e1.png"
        />
        <p>
          {fullname} <br />
          <span className="address">{userInfo ? userInfo.email : ""}</span>
        </p>
      </div>

      <div className="user_setting_content">
        {profileMenuItems.map((item) =>
          item.ruterPath === "/logout" ? (
            <a
              href="#"
              key={item.id}
              className="dropdown-item"
              onClick={handleLogout}
              style={linkStyle.default}
            >
              {item.name}
            </a>
          ) : (
            <Link
              to={item.ruterPath}
              key={item.id}
              className="dropdown-item"
              style={
                isSinglePageActive(item.ruterPath, pathname)
                  ? linkStyle.active
                  : linkStyle.default
              }
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default MyAccount;
