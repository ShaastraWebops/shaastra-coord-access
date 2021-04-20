import React from "react";
import "./styles/app.css";
import "@atlaskit/css-reset";
import AppRoutes from "./routes/routes";
const App = () => {
  const logoLight = require("./images/ShaastraWhite2022.png")
  // const logoDark = require("./images/ShaastraBlack2022.png")
  return (
    <div className="app">
      <div className="form-card">
        <img src={logoLight} alt="Shaastra 2020" className="logo dark" />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
