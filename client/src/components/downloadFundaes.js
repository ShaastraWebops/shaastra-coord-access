import React from "react";
import Select from "@atlaskit/select";
import Button from "@atlaskit/button";
import Banner from "@atlaskit/banner";
import { dbx } from "../utils/dbx";
import { Link } from "react-router-dom";
import { initialState, deptData } from "../utils/data";

class DownloadFundaes extends React.Component {
  state = initialState;

  onChangeHandler = (field, value) => {
    const { state } = this;
    state[field] = value;
    if (state.department) {
      state.isLoading = true;
      this.setState(state);
      dbx
        .filesGetTemporaryLink({
          path: `/guideBooks/${state.department}_guidebook.pdf`
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
          state.error = "selected GuideBook unavailable";
          this.setState(state);
        });
    } else {
      this.setState(state);
    }
  };

  render() {
    return (
      <div className="select-wrapper">
        <br />
        <Link to="/">
          <Button appearance="subtle" className="back-btn">
            go back
          </Button>
        </Link>
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
        <a
          href={this.state.applink}
          target="_blank"
          rel="noopener noreferrer"
          id="link"
        >
          <br />
        </a>
        <br />
        <p style={{ color: "blue", position: "relative", left: "70px" }}>
          Note: Events guideBook will be updated soon
        </p>
        <Button
          isLoading={this.state.isLoading}
          appearance="primary"
          isDisabled={!this.state.applink}
          className="download-btn"
          type="button"
          onClick={() => {
            document.getElementById("link").click();
            this.onChangeHandler("department", "");
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
    );
  }
}

export default DownloadFundaes;
