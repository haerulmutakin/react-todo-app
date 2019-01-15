import React from 'react';
import logo from './../../logo.svg'
import {Navbar } from 'react-bootstrap';
// MenuItem
// NavDropdown
// NavItem
// Nav
export class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">
                        <img src={logo} alt="" width="80" height="80"/>
                        React Todo App
                    </a>
                    </Navbar.Brand>
                </Navbar.Header>
                {/* <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav> */}
            </Navbar>
        )
    }
}