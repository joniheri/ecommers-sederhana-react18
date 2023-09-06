import React, { useState } from "react";
import { ApiVersi1 } from "../../Configs/ApiConfig";

export default function AddProduct() {
  const [changeImage, setChangeImage] = useState("");
  const [uploadImage, setUploadImage] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      if (changeImage === "") {
        console.log("File gambar harus ada");
        return;
      }
      const response = await ApiVersi1.post(
        "/addproduct-upload-single",
        {
          thumbnail: uploadImage,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <div className="row">
        <div className="col-lg-4">
          <form onSubmit={handleAddProduct}>
            <div className="mb-3">
              <img
                src={
                  changeImage === ""
                    ? require("../../Image/img-preview.png")
                    : changeImage
                }
                alt=""
                className="img-thumbnail shadow"
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
                onChange={(e) => {
                  const img = e.target.files;
                  console.log(img);
                  setChangeImage(URL.createObjectURL(e.target.files[0]));
                  setUploadImage(e.target.files[0]);
                }}
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-success w-100">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
