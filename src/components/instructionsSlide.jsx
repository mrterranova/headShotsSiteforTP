import React, { Component } from 'react'
import LineItem0 from './LineItem0'
import LineItem1 from './LineItem1'
import LineItem2 from './LineItem2'
import LineItem3 from './LineItem3'
import LineItem4 from './LineItem4_1'



import LineItem8 from './LineItem8'
import LineItem9 from './LineItem9'
import LineItem10 from './LineItem10'

class InstructionsSlide extends Component {

    state = {
        InstructionLineItems: [        
            <LineItem0/>,
            <LineItem1/>,             
            <LineItem2/>,
            <LineItem3/>,
            <LineItem4/>,
            "5. Have the photo taker center your image in the frame.",
            "6. Turn your body slightly to the right and then look at the camera.",
            `7. Smile and say cheese!😊🧀`,
            <LineItem8/>,
            <LineItem9/>,
            <LineItem10/>
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