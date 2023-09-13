/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='light' variant='light' className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>
                            <Link href="#pricing">About</Link>
                            <Link href="#deets">Career</Link>
                        </Nav>
                        <Nav>

                            { user &&
                                <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
                            }

                            {
                                user ? <Button variant="primary">Logout</Button> :
                                    <Link to='/login' variant="primary">
                                        <Button >Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
