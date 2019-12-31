import React, { Component } from 'react';
import { GoTrashcan } from 'react-icons/go';
import { FaLink } from 'react-icons/fa';
import { navigate } from '@reach/router';
import firebase from './Firebase'

class MeetingsList extends Component {

    deleteMeeting = (event, meetingId) => {
        event.preventDefault();
        const ref = firebase.database().ref(`meetings/${this.props.userId}/${meetingId}`);
        ref.remove();
    }
    
    render() {
        const { meetings } = this.props;
        const myMeetings = meetings.map(item => {
            return (                
                <div className="list-group-item d-flex" key={item.meetingId}>
                    <section className="btn-group align-self-center" role="group" aria-label="Meeting Options">
                        
                        <button className="btn btn-sm btn-outline-secondary" title="Delete Meeting"
                            onClick={(event) => this.deleteMeeting(event, item.meetingId)}>
                            <GoTrashcan />
                        </button>

                        <button className="btn btn-sm btn-outline-secondary" title="Check-In Meeting"
                            onClick={() => navigate(`/checkin/${this.props.userId}/${item.meetingId}`)}>
                            <FaLink />
                        </button>
                    </section>
                    <section className="pl-3 text-left align-self-center">
                        {item.meetingName}
                    </section>
                </div>
            );
        });

        return <div>{myMeetings}</div>;
    }
}

export default MeetingsList