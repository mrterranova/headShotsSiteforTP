import React, { Component } from "react";

export default class LineItem8 extends Component {
  render() {
    return (
      <div className="lineItem">
        <ol>
        <li value="7">
        Smile and say cheese!<span role="img" aria-label="smile">😊</span><span role="img" aria-label="cheese">🧀</span>
          <br/>
          <img
            style={{width:"300px"}}
            className="responsive"
            src="/img/cam.png"
            alt="camera"
          ></img>
        </li>
        </ol>
      </div>
    );
  }
}