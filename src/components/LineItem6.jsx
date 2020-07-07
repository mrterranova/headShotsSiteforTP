import React, { Component } from "react";

export default class LineItem6 extends Component {
  render() {
    return (
      <div className="lineItem">
        <ol>
        <li value="6">
        Turn your body slightly to the right and look at the camera
          <br/>
          <img
            style={{width:"300px"}}
            className="responsive"
            src="/img/tilt.png"
            alt="tilt self"
          ></img>
        </li>
        </ol>
      </div>
    );
  }
}