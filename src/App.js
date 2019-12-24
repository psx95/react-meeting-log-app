// Import React
// the import order matters, currently the bootstrap.css file is loaded here 
// and the index.js loads the App component and so the index.css (which was imported in index.js)
// will be overwritten by the bootstrap.css
import React, { Component } from 'react';
import Home from './Home'
import Welcome from './Welcome';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: "Pranav"
    }
  }

  render() {
    return (
      <div>
        {this.state.user && (
          <Welcome user={this.state.user} />
        )}
        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
