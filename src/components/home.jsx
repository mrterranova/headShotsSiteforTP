import React, { Component } from 'react'
import InstructionsSlide from './instructionsSlide'

class Home extends Component {
    render () {
    return (
        <div className="homeDiv container">
            Welcome to the Headshot App. Please take your photo using the below application. 
            <br/>
            You need: to be dressed professionally, a plain blue or white background, good lighting, and if possible help from a family member or a friend.
                <br />
                <a href="http://www.prexperts.com/_assets/images/Cactus%20News/Clamshell%20lighting%20650.png">Good lighting: an example.</a>
                <ol> <h3 style={{ margin: 0 }} id="instructions">Instructions:</h3>
                    <InstructionsSlide/>
                </ol>
        </div>
        )
    }
}

export default Home