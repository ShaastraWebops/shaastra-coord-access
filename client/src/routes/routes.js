import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DownloadApp from "../components/downloadApp";
import UploadApp from "../components/uploadApp";
import Main from "../components/main";
import DownloadFundaes from "../components/downloadFundaes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/guideBooks" component={DownloadFundaes} exact />
        <Route path="/downloadApp" component={DownloadApp} exact />
        <Route path="/upload" component={UploadApp} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
