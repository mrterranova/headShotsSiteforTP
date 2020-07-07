import React, { Component } from 'react'
import InstructionsSlide from './instructionsSlide'

class Home extends Component {
    render() {
        return (
            <div className="homeDiv container">
                <ol> <h3 style={{ margin: 0 }} id="instructions">Instructions:</h3>
                    <InstructionsSlide />
                </ol>
            </div>
        )
    }
}

export default Home