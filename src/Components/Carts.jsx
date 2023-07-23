import React, { useContext } from "react";
import { formatRupiah } from "../Configs/Config";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function Carts() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  // console.log("GlobalState in Cart.jsx", globalState.dataCarts);

  const handleAddQtyProdactInCart = (id) => {
    // console.log("Id Product in Cart.jsx: ", id);
    globalDispatch({
      type: "ADD_PRODUCT_TO_CART",
      data: {
        id: id,
      },
    });
  };

  const HandleKurangkanQtyProductFromCart = (id) => {
    // console.log("Id Product in Cart.jsx: ", id);
    globalDispatch({
      type: "KURANGKAN_PRODUCT_FROM_CART",
      data: {
        id: id,
      },
    });
  };

  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <h1>Carts</h1>
      {globalState.dataCarts.length > 0 ? (
        <>
          <ul className="list-group list-group-flush">
            {globalState.dataCarts.map((item, index) => {
              return (
                <div key={index}>
                  <li className="list-group-item">
                    <img
                      src={require("../Image/" + item.img)}
                      alt=""
                      style={{
                        width: "60px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "7px",
                      }}
                    />
                    <br />
                    <span>ID : {item.id}</span>
                    <br />
                    <span>{item.productName}</span>
                    <br />
                    <span>Harga : {formatRupiah(item.price)}</span>
                    <br />
                    <span>Qty : </span>
                    <br />
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="input-group">
                          <span
                            onClick={() => {
                              HandleKurangkanQtyProductFromCart(item.id);
                            }}
                            className="input-group-text btn btn-danger"
                          >
                            -
                          </span>
                          <input
                            type="text"
                            className="form-control text-center"
                            aria-label="Amount (to the nearest dollar)"
                            value={item.qty}
                          />
                          <span
                            onClick={() => {
                              handleAddQtyProdactInCart(item.id);
                            }}
                            className="input-group-text btn btn-success"
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-1">
                        <button
                          onClick={() => {
                            globalDispatch({
                              type: "REMOVE_PRODUCT_FROM_CART",
                              data: {
                                id: item.id,
                              },
                            });
                          }}
                          className="btn btn-danger"
                        >
                          <img
                            src={require("../Image/icons/Trash.png")}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <span>
                        Sub Total : {formatRupiah(item.price * item.qty)}
                      </span>
                    </div>
                  </li>
                </div>
              );
            })}
            <div>
              <h2>Total Harga : </h2>
            </div>
          </ul>
          {/* <pre>{JSON.stringify(globalState.dataCarts, null, 2)}</pre> */}
        </>
      ) : (
        <>
          <div className="alert alert-danger">Keranjang KOSONG</div>
        </>
      )}
    </div>
  );
}
