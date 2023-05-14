import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product/Product";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const namaSaya = "Jon Heri";
  const dataBuah = ["mangga", "jeruk", "apple"];
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About nilaiNama={namaSaya} dataBuah={dataBuah} />}
          />
          <Route element={<PrivateRoute />}>
            <Route path="/product" element={<Product />} />
          </Route>
        </Routes>
        {/* End Content */}
      </BrowserRouter>
    </>
  );
}

export default App;
