import React, { Component } from "react";

export default class LineItem4 extends Component {
  render() {
    return (
      <div className="lineItem">
        <li value="4">
          Click show outline button to display the frame to assist with
          centering yourself in the photo. You can click again (Hide Outline) to
          hide it. It will not appear in your final photo either way.
          <br/>
          <img
            className="responsive"
            src="cam1.png"
            alt="center yourself in the frame"
          ></img>
        </li>
      </div>
    );
  }
}
