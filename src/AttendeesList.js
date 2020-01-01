import React, { Component } from 'react';
import { GoTrashcan } from 'react-icons/go';

class AttendeesList extends Component {

    constructor(props) {
        super(props);
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
                                    <button className="btn btn-sm btn-outline-secondary" title="delete" onClick={e => this.deleteAtendee(e, this.props.meetingId, this.props.attendeeId)}>
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