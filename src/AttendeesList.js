import React, { Component } from 'react';
import { GoTrashcan, GoStar } from 'react-icons/go';
import firebase from './Firebase';

class AttendeesList extends Component {

    constructor(props) {
        super(props);
        this.deleteAttendee = this.deleteAttendee.bind(this);
        this.toggleStar = this.toggleStar.bind(this);
    }

    deleteAttendee(event, meetingId, attendeeId) {
        event.preventDefault();
        const ref = firebase.database()
            .ref(`meetings/${this.props.adminUser}/${meetingId}/attendees/${attendeeId}`);
        ref.remove()
            .then(() => { console.log('removed successfully ' + `meetings/${this.props.adminUser}/${meetingId}/attendees/${attendeeId}`); })
            .catch(error => {
                console.log('some error occured ' + error);
            });
    }

    toggleStar(event, star, meetingId, attendeeId) {
        event.preventDefault();
        const adminUser = this.props.adminUser;
        const ref = firebase.database()
            .ref(`meetings/${adminUser}/${meetingId}/attendees/${attendeeId}/star`);
        if (star == undefined) {
            ref.set(true);
        } else {
            ref.set(!star);
        }
    }

    render() {
        const attendeesList = this.props.attendees;
        // check if the adminUser passed in the props is the same as the current user
        const admin = this.props.adminUser === this.props.userId ? true : false;
        const myAttendees = attendeesList.map(item => {
            return (
                <div
                    className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1" key={item.attendeeId}>
                    <div className="card ">
                        <div className={
                                'card-body px-3 py-2 d-flex align-items-center' + (admin ? '' : 'justify-content-center')
                        }>
                            {admin && (
                                <div className="btn-group pr-2">
                                    <button className={
                                        "btn btn-sm " + (item.star ? 'btn-info' : 'btn-outline-secondary')
                                    } title="star" onClick={e => this.toggleStar(e, item.star, this.props.meetingId, item.attendeeId)}>
                                        <GoStar/>
                                    </button>
                                    <button className="btn btn-sm btn-outline-secondary" title="delete" onClick={e => this.deleteAttendee(e, this.props.meetingId, item.attendeeId)}>
                                        <GoTrashcan/>
                                    </button>
                                </div>
                            )}
                            <div>{item.attendeeName}</div>
                        </div>                            
                    </div>
                </div>
            );
        });

        return (<div className="row justify-content-center">{myAttendees}</div>);
    }
}

export default AttendeesList;