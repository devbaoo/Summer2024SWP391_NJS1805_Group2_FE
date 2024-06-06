
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import AddressSidebar from "./AddressSidebar";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Form from "./Form";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- Our Contact --> */}
      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h4 className="mb5">Send Us An Email</h4>
                <p>
                We would love to hear from you! Whether you have questions 
                about our products, need technical support, or have feedback 
                to share, please don't hesitate to reach out. Our dedicated 
                team is here to assist you with any inquiries you may have. 
                Simply fill out the form below and we will get back to you 
                as soon as possible
                </p>
                <Form />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              <AddressSidebar />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="container-fluid p0 mt50">
          <div className="row">
            <div className="col-lg-12">
              <div className="h600" id="map-canvas">
                <div className="gmap_canvas pe-none">
                  <iframe
                    title="map"
                    className="gmap_iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6100105376063!2d106.80730271046296!3d10.84112758926703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1717691839643!5m2!1sen!2s"
                  ></iframe>
                  {/* End iframe */}

                  {/* <img
                   
                    className="location-finder"
                    src="/assets/images/location.png"
                    alt="location"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
