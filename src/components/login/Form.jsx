import { Link } from "react-router-dom";
import axiosInstance from "@/config/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
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
        localStorage.setItem("isLoggedIn", true);
        // localStorage.setItem("email", response.data.data.userResult.username);
        // localStorage.setItem("fullname", response.data.data.userResult.fullname);
        // localStorage.setItem("phone", response.data.data.userResult.phone);
        // localStorage.setItem(
        //   "accessToken",
        //   response.data.data.token.accessToken
        // );
        // localStorage.setItem("isAdmin", response.data.data.userResult.isAdmin);
        console.log(response);
        if (response.data.isAdmin === true) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="heading text-center">
        <h3>Login to your account</h3>
        <p className="text-center">
          Dont have an account?{" "}
          <Link to="/register" className="text-thm">
            Sign Up!
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          value={loginForm.username}
          onChange={(e) =>
            setLoginForm({ ...loginForm, username: e.target.value })
          }
          required={!loginForm.username || loginForm.username === ""}
          placeholder="Username Or Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          required={!loginForm.password || loginForm.password === ""}
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label form-check-label">Remember me</label>

        <a className="btn-fpswd float-end" href="#">
          Forgot password?
        </a>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Log In
      </button>
      {/* login button */}

      {/* <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div> */}
      {/* devider */}

      <div className="row mt25">
        {/* <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div> */}
        {/* End .col */}

        {/* <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div> */}
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  );
};

export default Form;
