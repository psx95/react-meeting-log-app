// Import React
// the import order matters, currently the bootstrap.css file is loaded here 
// and the index.js loads the App component and so the index.css (which was imported in index.js)
// will be overwritten by the bootstrap.css
import React, { Component } from 'react';
import { Router } from '@reach/router';
import firebase from './Firebase';

import Home from './Home'
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Meetings from './Meetings';
import Register from './Register';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: "Pranav Sharma"
    }
  }

  componentDidMount() {
    // establish connection with firebase database and load state from there
    const ref = firebase.database().ref('user');
    ref.on()
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && (
          <Welcome user={this.state.user} />
        )}
        {/** The Router component is imported from the node modules
         * This component allows component wrapped inside it to be routed using 
         * the path paramenter in the component. For instance, the Home component 
         * will now show up if / is the path, on any other path (like /login) the home
         * component will NOT show up. Components outside the router will always show up.
         */}
        <Router>
          <Home path='/' user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" />
          <Register path="/register" />
        </Router>
      </div>
    );
  }
}

export default App;
