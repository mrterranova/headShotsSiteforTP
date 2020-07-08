import React, { Component } from "react";

export default class LineItem4 extends Component {
  render() {
    return (
      <div className="lineItem">
        <p>
          4. Make sure that you have good lighting. You want to be lit with a warm
          light coming from above at a slight angle. You do not need a reflector
          but you do not want to be directly under a light or back lit either.
          <br />
          <a  
            href="http://www.prexperts.com/_assets/images/Cactus%20News/Clamshell%20lighting%20650.png">
            Diagram of Good Lighting
          </a> 
          <br/>
          <img
            className="responsive"
            id="#lightInfo"
            src="img/lightInfo.png"
            alt="example of how to set up lights from biteable.com"
          ></img>
          <br/>
          <span className="attribute">
          <a 
            href="https://biteable.com/blog/best-video-lighting-kits/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image borrowed from Biteable.com
          </a>
          </span>
          </p>
        
      </div>
    );
  }
}
