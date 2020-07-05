import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render () {
        return (
            <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item className="nav-item">
              <Nav.Link className="nav" href="/">Home</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item className="nav-item">
              <Nav.Link className="nav" href="/camera">Camera</Nav.Link>
            </Nav.Item> */}
          </Nav>
            )
        }
}

export default NavBar