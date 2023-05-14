import React, { useState } from "react";

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

      <h1>{namaSaya}</h1>
      <h2>{increemandDecreeman}</h2>

      <button
        className="btn btn-success btn-sm mt-3 mb-3 me-3"
        onClick={handleGantiNamaSaya}
      >
        Rubah Nama
      </button>

      <button
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
      </button>

      <p style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum commodi
        earum quidem, soluta blanditiis sint labore ipsa voluptatibus sequi
        libero velit hic corrupti debitis id, magnam nemo iure, vero nisi. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum
        explicabo adipisci commodi obcaecati, consequatur quis quo totam ea
        iusto accusamus rerum alias unde vero id ratione officia, veniam minus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta
        enim eius natus similique, odio saepe nisi id, autem, nostrum veniam
        itaque sunt! A consequatur, accusantium voluptas ratione aspernatur
        dignissimos.
      </p>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum commodi
        earum quidem, soluta blanditiis sint labore ipsa voluptatibus sequi
        libero velit hic corrupti debitis id, magnam nemo iure, vero nisi. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum
        explicabo adipisci commodi obcaecati, consequatur quis quo totam ea
        iusto accusamus rerum alias unde vero id ratione officia, veniam minus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta
        enim eius natus similique, odio saepe nisi id, autem, nostrum veniam
        itaque sunt! A consequatur, accusantium voluptas ratione aspernatur
        dignissimos.
      </p>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum commodi
        earum quidem, soluta blanditiis sint labore ipsa voluptatibus sequi
        libero velit hic corrupti debitis id, magnam nemo iure, vero nisi. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum
        explicabo adipisci commodi obcaecati, consequatur quis quo totam ea
        iusto accusamus rerum alias unde vero id ratione officia, veniam minus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta
        enim eius natus similique, odio saepe nisi id, autem, nostrum veniam
        itaque sunt! A consequatur, accusantium voluptas ratione aspernatur
        dignissimos.
      </p>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum commodi
        earum quidem, soluta blanditiis sint labore ipsa voluptatibus sequi
        libero velit hic corrupti debitis id, magnam nemo iure, vero nisi. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum
        explicabo adipisci commodi obcaecati, consequatur quis quo totam ea
        iusto accusamus rerum alias unde vero id ratione officia, veniam minus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta
        enim eius natus similique, odio saepe nisi id, autem, nostrum veniam
        itaque sunt! A consequatur, accusantium voluptas ratione aspernatur
        dignissimos.
      </p>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum commodi
        earum quidem, soluta blanditiis sint labore ipsa voluptatibus sequi
        libero velit hic corrupti debitis id, magnam nemo iure, vero nisi. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum
        explicabo adipisci commodi obcaecati, consequatur quis quo totam ea
        iusto accusamus rerum alias unde vero id ratione officia, veniam minus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta
        enim eius natus similique, odio saepe nisi id, autem, nostrum veniam
        itaque sunt! A consequatur, accusantium voluptas ratione aspernatur
        dignissimos.
      </p>
    </div>
  );
}
