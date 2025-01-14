import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Menu } from 'lucide-react';

import './NavBarComponent.css';
import { ROUTES_WITH_TITLES } from '../constants';
import smallLogo from '../assets/small_logo.png';

const NavBarComponent = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            id="navbar-main"
            className={`navbar-dark ${expanded ? 'expanded' : ''}`}
            expanded={expanded}
            expand="xl"
            fixed="top"
        >
            <Container fluid className="px-3">
                <NavLink to="/" className="logo-link">
                    <img src={smallLogo} alt="Logo" className="logo" />
                </NavLink>

                {/* Hamburger Toggle */}
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                    className="hamburger-toggle"
                >
                    <Menu size={35} className="hamburger-icon" />
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {ROUTES_WITH_TITLES.map((routeItem, index) => (
                            <NavLink
                                key={`route-path-link-${index}`}
                                to={Array.isArray(routeItem.path) ? routeItem.path[0] : routeItem.path}
                                exact
                                className="nav-link"
                                onClick={() => setExpanded(false)}
                            >
                                {routeItem.title}
                            </NavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarComponent;