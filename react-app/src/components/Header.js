import React from "react";
import { Navbar, NavItem, MenuItem, Nav, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
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