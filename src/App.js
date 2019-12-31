// Import React
// the import order matters, currently the bootstrap.css file is loaded here 
// and the index.js loads the App component and so the index.css (which was imported in index.js)
// will be overwritten by the bootstrap.css
import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
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
        user: null,
        displayName: null,
        userId: null
    }
  }

  componentDidMount() {
    // establish connection with firebase database and load state from there
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if (firebaseUser) {
              this.setState({
                  user: firebaseUser,
                  displayName: firebaseUser.displayName,
                  userId: firebaseUser.uid
              });
          }
      });
    }

    registerUser = (userName) => {
        // onAuthStateChanged - whenever the registration of the user changes
        // so this method is called whenever a new user is registered. This method also passes the latest Firebase User
        // variable. This variable is up to date with the latest change in the auth state.
        // we write this method here since we wish to update the App component's state variable depending upon the registration
        firebase.auth().onAuthStateChanged(user => {
            // take the display Name and push it on the firebase database
            user.updateProfile({
                displayName: userName
            }).then(() => {
                this.setState({
                    user: user,
                    displayName: user.displayName,
                    userId: user.uid
                });
                navigate('/meetings'); // this method belongs to the reach router, we need this component imported seperately 
                // since we earlier only imported Router component from the reach router
            })
        })
    }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && (
          <Welcome userName={this.state.displayName} />
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
          <Register path="/register" registerUser={this.registerUser}/>
        </Router>
      </div>
    );
  }
}

export default App;
