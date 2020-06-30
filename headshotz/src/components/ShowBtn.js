import React, {Component} from 'react'; 

class ShowBtn extends Component{

    state = {
       isActive:false
    }
  
    handleShow = ()=>{
        this.setState({
            isActive: true
        })
    }
  
    handleHide = () =>{
        this.setState({
            isActive: false
        })
    }
  
     render(){
         return(
             <div>
             {this.state.isActive ?             
             <div className="overlay">
                <img id="placeholder" src="/img/placeholder.png" />
            </div> : null }
             <button id="hideBtn" onClick={this.handleHide}>Hide</button>
             <button id="showBtn" onClick={this.handleShow}>Show</button>
             </div>
         )
     }
  }
  
  export default ShowBtn;