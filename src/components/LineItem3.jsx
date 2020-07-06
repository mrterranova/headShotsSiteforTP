import React, { Component } from "react";

export default class LineItem3 extends Component {
  render() {
    return (
      <div className="lineItem">
        <li value="3">
          Make sure that you have good lighting. You want to be lit with a warm
          light coming from above at a slight angle. You do not need a reflector
          but you do not want to be directly under a light or back lit either.
          <br/>
          <img
            className="responsive"
            src="lightInfo.png"
            alt="example of how to set up lights from biteable.com"
          ></img>
          <br/>
          <a
            href="https://biteable.com/blog/best-video-lighting-kits/"
            target="_blank"
          >
            Image borrowed from Biteable.com
          </a>
        </li>
      </div>
    );
  }
}
