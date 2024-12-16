import React from 'react';
import './NavBarComponent.css';

import { RoutePath } from '../enums';
import { ROUTES_WITH_TITLES } from '../constants';

import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class NavBarComponent extends React.Component {
    state: any;

    constructor(props: any) {
        super(props);

        this.state = {
            expanded: false
        };

        this.toggle = this.toggle.bind(this);
        this.collapse = this.collapse.bind(this);
    }

    toggle() {
        this.setState({ expanded: !this.state.expanded });
    }

    collapse() {
        this.setState({ expanded: false });
    }

    render() {
        const isNavBarVisible = process.env.ISOPEN;
        console.log(process.env.ISOPEN)
        if (!isNavBarVisible) {
            return null;
        }

        return (
            <>
                <div
                    id="navbar-hidden-overlay"
                    style={{
                        display: this.state.expanded ? 'block' : 'none'
                    }}
                    onClick={this.collapse}
                />
                <Navbar
                    id="navbar-main"
                    expanded={this.state.expanded}
                    className="navbar-dark"
                    expand="xl"
                >
                    <Container fluid>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            onClick={this.toggle}
                            style={{ color: 'white', borderColor: 'transparent' }}
                        />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto ml-auto">
                                {ROUTES_WITH_TITLES.map((routeItem, index) => (
                                    <NavLink
                                        key={`route-path-link-${index}`}
                                        to={Array.isArray(routeItem.path) ? routeItem.path[0] : routeItem.path}
                                        onClick={this.collapse}
                                        exact
                                        className="nav-link"
                                        style={{ alignSelf: 'center' }}
                                    >
                                        {routeItem.title}
                                    </NavLink>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavBarComponent;
