import React, { Component } from 'react';
import { Map, Markers } from 'react-amap';

const randomPosition = () => ({
  longitude: 100 + Math.random() * 20,
  latitude: 30 + Math.random() * 20
})
const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: randomPosition()
  }))
);
class Map_markers extends Component{
  constructor(){
    super();
    this.state = {
      markers: randomMarker(100),
      center: randomPosition()
    }
    this.randomMarkers = this.randomMarkers.bind(this)
  }

  randomMarkers() {
    this.setState({
      markers: randomMarker(100)
    })
  }

  render(){   
    return <div>
      <div style={{width: '100%', height: 372}}>
        <Map plugins={['ToolBar']} center={this.state.center} zoom={6}>
          <Markers 
            markers={this.state.markers}
          />
        </Map>
      </div>
      <button onClick={this.randomMarkers}>Random Markers</button>
    </div>
  }
}



export default Map_markers;



