import React from "react";
// import Illustration from "../../assets/images/registration2.jpg";
// import "../../assets/libs/bootstrap-5.0.0/css/bootstrap.min.css";
import "./register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="card mb-3 form-card">
        <div className="row g-0">
          <div className="col-md-7 img-fluid">
            {/* <img
            src={Illustration}
            alt="illustration registration"
            className="img-fluid"
          /> */}
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 class="card-title">Create Account</h5>

              <form>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                  />
                </div>
                {/* <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div> */}
                <button type="submit" className="btn btn-primary">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
