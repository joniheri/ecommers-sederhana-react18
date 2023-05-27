import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobateContext";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <div className="row mb-5">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h1>Register</h1>
              <div className="mb-4 mt-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 mt-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fullname"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mb-2">
                <button
                  onClick={() => {
                    globalDispatch({
                      type: "PROCESS_LOGIN",
                    });
                    navigate("/");
                  }}
                  className="btn btn-danger w-100"
                >
                  Register
                </button>
              </div>
              <div className="mb-3">
                <p>
                  Already have an accont,{" "}
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
