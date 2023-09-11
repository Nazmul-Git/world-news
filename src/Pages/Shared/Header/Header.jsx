/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do, YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex  bg-success p-2 text-dark bg-opacity-25'>
                <Button variant='danger'>Breaking</Button>
                <Marquee speed={100} pauseOnHover={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, distinctio!.... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quo vitae similique accusantium error. Fuga eaque ut molestias velit harum!
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg='light' variant='light' className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#deets">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            
                            <Nav.Link eventKey={2} href="#memes">   
                            <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;