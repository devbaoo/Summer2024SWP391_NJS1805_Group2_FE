import { Link } from "react-router-dom";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Site</h4>
          <p>
            This site is our SWP301 small project. We hope everyone like this ^^
          </p>
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/">User’s Guide</Link>
            </li>
            <li>
              <Link to="/">Support Center</Link>
            </li>
            <li>
              <Link to="/">Press Info</Link>
            </li>
          </ul>
        </div>
      </div> */}
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:phatnttse184119@fpt.edu.vn">phatnttse184119@fpt.edu.vn</a>
            </li>
            <li>
            <a href="mailto:truongcpse172819@fpt.edu.vn">truongcpse172819@fpt.edu.vn</a>
            </li>
            <li>
            <a href="mailto:hungpvse172005@fpt.edu.vn">hungpvse172005@fpt.edu.vn</a>
            </li>
            <li>
            <a href="mailto:baockse17xxxx@fpt.edu.vn">baockse17xxxx@fpt.edu.vn</a>
            </li>
            <li>
            <a href="mailto:kocamxuc818@gmail.com">kocamxuc818@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
          {/* <h4>Subscribe</h4>
          <SubscribeForm /> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
