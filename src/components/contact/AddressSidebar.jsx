import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contact Us</h4>
      <p>
      We are here to help! If you have any questions, 
      concerns, or need assistance, please feel free 
      to reach out to us through one of the following methods
      </p>
      <div className="content_list">
        <h5>Address</h5>
        <p>
          FPT University HCMC
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>(+84) 123-4567</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>example@fpt.edu.vn</p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
