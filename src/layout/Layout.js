import React from "react";
import NavBar from "../component/Navbar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default Layout;
