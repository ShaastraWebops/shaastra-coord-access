import React from "react";
import Button from "@atlaskit/button";

const Menu = () => {
  return (
    <div className="select-wrapper">
      <a href="/guidebooks">
        <Button appearance="danger" className="download-btn" type="button">
          Download Guide Books
        </Button>
      </a>
      <a href="/downloadApp">
        <Button appearance="primary" className="download-btn" type="button">
          Download App
        </Button>
      </a>
      <br />
      <a href="/upload">
        <Button appearance="warning" className="download-btn" type="button">
          Submit App
        </Button>
      </a>
    </div>
  );
};

export default Menu;
