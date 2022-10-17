import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const DashboardRoute = (props) => {
  if (Cookies.get("token") === undefined) {
    return <Navigate to={"/login"} />;
  } else if (Cookies.get("token") !== undefined) {
    return props.children;
  }
};

export default DashboardRoute;
