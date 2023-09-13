/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error, setError]=useState('');
    const {userSignIn}=useContext(AuthContext);

    const handleSignIn =(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const pass=form.password.value;
        console.log(email,pass);
        userSignIn(email, pass)
        .then(result=>{
            const signedUser=result.user;
            console.log(signedUser);
            setError('');
            form.reset();
        })
        .catch(error=>{
            console.error(error.message);
            setError(error.message)
        })
    }
    return (
        <Container className='w-25 mx-auto mt-4'>
            <Form onSubmit={handleSignIn}>
                <h3 className='text-center'>Please Login...</h3>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" name='email' required placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Col>
                </Form.Group>
                
                <Button variant='primary' type='btn'>Login</Button>
                <br></br>
                <Form.Text className='text-secondary'>
                    Do not have an account ? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className='text-danger'>
                     {error}
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;