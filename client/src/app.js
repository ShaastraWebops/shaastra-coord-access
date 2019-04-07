import React from "react";
import "./app.css";
import logoLight from "./logo_light.svg";
import logoDark from "./logo_dark.svg";
import Select from "@atlaskit/select";
import Button from "@atlaskit/button";
import "@atlaskit/css-reset";
import { dbx } from "./util";
import altLogo from "./2020.png";
import Banner from "@atlaskit/banner";

const initialState = {
  isLoading: false,
  department: "",
  position: "",
  applink: ""
};

const deptData = [
  { label: "Finance", value: "finance" },
  { label: "Shows & Exhibitions", value: "sne" },
  { label: "Sponsorship & PR", value: "spons" },
  { label: "Evolve", value: "evolve" },
  { label: "Events & Workshops", value: "events" },
  { label: "Operations & Infrastructure Planning", value: "onip" },
  { label: "Concept & Design", value: "cnd" },
  { label: "Publicity", value: "publicity" },
  { label: "Envisage", value: "envisage" },
  { label: "WebOps", value: "webops" }
];

let appData = {
  sne: [
    { label: "Shows Coordinator", value: "shows_coord" },
    { label: "Exhibitions Coordinator", value: "exhibitions_coord" },
    { label: "TechCreation Coordinator", value: "techcreation_coord" },
    { label: "Tech & Innovation Fair Coordinator", value: "tif_coord" }
  ],
  envisage: [{ label: "Coordinator", value: "coord" }],
  finance: [
    { label: "Coordinator", value: "coord" },
    { label: "Manager", value: "manager" }
  ],
  onip: [
    { label: "Coordinator", value: "coord" },
    { label: "Catering Head", value: "catering_head" },
    { label: "Operations Head", value: "operations_head" },
    { label: "Hospitality Head", value: "hospitality_head" }
  ],
  cnd: [
    { label: "Creative Branding & Design Coordinator", value: "design_coord" },
    { label: "Creative Ambience Coordinator", value: "ambience_coord" },
    { label: "Video Editing & VFX Coordinator", value: "vfx_coord" },
    { label: "Media Coordinator", value: "media_coord" }
  ],
  spons: [
    { label: "Engage & Endeavour Coordinator", value: "engage_endeavour_coord" }
  ],
  evolve: [
    { label: "Spotlight Coordinator", value: "spotlight_coord" },
    { label: "Summit Coordinator", value: "summit_coord" },
    { label: "Tech & Policy Coordinator", value: "tnp_coord" },
    { label: "Spotlight Head", value: "spotlight_head" },
    { label: "Summit Head", value: "summit_head" },
    { label: "Tech & Policy Head", value: "tnp_head" }
  ],
  publicity: [{ label: "Coordinator", value: "coord" }],
  events: [{ label: "Events & Workshops Coordinator", value: "coord" }],
  webops: [{ label: "Full Stack Coordinator", value: "coord" }]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(field, value) {
    const { state } = this;
    state[field] = value;
    if (state.department && state.position) {
      state.isLoading = true;
      this.setState(state);
      dbx
        .filesGetTemporaryLink({
          path: `/${state.department}_${state.position}.pdf`
        })
        .then(data => {
          state.applink = data.link;
          state.isLoading = false;
          state.error = "";
          this.setState(state);
        })
        .catch(() => {
          state.isLoading = false;
          state.applink = "";
          state.error = "selected app unavailable";
          this.setState(state);
        });
    } else {
      this.setState(state);
    }
  }

  render() {
    return (
      <div className="app">
        <img src={altLogo} alt="" className="altLogo" />
        <div className="form-card">
          <img src={logoLight} alt="Shaastra 2020" className="logo light" />
          <img src={logoDark} alt="Shaastra 2020" className="logo dark" />
          <div className="select-wrapper">
            <Select
              className="single-select"
              classNamePrefix="react-select"
              onChange={({ value }) => {
                this.onChangeHandler("department", value);
              }}
              options={deptData}
              placeholder="Choose a Department"
            />
            <br />
            <Select
              className="single-select"
              classNamePrefix="react-select"
              onChange={({ value }) => {
                this.onChangeHandler("position", value);
              }}
              options={appData[this.state.department]}
              placeholder="Choose a Position"
            />
            <a
              href={this.state.applink}
              target="_blank"
              rel="noopener noreferrer"
              id="link"
            />
            <Button
              isLoading={this.state.isLoading}
              appearance="primary"
              isDisabled={!this.state.applink}
              className="download-btn"
              type="button"
              onClick={() => {
                document.getElementById("link").click();
                this.onChangeHandler("department", "");
                this.onChangeHandler("position", "");
                this.setState(initialState);
              }}
            >
              Download
            </Button>
            <br />
            <br />
            <Banner appearance="error" isOpen={this.state.error}>
              Sorry, {this.state.error}
            </Banner>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
