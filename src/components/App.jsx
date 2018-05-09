import React, { Component,cloneElement   } from 'react';
import { Link } from 'react-router';

class App extends Component {
  	render() {
    	return(
      		<div>
        		{this.props.children}  
      		</div>
    	)
  	}
}

export default App;