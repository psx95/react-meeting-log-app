import React, { Component } from 'react'
import FormError from './FormError'

class Register extends Component {
    
    constructor() {
        super();
        // this state is only applicable to this component
        this.state = {
            displayName: '', // notice the names of these fields are same as the names given to the HTML tags
            email: '',
            passOne: '',
            passTwo: '',
            errorMessage: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const eventTargetName = event.target.name;
        const eventTargetValue = event.target.value;

        this.setState({ [eventTargetName]: eventTargetValue }, () => {
            if (this.state.passOne != this.state.passTwo) {
                this.setState({ errorMessage: "Passwords do not match " });
            } else {
                this.setState({ errorMessage: null });
            }
        });
    }

    render() {
        return (
            <form className="mt-3">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="card bg-light">
                    <div className="card-body">
                    <h3 className="font-weight-light mb-3">Register</h3>
                    <div className="form-row">
                        { this.state.errorMessage !== null ? (
                            <FormError withMessage={this.state.errorMessage} />                            
                        ) : null}
                        <section className="col-sm-12 form-group">
                        <label
                            className="form-control-label sr-only"
                            htmlFor="displayName"> {/** This is 'for' tag in html. To be used with JSX it has to be written as 'htmlFor' */}
                                Display Name
                            </label>
                        <input
                            className="form-control"
                            type="text"
                            id="displayName"
                            placeholder="Display Name"                                            
                            name="displayName" 
                            required
                            onChange={this.handleChange}
                            value={this.state.displayName}/>
                            {/** We can capture these input fields in the React application using the name field */}
                        </section>
                    </div>
                    <section className="form-group">
                        <label
                        className="form-control-label sr-only"
                        htmlFor="email"
                        >
                        Email
                        </label>
                        <input
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        required
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        />
                    </section>
                    <div className="form-row">
                        <section className="col-sm-6 form-group">
                        <input
                            className="form-control"
                            type="password"
                            name="passOne"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.passOne}
                        />
                        </section>
                        <section className="col-sm-6 form-group">
                        <input
                            className="form-control"
                            type="password"
                            required
                            name="passTwo"
                            placeholder="Repeat Password"
                            onChange={this.handleChange}
                            value={this.state.passTwo}
                        />
                        </section>
                    </div>
                    <div className="form-group text-right mb-0">
                        <button className="btn btn-primary" type="submit">
                        Register
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

export default Register