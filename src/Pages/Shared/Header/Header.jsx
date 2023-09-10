/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do, YYYY, h:mm:ss a")}</p>
            </div>
            <div>
                <Button variant='danger'>Latest</Button>
                <Marquee>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, distinctio!</Marquee>
            </div>
        </Container>
    );
};

export default Header;