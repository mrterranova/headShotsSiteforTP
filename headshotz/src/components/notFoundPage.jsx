import React, { Component } from 'react'


class NotFoundPage extends Component {
    render () {
    return (
        <div className="homeDiv">
            <h1>WHOOPS!</h1>
            <p>We couldn't find the page you are looking for</p>
            <button onClick={console.log("oops")}>Go Back Home</button>
        </div>
        )
    }
}

export default NotFoundPage