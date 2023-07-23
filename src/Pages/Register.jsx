import React, { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import { ApiVersi1 } from "../Configs/ApiConfig";

export default function Register() {
  const navigate = useNavigate();
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const [emailInput, setEmailInput] = useState("");
  const [fullnameInput, setFullnameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [messageAlert, setMessageAlert] = useState("");
  const [typeAlert, setTypeAlert] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (passwordInput !== confirmPasswordInput) {
        setMessageAlert("Confirmasi Password Tidak Cocok");
        setTypeAlert("fail");
      } else {
        setMessageAlert("");
        const response = await ApiVersi1.post("/register", {
          email: emailInput,
          fullname: fullnameInput,
          password: passwordInput,
        });
        // console.log(response.data.message);
        setMessageAlert(response.data.message);
        setTypeAlert(response.data.response);
      }
    } catch (error) {
      // console.log(error.response.data.message);
      setMessageAlert(error.response.data.message);
      setTypeAlert(error.response.data.response);
    }
  };

  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <div className="row mb-5">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                {messageAlert !== "" && (
                  <div
                    className={`alert alert-dismissible fade show ${
                      typeAlert === "fail" ? "alert-danger" : "alert-success"
                    }`}
                    role="alert"
                  >
                    {messageAlert}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}

                <h1 style={{ textAlign: "center" }}>Register</h1>
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
                    type="text"
                    className="form-control"
                    placeholder="Fullname"
                    value={fullnameInput}
                    onChange={(e) => {
                      setFullnameInput(e.target.value);
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
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPasswordInput}
                    onChange={(e) => {
                      setConfirmPasswordInput(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <button type="submit" className="btn btn-danger w-100">
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
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
