import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";

class Menu extends Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Olibrary</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Se connecter
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            S'inscrire
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;