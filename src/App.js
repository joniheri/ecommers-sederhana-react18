import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { GlobalContext } from "./Contexts/GlobalContext";
import { setToken, ApiVersi1 } from "./Configs/ApiConfig";

import NavbarComponent from "./Components/NavbarComponent";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product/Product";

import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Carts from "./Components/Carts";
import Register from "./Pages/Register";
import AddProduct from "./Pages/Product/AddProduct";

if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  const [globalState, globalDispatch] = useContext(GlobalContext);

  const namaSaya = "Jon Heri";
  const dataBuah = ["mangga", "jeruk", "apple"];

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    // console.log("Token: ", localStorage.token);
    try {
      if (localStorage.token) {
        const response = await ApiVersi1.get("/check-token");
        // console.log("CheckToken in App.js: ", response);

        globalDispatch({
          type: "PROCESS_LOGIN",
          data: response.data.user,
        });
      } else {
        localStorage.clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />

        {/* Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About nilaiNama={namaSaya} dataBuah={dataBuah} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/product" element={<Product />} />
            <Route path="/carts" element={<Carts />} />
          </Route>
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        {/* End Content */}
      </BrowserRouter>
    </>
  );
}

export default App;
