import React, { Component } from 'react'
import FormError from './FormError'
import firebse from './Firebase'

class Meetings extends Component {
    
    //Initialize the state for this component
    constructor(props) {
        super(props);
        this.state = {
            meetingName: '',
            errorMessage: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const targetName = event.target.name;
        const tragetValue = event.target.value;

        this.setState({ [targetName]: tragetValue });
    }

    handleSubmit(event) {
        event.preventDefault(); // prevent the default submit form behaviour        
        // validate the input locally
        if (this.state.meetingName == null || this.state.meetingName == '') {
            this.setState({ errorMessage: "Meeting name cannot be null" });
        } else {            
            this.props.addMeeting(this.state.meetingName); 
            // meeting added successfully so reset the state for the next meeting to be added
            this.setState({
                meetingName: '',
                errorMessage: null
            }); 
        }
    }


    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                    <h1 className="font-weight-light">Add a Meeting</h1>
                    <div className="card bg-light">
                        {this.state.errorMessage !== null ? (
                            <FormError withMessage={this.state.errorMessage} />
                        ) : null}
                        <div className="card-body text-center">
                        <form
                            className="formgroup" onSubmit={event => this.handleSubmit(event)}
                        >
                            <div className="input-group input-group-lg">
                            <input
                                type="text"
                                className="form-control"
                                name="meetingName"
                                placeholder="Meeting name"
                                aria-describedby="buttonAdd"
                                value={this.state.meetingName}
                                onChange={event => this.handleChange(event)}
                            />
                            <div className="input-group-append">
                                <button
                                type="submit"
                                className="btn btn-sm btn-info"
                                id="buttonAdd"
                                >
                                +
                                </button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meetings