import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../Contexts/GlobateContext";
import { formatRupiah } from "../Configs/Config";
import { dataProduct } from "./Product/DataProduct";

export default function Home() {
  const navigate = useNavigate();

  const [globalState, globalDispatch] = useContext(GlobalContext);
  const [namaSaya, setNamaSaya] = useState("Nama Saya");
  const [input1, steInput1] = useState("");
  const [input2, steInput2] = useState("");
  const [increemandDecreeman, setIncreemandDecreeman] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultsDataProduct, setSearchResultsDataProduct] =
    useState(dataProduct);
  const [dataProductApiDummy, setDataProductApiDummy] = useState([]);

  useEffect(() => {
    getDataProductApi();
  }, []);

  const handleGantiNamaSaya = () => {
    if (namaSaya === "Nama Saya") {
      setNamaSaya("Jon Heri");
    } else if (namaSaya === "Jon Heri") {
      setNamaSaya("Wildan");
    } else if (namaSaya === "Wildan") {
      setNamaSaya("Nama Saya");
    } else {
      setNamaSaya("Nama Saya");
    }
  };

  const getDataProductApi = async () => {
    const response = await axios.get("http://localhost:3001/api/dataproduct");
    console.log("Data Product in Home.jsx: ", response);
    setDataProductApiDummy(response.data.data);
  };

  const handleOrder = (id) => {
    if (globalState.isLogin) {
      const dataById = searchResultsDataProduct.find((item) => item.id === id);
      console.log("dataProductById: ", dataById);
      globalDispatch({
        type: "ADD_PRODUCT_TO_CART",
        data: dataById,
      });
    } else {
      navigate("/login");
    }
  };

  // Search Data Product
  const handleOnChangeSearching = (e) => {
    setSearchInput(e.target.value);
    searchInData(e.target.value);
  };
  const searchInData = (searchInput) => {
    const results = dataProduct.filter((item) =>
      item.productName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResultsDataProduct(results);
  };
  // console.log(searchResultsDataProduct);
  // Search Data Product

  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../Image/1.jpg")}
              className="d-block w-100"
              alt="..."
              style={{ height: "320px", width: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../Image/2.jpg")}
              className="d-block w-100"
              alt="..."
              style={{ height: "320px", width: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../Image/11.jpg")}
              className="d-block w-100"
              alt="..."
              style={{ height: "320px", width: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Increemant Decreemant */}
      <div>
        <h1>{namaSaya}</h1>
        <h2>{increemandDecreeman}</h2>
        <button
          className="btn btn-success btn-sm mt-3 mb-3 me-3"
          onClick={handleGantiNamaSaya}
        >
          Rubah Nama
        </button>{" "}
        <button
          onClick={() => {
            setIncreemandDecreeman(increemandDecreeman - 1);
          }}
          className="btn btn-danger btn-sm me-3"
          style={{ width: "55px" }}
        >
          -
        </button>
        <button
          onClick={() => {
            setIncreemandDecreeman(increemandDecreeman + 1);
          }}
          className="btn btn-success btn-sm me-2"
          style={{ width: "55px" }}
        >
          +
        </button>
      </div>
      {/* End Increemant Decreemant */}

      {/* Data Product */}
      <div className="mb-5">
        <h1 className="mt-4" style={{ color: "#BF3919" }}>
          Let's Order
        </h1>

        <div>
          <h2>{input1}</h2>
          <input
            type="text"
            name="testing"
            value={input1}
            className="form-control mt-3 mb-3"
            onChange={(e) => {
              steInput1(e.target.value);
            }}
          />
          <h2>{input2}</h2>
          <input
            type="text"
            name="testing2"
            value={input2}
            className="form-control mt-3 mb-3"
            onChange={(e) => {
              steInput2(e.target.value);
            }}
          />
        </div>

        <div className="mt-5">
          <div className="row mb-3">
            <div className="col-lg-9">
              <h1>Data Product</h1>
            </div>
            <div className="col-lg-3 text-end">
              <input
                type="text"
                className="form-control"
                placeholder="Cari..."
                value={searchInput}
                onChange={handleOnChangeSearching}
              />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {searchResultsDataProduct.map((item, index) => {
              return (
                <div key={index} className="col">
                  <div className="card h-100 shadow">
                    <img
                      src={require("../Image/" + item.img)}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">ID : {item.id}</h5>
                      <h5 className="card-title">{item.productName}</h5>
                      <p className="card-text">{formatRupiah(item.price)}</p>
                      <div className="row">
                        <div className="col-lg-6 mb-2">
                          <button className="btn btn-secondary w-100">
                            Detail
                          </button>
                        </div>
                        <div className="col-lg-6 mb-2">
                          <button
                            onClick={() => {
                              handleOrder(item.id);
                            }}
                            className="btn btn-danger w-100"
                          >
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h2>Data Product Api Dummy</h2>
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {dataProductApiDummy.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.product}</td>
                  <td>{formatRupiah(item.price)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <pre>{JSON.stringify(globalState.dataCarts, null, 2)}</pre> */}
      {/* End Data Product */}
    </div>
  );
}
