import React, { Component } from 'react'
import InstructionsSlide from './instructionsSlide'

class Home extends Component {
    render() {
        return (
            <div className="homeDiv container">
                <a href="http://www.prexperts.com/_assets/images/Cactus%20News/Clamshell%20lighting%20650.png">Good lighting: an example.</a>
                <ol> <h3 style={{ margin: 0 }} id="instructions">Instructions:</h3>
                    <InstructionsSlide />
                </ol>
            </div>
        )
    }
}

export default Home