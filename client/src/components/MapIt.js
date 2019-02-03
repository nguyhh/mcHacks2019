import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListPlace from './ListPlace';

class MapIt extends Component {

  state = {
    listplaces: []
  }

  componentDidMount(){
    this.getPlaces();
  }

  getPlaces = () => {
    axios.get('/routes/places')
      .then(res => {
        if(res.data){
          this.setState({
            listplaces: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deletePlace = (id) => {

    axios.delete(`/routes/listplaces/${id}`)
      .then(res => {
        if(res.data){
          this.getPlaces()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { listplaces } = this.state;

    return(
      <div>
        <h1>My FoodSources(s)</h1>
        <Input getPlaces={this.getPlaces}/>
        <ListPlace listplaces={listplaces} deletePlce={this.deletePlace}/>
      </div>
    )
  }
}

export default MapIt;