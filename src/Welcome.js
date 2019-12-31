import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { userName } = this.props
        return (
            <div className="text-center mt-4"> {/* bootstrap class of mt-4 margin of 4 points from top */}
                <span className="text-secondary font-weight-bold pl-1">
                    Welcome, {userName}
                </span>
                <a href="/" className="font-weight-bold text-primary pl-1">
                    log out
                </a>
            </div>
        )
    }
}

export default Welcome