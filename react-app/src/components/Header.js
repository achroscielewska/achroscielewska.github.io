import React from "react";
import { Navbar, NavItem, Nav} from "react-bootstrap";

import {LinkContainer} from "react-router-bootstrap"

const Header = () => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>Wine Shop</Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <LinkContainer exact to={"/"}>
                    <NavItem>Home</NavItem>
                </LinkContainer>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;