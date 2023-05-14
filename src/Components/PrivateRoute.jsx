import React from "react";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const auth = {
    token: false,
  };
  return (
    <div className="container">
      {auth.token ? <Outlet /> : <h1>Anda Harus Login</h1>}
    </div>
  );
}
