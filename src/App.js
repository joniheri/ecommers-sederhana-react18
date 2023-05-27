import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  GlobalContext,
  GlobalContextProvider,
} from "./Contexts/GlobateContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import NavbarComponent from "./Components/NavbarComponent";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product/Product";

import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Carts from "./Components/Carts";
import Register from "./Pages/Register";

function App() {
  const namaSaya = "Jon Heri";
  const dataBuah = ["mangga", "jeruk", "apple"];
  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
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
          </Routes>
          {/* End Content */}
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
