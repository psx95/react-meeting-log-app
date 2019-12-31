import React, { Component } from 'react'
import { Link } from '@reach/router'

class Welcome extends Component {
    render() {
        const { userName, logoutUser } = this.props
        return (
            <div className="text-center mt-4"> {/* bootstrap class of mt-4 margin of 4 points from top */}
                <span className="text-secondary font-weight-bold pl-1">
                    Welcome, {userName}
                </span>
                <Link to="/login" className="font-weight-bold text-primary pl-1"
                    onClick={event => logoutUser(event)}>
                    log out
                </Link>
            </div>
        )
    }
}

export default Welcome