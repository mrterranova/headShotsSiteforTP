import React, { Component } from "react";

export default class LineItem2 extends Component {
  render() {
    return (
      <div className="lineItem">
        <ol>
        <li value="2">
          Find a plain neutral color wall to use as a background. <br/>
          <img 
            className="responsive"
            src="backgroundCheck.png"
            alt="example of good background and bad background"
          ></img>
        </li>
        </ol>
      </div>
    );
  }
}
