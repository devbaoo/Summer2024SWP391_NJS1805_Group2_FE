// import { Link } from "react-router-dom";
import axiosInstance from "@/config/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("Accounts/login", loginForm);
      if (response.data.success === false) {
        alert("Invalid username or password");
      } else {
        const userInfo = {
          isLoggedIn: true,
          email: response.data.data.userResult.username,
          fullname: response.data.data.userResult.fullname,
          phone: response.data.data.userResult.phone,
          accessToken: response.data.data.token.accessToken,
          isAdmin: response.data.data.userResult.isAdmin,
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("isLoggedIn", "true");

        console.log(response);
        if (response.data.data.userResult.isAdmin) {
          navigate("/admin");
        } else {
          // navigate("/");
          window.location.reload();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
          className="btn-close"
        ></button>
      </div>
      <div className="modal-body container pb20">
        <div className="row">
          <div className="col-lg-12">
            <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content container" id="myTabContent">
          <div
            className="row mt25 tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="login_thumb">
                <img
                  className="img-fluid w100 h-100 cover"
                  src="/assets/images/resource/login.jpg"
                  alt="login.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="login_form">
                <form onSubmit={handleSubmit}>
                  <div className="heading">
                    <h4>Login</h4>
                  </div>
                  <hr />
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="User Name Or Email"
                      name="username"
                      value={loginForm.username}
                      onChange={handleChange}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="input-group form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      name="password"
                      value={loginForm.password}
                      onChange={handleChange}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label form-check-label">
                      Remember me
                    </label>
                    <a className="btn-fpswd float-end" href="#">
                      Lost your password?
                    </a>
                  </div>
                  <button type="submit" className="btn btn-log w-100 btn-thm">
                    Log In
                  </button>
                  <p className="text-center">
                    Don't have an account?{" "}
                    <a className="text-thm" href="#">
                      Register
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div
            className="row mt25 tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="regstr_thumb">
                <img
                  className="img-fluid w100 h-100 cover"
                  src="/assets/images/resource/regstr.jpg"
                  alt="regstr.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="sign_up_form">
                <div className="heading">
                  <h4>Register</h4>
                </div>
                <form action="#">
                  <hr />
                  <div className="form-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="User Name"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group input-group  mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Email"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group input-group  mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group input-group  mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword3"
                      placeholder="Re-enter password"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group ui_kit_select_search mb-3">
                    <select
                      className="form-select"
                      data-live-search="true"
                      data-width="100%"
                    >
                      <option data-tokens="SelectRole">Single User</option>
                      <option data-tokens="Agent/Agency">Store Owner</option>
                    </select>
                  </div>
                  <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label form-check-label">
                      I have accept the Terms and Privacy Policy.
                    </label>
                  </div>
                  <button type="submit" className="btn btn-log w-100 btn-thm">
                    Sign Up
                  </button>
                  <p className="text-center">
                    Already have an account?{" "}
                    <a className="text-thm" href="#">
                      Log In
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
