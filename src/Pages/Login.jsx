import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { useNavigate, Link } from "react-router-dom";
import { ApiVersi1 } from "../Configs/ApiConfig";

export default function Login() {
  const navigate = useNavigate();
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const [messageAlert, setMessageAlert] = useState("");
  const [typeAlert, setTypeAlert] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      if (localStorage.token) {
        const response = await ApiVersi1.get("/check-token");
        // console.log(response);
        globalDispatch({
          type: "PROCESS_LOGIN",
          data: response.data.user,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // console.log("Handle Login Disini");
      const response = await ApiVersi1.post("/login", {
        email: emailInput,
        password: passwordInput,
      });
      console.log("Response in Login.jsx: ", response);
      setMessageAlert(response.data.message);
      setTypeAlert(response.data.response);

      setTimeout(() => {
        globalDispatch({
          type: "PROCESS_LOGIN",
          data: response.data.data,
        });
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      setMessageAlert(error.response.data.message);
      setTypeAlert(error.response.data.response);
    }
  };

  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                {messageAlert !== "" && (
                  <div
                    className={`d-flex alert alert-dismissible fade show ${
                      typeAlert === "fail" ? "alert-danger" : "alert-success"
                    }`}
                    role="alert"
                  >
                    {typeAlert === "success" && (
                      <div className="spinner-border me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                    {messageAlert}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <div className="mb-4 mt-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <button type="submit" className="btn btn-danger w-100">
                    Login
                  </button>
                </div>
                <div className="mb-3">
                  <p>
                    Don't have an accont,{" "}
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      Register Here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
