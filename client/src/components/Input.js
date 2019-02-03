import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {value :''};
        this.displayInput = this.displayInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        value: ""
    }

    displayInput = () =>{
        console.log("ca marche : " + this.state.value);
        // const centerName = {action: this.state.action}


        
    }

    handleChange(event) {
        this.setState({value : event.target.value});
    }



    render(){
        let{ action } = this.state;
        return(
            <div>
                <input type = "text" name = "name" value= {this.state.value} onChange ={this.handleChange} />
                <button onClick ={this.displayInput}>Show Place</button>
            </div>
        )
    }
}

export default Input