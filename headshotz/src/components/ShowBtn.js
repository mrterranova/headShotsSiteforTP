import React, {Component} from 'react'; 

class ShowBtn extends Component{

    state = {
       isActive:false,
       btnTalk: "show"
    }
  
    handleShow = ()=>{
        if (this.state.isActive === false){
        this.setState({
            isActive: true,
            btnTalk: "hide"
        })
    } else {
        this.setState({
            isActive: false, 
            btnTalk: "show"
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
             <div>
                 <div className="btnDiv">
                 <button id="hideBtn" onClick={this.handleShow}>{this.state.btnTalk}</button>
                 </div>
             {this.state.isActive ?             
             <div className="overlay">
                <img id="placeholder" src="/img/placeholder.png" alt="placeholder"/>
            </div> : null }
             </div>
         )
     }
  }
  
  export default ShowBtn;