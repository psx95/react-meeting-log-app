// Import React
// the import order matters, currently the bootstrap.css file is loaded here 
// and the index.js loads the App component and so the index.css (which was imported in index.js)
// will be overwritten by the bootstrap.css
import React, { Component } from 'react';
import Home from './Home'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: 'PSX'
    }
  }

  render() {
    return (
      <Home user={this.state.user} />
    );
  }
}

export default App;
