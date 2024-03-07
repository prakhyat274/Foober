import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
