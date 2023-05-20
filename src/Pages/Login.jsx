import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobateContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h1>Login</h1>
              <div className="mb-4 mt-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
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
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
