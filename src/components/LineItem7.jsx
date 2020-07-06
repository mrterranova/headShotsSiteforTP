import React, { Component } from "react";

export default class LineItem8 extends Component {
  render() {
    return (
      <div className="lineItem">
        <li value="7">
        Smile and say cheese!😊🧀
          <br/>
          <img
            style={{width:"300px"}}
            className="responsive"
            src="/img/cam.png"
            alt="camera"
          ></img>
        </li>
      </div>
    );
  }
}