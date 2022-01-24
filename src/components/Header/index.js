import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logo.svg'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const NavBar = (props) => {
    const [theme, setTheme] = useState(true)
    const chagneTheme = () => {
        setTheme(!theme)
        props.themeToggler()
    }
    return <div>
        <Navbar collapseOnSelect expand="lg" bg={theme === true ? "light" : "dark"} variant={theme === true ? "light" : "dark"}>
            <Container>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">CERTIFICATIONS</Nav.Link>
                        <Nav.Link href="#pricing">EXPERIENCE</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link onClick={chagneTheme}>
                            {
                                theme ? <DarkModeIcon /> : <LightModeIcon />
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>;
};

export default NavBar
