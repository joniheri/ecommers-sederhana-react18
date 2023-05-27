import React from "react";
import { dataArray, dataKedua } from "./Data";

export default function Product() {
  // console.log(dataArray);

  return (
    <div className="container">
      <h1>Data Product</h1>
      <table className="table table-striped table-sm">
        <thead>
          <tr style={{ backgroundColor: "black", color: "white" }}>
            <th scope="col">No</th>
            <th scope="col">Nama Product</th>
            <th scope="col">Gambar</th>
            <th scope="col">Harga</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item, index) => {
            return (
              <tr>
                <th>{index + 1}</th>
                <td>{item.productName}</td>
                <td>{item.imgUrl}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
