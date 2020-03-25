import React from "react";
import "./styles/app.css";
import "@atlaskit/css-reset";
import logoLight from "./images/logo_light.png";
import logoDark from "./images/logo_dark.png";
import AppRoutes from "./routes/routes";
const App = () => {
  return (
    <div className="app">
      <img src={logoLight} alt="" className="altLogo" />
      <div className="form-card">
        <img src={logoDark} alt="Shaastra 2020" className="logo dark" />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
