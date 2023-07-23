import axios from "axios";

export const ApiVersi1 = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const setToken = (token) => {
  if (token) {
    ApiVersi1.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete ApiVersi1.defaults.headers.common["Authorization"];
  }
};
