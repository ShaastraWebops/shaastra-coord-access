import React from "react";
import "./styles/app.css";
import "@atlaskit/css-reset";
import logoLight from "./images/logo_light.svg";
import logoDark from "./images/logo_dark.svg";
import altLogo from "./images/2020.png";
import AppRoutes from "./routes/routes";
const App = () => {
  return (
    <div className="app">
      <img src={altLogo} alt="" className="altLogo" />
      <div className="form-card">
        <img src={logoLight} alt="Shaastra 2020" className="logo light" />
        <img src={logoDark} alt="Shaastra 2020" className="logo dark" />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
