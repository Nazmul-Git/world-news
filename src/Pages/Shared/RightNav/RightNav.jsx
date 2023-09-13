/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const RightNav = () => {
    const {userGoogleSignIn}=useContext(AuthContext);

    const handleGoogleSignIn=()=>{
        userGoogleSignIn()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div >
            <p className='mt-4'>Login with</p>
            <Link to='/category/0'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="secondary"><FcGoogle /> Login with Google </Button>
            </Link>
            <Link to='/category/0'>
                <Button variant="secondary"><FaGithub /> Login with Github</Button>
            </Link>

            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin /> Linkedin</ListGroup.Item>
                    <ListGroup.Item><FaGithub /> Github</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;
