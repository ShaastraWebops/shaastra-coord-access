import React from "react";
import Button from "@atlaskit/button";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="select-wrapper">
      <Link to="/fundaeBooks">
        <Button appearance="danger" className="download-btn" type="button">
          Download Fundae Books
        </Button>
      </Link>
      <Link to="/downloadApp">
        <Button appearance="primary" className="download-btn" type="button">
          Download App
        </Button>
      </Link>
      <br />
      <Link to="/upload">
        <Button appearance="warning" className="download-btn" type="button">
          Submit App
        </Button>
      </Link>
    </div>
  );
};

export default Main;
