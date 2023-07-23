import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function PrivateRoute() {
  const [globalState] = useContext(GlobalContext);

  return (
    <div className="container">
      {globalState.isLogin ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
}
