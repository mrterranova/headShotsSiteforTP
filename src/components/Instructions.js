import React, { Component } from 'react'
import Home from './home';


class Instructions extends Component {

    state = {
        isActive:false,
        btnTalk: "Read Instructions"
     }
   
     handleShow = ()=>{
         if (this.state.isActive === false){
         this.setState({
             isActive: true,
             btnTalk: "Collapse Instructions"
         })
     } else {
         this.setState({
             isActive: false, 
             btnTalk: "Read Instructions"
         })
     }
     }
   
     handleHide = () =>{
         this.setState({
             isActive: false
         })
     }
   
      render(){
          return(
              <>
                  <div className="container-instr">
                  <button className="preview-s-btns info" onClick={this.handleShow}>{this.state.btnTalk}</button>
                  </div>
              {this.state.isActive ?      
              <div className="home-container">       
                 <Home /></div> : null }
              </>
          )
      }
   }

export default Instructions