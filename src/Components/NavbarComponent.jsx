import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function NavbarComponent() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("Global state di Navbarjsx: ", globalState);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#1E323D" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand text-uppercase">
            Toko Online
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  } `}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {globalState.isLogin ? (
                <>
                  <li className="nav-item">
                    <Link to="/carts" className="nav-link" aria-current="page">
                      <div
                        style={{
                          position: "relative",
                          display: "block",
                          width: "30px",
                          height: "28px",
                          overflow: "hidden",
                        }}
                      >
                        {globalState.dataCarts.length > 0 ? (
                          <>
                            <span
                              style={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                zIndex: "2",
                                borderRadius: "5px",
                                backgroundColor: "red",
                                width: "18px",
                                height: "18px",
                                lineHeight: "18px",
                                display: "block",
                                textAlign: "center",
                                fontFamily: "sans-serif",
                                fontWeight: "500",
                                fontSize: "10px",
                                color: "white",
                              }}
                            >
                              {globalState.dataCarts.length}
                            </span>
                          </>
                        ) : (
                          <></>
                        )}

                        <img
                          src={require("../Image/icons/icons8-cart-48-white.png")}
                          alt=""
                          style={{
                            width: "25px",
                            height: "25px",
                            position: "relative",
                            top: "1px",
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Hello, {globalState.dataUserLogin.fullname}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            localStorage.clear();
                            globalDispatch({
                              type: "PROCESS_LOGOUT",
                            });
                            navigate("/login");
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" aria-current="page">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: "55px" }}></div>
    </>
  );
}
