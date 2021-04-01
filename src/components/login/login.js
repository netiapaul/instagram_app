import React, { useState } from "react";
import "./login.css";
import AppStore from "../../assets/images/apple.png";
import PlayStore from "../../assets/images/google.png";
import Logo from "../../assets/images/facebook.svg";
import Brand from "../../assets/images/instagram.png";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "Must be 15 characters or less";
  }

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 20) {
    errors.username = "Must be 20 characters or less";
  }

  return errors;
};

const Login = () => {
  let [res, setResponse] = useState("");
  let [status, setStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      fetch("http://localhost:3004/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            if (response.status >= 400) {
              res = setResponse(`Registration Failed`);
              status = setStatus(response.status);
            }
          } else {
            res = setResponse(`User Created Succesfully`);
            status = setStatus(response.status);
            return response.json();
          }
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      formik.resetForm();
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          {/* Error Message */}
          {res ? (
            <div
              className={
                status > 399
                  ? "alert alert-danger alert-dismissible fade show mt-1"
                  : "alert alert-success alert-dismissible fade show mt-1"
              }
              role="alert"
            >
              {res}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          ) : (
            ""
          )}
          {/* Error Message */}
          <div className="card form-card mt-5">
            <div className="d-flex justify-content-center">
              <img src={Brand} className="img-top" alt="Top Brand" />
            </div>

            <div className="card-body mt-n2">
              <div className="text-center mb-3 fw-bolder text-muted">
                <h2>
                  Signup to see photos and videos
                  <br /> from your friends
                </h2>
              </div>
              <div className="text-center mb-3">
                <button
                  type="button"
                  className="btn btn-primary text-white fs-6 fb-login"
                >
                  <img
                    src={Logo}
                    className="img-fluid facebook-logo"
                    width="10"
                    alt="play Store"
                  />
                  <span>Log in with Facebook</span>
                </button>
              </div>
              <div className="d-flex justify-content-evenly text-muted">
                <hr align="left" width="40%" />
                <p>OR</p>
                <hr align="right" width="40%" />
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <input
                    id="username"
                    className="form-control rounded-0"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    placeholder="User Name"
                  />

                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-danger">{formik.errors.username}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <input
                    id="password"
                    className="form-control rounded-0"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Password"
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary">
                    Log In
                  </button>
                </div>
                <div className="text-center mb-3 text-muted policy">
                  <a href="" className="text-decoration-none">
                    Forgot your password?
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="card my-2 text-center">
            <div className="card-body">
              <p className="my-3 sign-up">
                Don't have an account? <a href="">Sign Up</a>
              </p>
            </div>
          </div>
          <p className="text-center my-4">Get the App.</p>
          <div className="container">
            <div className="row row-cols-2 d-flex justify-content-center">
              <div className="col-sm-2 mb-2 d-flex justify-content-center">
                <img
                  src={AppStore}
                  className="img-fluid px-0 store-logo"
                  alt="app Store"
                />
              </div>
              <div className="col-sm-2 mb-2 d-flex justify-content-center">
                <img
                  src={PlayStore}
                  className="img-fluid px-0 store-logo"
                  alt="play Store"
                />
              </div>
            </div>
          </div>
          <div className="container px-1">
            <div className="row row-cols-5 row-cols-md-10 d-flex justify-content-center p-2 about">
              <div className="col-sm-1">
                <p>About</p>
              </div>
              <div className="col-sm-1">
                <p>Blog</p>
              </div>
              <div className="col-sm-1">
                <p>Jobs</p>
              </div>
              <div className="col-sm-1">
                <p>Help</p>
              </div>
              <div className="col-sm-1">
                <p>API</p>
              </div>
              <div className="col-sm-1">
                <p>Privacy</p>
              </div>
              <div className="col-sm-1">
                <p>Terms</p>
              </div>
              <div className="col-sm-1">
                <p>Top Accounts</p>
              </div>
              <div className="col-sm-1">
                <p>Hashtags</p>
              </div>
              <div className="col-sm-1">
                <p>Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
