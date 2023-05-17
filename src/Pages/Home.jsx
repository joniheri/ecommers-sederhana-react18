import React, { useState } from "react";
import { dataProduct } from "./Product/DataProduct";

export default function Home() {
  const [namaSaya, setNamaSaya] = useState("");
  const [increemandDecreeman, setIncreemandDecreeman] = useState(1);

  console.log(namaSaya);

  const handleGantiNamaSaya = () => {
    if (namaSaya == "") {
      setNamaSaya("Jon Heri");
    } else if (namaSaya == "Jon Heri") {
      setNamaSaya("Wildan");
    } else if (namaSaya == "Wildan") {
      setNamaSaya("");
    } else {
      setNamaSaya("");
    }
  };

  console.log("Data Product: ", dataProduct);

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

      {/* <h1>{namaSaya}</h1>
      <h2>{increemandDecreeman}</h2> */}

      {/* <button
        className="btn btn-success btn-sm mt-3 mb-3 me-3"
        onClick={handleGantiNamaSaya}
      >
        Rubah Nama
      </button> */}

      {/* <button
        onClick={() => {
          setIncreemandDecreeman(increemandDecreeman + 1);
        }}
        className="btn btn-success btn-sm me-2"
      >
        +
      </button>

      <button
        onClick={() => {
          setIncreemandDecreeman(increemandDecreeman - 1);
        }}
        className="btn btn-danger btn-sm"
      >
        -
      </button> */}

      {/* Data Product */}
      <div className="mb-5">
        <h1 className="mt-4" style={{ color: "#BF3919" }}>
          Let's Order
        </h1>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {dataProduct.map((item, index) => {
            return (
              <div class="col">
                <div class="card h-100 shadow">
                  <img
                    src={item.img}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "300px",
                      width: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.productName}</h5>
                    <p class="card-text">IDR {item.price}</p>
                    <div className="row">
                      <div className="col-lg-6">
                        <button className="btn btn-secondary w-100">
                          Detail
                        </button>
                      </div>
                      <div className="col-lg-6">
                        <button className="btn btn-danger w-100">Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Data Product */}
    </div>
  );
}
