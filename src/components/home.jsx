import React, { Component } from 'react'
import InstructionsSlide from './instructionsSlide'

class Home extends Component {
    render() {
        return (
            <div className="homeDiv container">
                <h1 id="instructions">Instructions:</h1>
                <InstructionsSlide />
            </div>
        )
    }
}

export default Home