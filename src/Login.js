import React, { Component } from 'react'
import firebase from './Firebase'
import FormError from './FormError'
import { navigate } from '@reach/router'

class Login extends Component {
    // initialize the state for this component
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errorMessage: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const eventTargetName = event.target.name;
        const eventTargetValue = event.target.value;

        this.setState({ [eventTargetName]: eventTargetValue }, () => {
            if (this.state.email == null || this.state.password == null) {
                this.setState({ errorMessage: "Email or Password cannot be null" });
            } else {
                this.setState({ errorMessage: null });
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault(); // prevent default behavior of the submit button
        var loginInfo = {
            email: this.state.email,
            password: this.state.password
        }        

        firebase.auth()
            .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
            .then(() => {
                navigate('/meetings');
            })
            .catch(error => {
                if (error != null) {
                    this.setState({ errorMessage: error.message });
                } else {
                    this.setState({ errorMessage: null });
                }
            });        
    }

    render() {
        return (
            <form className="mt-3" onSubmit={event => this.handleSubmit(event)}>                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            {this.state.errorMessage ? (
                                <FormError withMessage={this.state.errorMessage} />
                            ) : null}
                        <div className="card bg-light">
                        <div className="card-body">
                            <h3 className="font-weight-light mb-3">Log in</h3>
                            <section className="form-group">
                            <label
                                className="form-control-label sr-only"
                                htmlFor="Email">
                                Email
                            </label>
                            <input
                                required
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange = { event => this.handleChange(event) }
                            />
                            </section>
                            <section className="form-group">
                            <input
                                required
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange = { event => this.handleChange(event) }
                            />
                            </section>
                            <div className="form-group text-right mb-0">
                            <button className="btn btn-primary" type="submit">
                                Log in
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Login