import { useState, useEffect } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff"; // Make sure to import the icon component
import vbanner from "../../components/home-4/banner_SWP.svg";

function BannerVoucher() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeTitleVisible] = useState(false); // This state is not used, consider removing or implementing it
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleOnClose = () => {
    setIsBannerVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`path-frontpage ${isScrolled ? "header-scroll" : ""} ${
        isHomeTitleVisible ? "fixed-bs" : ""
      }`}
    >
      {isBannerVisible && (
        <div className="banner-voucher-container">
          <div className="banner_voucher-form">
            <img
              className="banner-voucher"
              src={vbanner}
              alt="Voucher Banner"
            />
            <button className="cancel-btn" onClick={handleOnClose}>
              <HighlightOffIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BannerVoucher;
