import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render () {

        return (
            <div className="fullNavUnit">
                <div className="navWrapper">
                    <Link to="/" ><div className="linkBucket" >Home</div> </Link>
                </div>
            </div>
            )
        }
}

export default NavBar