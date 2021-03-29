import React from "react";
// import Illustration from "../../assets/images/registration2.jpg";
// import "../../assets/libs/bootstrap-5.0.0/css/bootstrap.min.css";
import Logo from "../../assets/images/registration.png";
import "./register.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div class="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                  <input
                    id="email"
                    className="form-control rounded-0"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="email"
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div class="mb-3">
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
                <div>
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary">
                      Log In
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-evenly">
                  <hr align="left" width="40%" />
                  <p>OR</p>
                  <hr align="right" width="40%" />
                </div>
                <div className="text-center">
                  <a href="">Login in with Facebook</a>
                </div>
              </form>
            </div>
          </div>
          <div class="card my-2 text-center">
            <div class="card-body">
              Don't have an account? <a href="">Sign Up</a>
            </div>
          </div>
          <p className="text-center">Get the App</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
