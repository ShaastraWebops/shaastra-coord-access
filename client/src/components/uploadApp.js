import React from "react";
import Select from "@atlaskit/select";
import Button from "@atlaskit/button";
import Banner from "@atlaskit/banner";
import InlineDialog from "@atlaskit/inline-dialog";
import TextField from "@atlaskit/textfield";
import { dbx } from "../utils/dbx";
import { initialState, deptData, appData } from "../utils/data";

class UploadApp extends React.Component {
  state = initialState;

  onChangeHandler = (field, value) => {
    const { state } = this;
    state[field] = value;
    this.setState(state);
  };

  onChangeHandlerTextField = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  uploadFile = () => {
    const SIZE_LIMIT = 100 * 1024 * 1024;
    if (this.state.application.size < SIZE_LIMIT) {
      const extension = this.state.application.name.split(".").pop();
      const modifiedName = this.state.name
        .toLowerCase()
        .split(" ")
        .join("_");
      this.setState(() => ({ isLoading: true }));
      dbx
        .filesUpload({
          path: `/submitted/${this.state.department}/${
            this.state.position
          }/${modifiedName}_${this.state.rollno}_${
            this.state.secretKey
          }.${extension}`,
          contents: this.state.application,
          mode: "overwrite"
        })
        .then(response => {
          this.setState(() => ({
            ...initialState,
            successMsg: "App Submitted"
          }));
        })
        .catch(err => {
          this.setState(() => ({
            ...initialState,
            error: "Error Uploading App"
          }));
        });
    }
  };

  render() {
    return (
      <div className="select-wrapper">
        <br />
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
        <br />
        <TextField
          name="name"
          placeholder="Enter full name"
          className="upload-text"
          value={this.state.name}
          onChange={this.onChangeHandlerTextField}
        />
        <br />
        <TextField
          name="rollno"
          placeholder="Enter roll number"
          className="upload-text"
          value={this.state.rollno}
          onChange={this.onChangeHandlerTextField}
        />
        <br />
        <InlineDialog
          content="Create your own secret key that you can use to edit submission in
          future. Please remember it."
          isOpen={this.state.dialogOpen}
          placement="top"
        >
          <TextField
            name="secretKey"
            placeholder="Enter 6 Digit Secret Key"
            className="upload-text"
            type="password"
            onChange={this.onChangeHandlerTextField}
            maxLength={6}
            onFocus={() => {
              this.setState(() => ({
                dialogOpen: true
              }));
            }}
            onBlur={() => {
              this.setState(() => ({
                dialogOpen: false
              }));
            }}
          />
        </InlineDialog>
        <br />
        <TextField
          className="upload-text"
          type="file"
          id="submitApp"
          onChange={e => {
            this.setState({
              application: e.target.files[0]
            });
          }}
        />

        <br />
        <Button
          isLoading={this.state.isLoading}
          appearance="primary"
          isDisabled={
            !this.state.department ||
            !this.state.name ||
            !this.state.position ||
            !this.state.application ||
            !this.state.rollno ||
            !this.state.secretKey
          }
          className="download-btn"
          type="button"
          onClick={() => {
            this.uploadFile();
          }}
        >
          Submit
        </Button>
        <br />
        <br />
        <Banner appearance="error" isOpen={this.state.error}>
          Sorry, {this.state.error}
        </Banner>
        <Banner appearance="announcement" isOpen={this.state.successMsg}>
          {this.state.successMsg}
          <br />
        </Banner>
      </div>
    );
  }
}

export default UploadApp;
