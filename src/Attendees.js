import React, { Component } from 'react';
import firebase from './Firebase';
import AttendeesList from './AttendeesList';

class Attendees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAttendees: []            
        };
    }

    componentDidMount() {
        const ref = firebase.database().ref(`meetings/${this.props.userId}/${this.props.meetingId}/attendees`);
        ref.on('value', snapshot => {
            let attendees = snapshot.val();
            let attendeesList = [];
            for (let item in attendees) {
                attendeesList.push({
                    attendeeId: item,
                    attendeeName: attendees[item].attendeeName,
                    attendeeEmail: attendees[item].attendeeEmail
                });
            }
            this.setState({ displayAttendees: attendeesList });
        });
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <h1 className="font-weight-light text-center">
                        Attendees
                    </h1>
                    </div>
                </div>
                {/**The userId passed below will allow us to add conditional checks like if user is admin, he may have the option to add or delete more attendees */}
                <AttendeesList userId={this.props.userId}
                    attendees={this.state.displayAttendees}
                    adminUser={this.props.adminUser}
                    meetingID={this.props.meetingId}/>
            </div>
        );
    }
}

export default Attendees;