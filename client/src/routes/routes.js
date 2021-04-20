import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DownloadApp from "../components/downloadApp";
import UploadApp from "../components/uploadApp";
import Menu from "../components/main";
import DownloadFundaes from "../components/downloadFundaes";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Menu} exact />
        <Route path="/guideBooks" component={DownloadFundaes} exact />
        <Route path="/downloadApp" component={DownloadApp} exact />
        <Route path="/upload" component={UploadApp} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
