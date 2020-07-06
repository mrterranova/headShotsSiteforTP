import React, { Component } from 'react'
import LineItem0 from './LineItem0'
import LineItem1 from './LineItem1'

class InstructionsSlide extends Component {

    state = {
        InstructionLineItems: [        
            <LineItem0/>,
            <LineItem1/>,
        "2. Find a plain neutral color wall to use as a background.",

        `3. Make sure that you have good lighting. You want to be lit with a warm light coming from above at a slight angle. You do not need a reflector but you do not want to be directly under a light or back lit either.`,

        "4. Click show to display the frame where you will center yourself in.",

        "5. Have the photo taker center your image in the frame.",

        "6. Turn your body slightly to the right and then look at the camera.",

        `7. Smile and say cheese!😊🧀`,

        "8. Click on the circle to take the photo.",

        "9. If you like the photo, then save it to your device and send it to your ************",

        "10. If not click retake and follow steps 5 through 10 again."
        ],
        XYZ: 0
    }
    handleClickMinus= () => {
        this.setState({XYZ:this.state.XYZ - 1})
        this.handleOverLengthMinus()
    }
    handleClickPlus= () => {
        this.setState({XYZ:this.state.XYZ + 1})
        this.handleOverLengthPlus()
    }
    handleOverLengthMinus = () => {
        if(this.state.XYZ <=0 ) {
            this.setState({XYZ: this.state.InstructionLineItems.length-1})
        }
    }
    handleOverLengthPlus=() => {
        if(this.state.XYZ >=this.state.InstructionLineItems.length-1 ) {
            this.setState({XYZ: 0})
        }
    }


    render () {

        return (
            <div >
                <div>{this.state.InstructionLineItems[this.state.XYZ]}</div><br/>
                <div className="buttonContainer">
                    <div className="btnDiv" id="goBtn"><button  onClick={this.handleClickMinus}>Go Back</button></div>
                    <div className="btnDiv" id="bckBtn"><button onClick={this.handleClickPlus} >Next Item</button></div>
                </div>
            </div>
        )
    }
}

export default InstructionsSlide