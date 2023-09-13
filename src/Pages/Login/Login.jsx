/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto mt-4'>
            <Form>
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

                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;