import React, { Component } from 'react';
import LineItem0 from './LineItem0';
import LineItem1 from './LineItem1';
import LineItem2 from './LineItem2';
import LineItem3 from './LineItem3';
import LineItem4 from './LineItem4';
import LineItem5 from './LineItem5';
import LineItem6 from './LineItem6';
import LineItem7 from './LineItem7';
import LineItem8 from './LineItem8';
import LineItem9 from './LineItem9';
import LineItem10 from './LineItem10';
import LineItem11 from './LineItem11';


export default class InstructionsSlide extends Component {

    state = {
        InstructionLineItems: [        
            <LineItem0/>,
            <LineItem1/>,             
            <LineItem2/>,
            <LineItem3/>,
            <LineItem4/>,
            <LineItem5/>,
            <LineItem6/>,
            <LineItem7/>,
            <LineItem8/>,
            <LineItem9/>,
            <LineItem10/>,
            <LineItem11/>
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
                <div>{this.state.InstructionLineItems[this.state.XYZ]}</div>
                <div className="buttonContainer">
                    <button id="bckBtn" onClick={this.handleClickMinus}>Back</button>
                    <button id="goBtn" onClick={this.handleClickPlus} >Next</button>
                </div>
            </div>
        )
    }
}