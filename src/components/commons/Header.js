import React from 'react';
import logo from './../../logo.svg'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const appTitle = {
    fontSize: '24px',
    color: '#01ddff',
    fontWeight: 'bold'
}
export class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} alt="" />
                        <span style={appTitle}>React Todo</span>
                    </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                {/* <Nav>
                    <NavItem eventKey={1} href="#">Todo</NavItem>
                    <NavItem eventKey={2} href="#">Done</NavItem>
                </Nav> */}
            </Navbar>
        )
    }
}