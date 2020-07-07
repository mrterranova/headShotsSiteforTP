import React, { Component } from "react";

export default class LineItem5 extends Component {
  render() {
    return (
      <div className="lineItem">
        <ol>
        <li value="5">
        Have the photographer center your image in the frame.
          <br/>
          <img
            style={{width:"300px"}}
            className="responsive"
            src="/img/center.png"
            alt="center self"
          ></img>
        </li>
        </ol>
      </div>
    );
  }
}