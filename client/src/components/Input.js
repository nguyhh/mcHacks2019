import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {

    state = {
        action: ""
    }

    addInput = () =>{
        const place = {action: this.state.action}

        if(place.action && place.action.length>0){
            axios.post('/routes/route', place)
                .then(res => {
                    if(res.data){
                        this.props.getPlace();
                        this.setState({action:""})
                    }
                })
                .catch(err => console.log(err))
        }else{
            console.log('input field required')
        }
    }

    handleChange = (e) => {
        this.setState({
            action: e.target.value
        })
    }

    render(){
        let{ action } = this.state;
        return(
            <div>
                <input type = "text" onChange = {this.handleChange} value ={action}/>
                <button onClick ={this.addInput}>add Place</button>
            </div>
        )
    }
}

export default Input