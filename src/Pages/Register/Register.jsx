/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [error, setError]=useState('');
    const {createUser}=useContext(AuthContext);

    const handleCreateUser=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const pass=form.password.value;
        const confirmPass=form.confirmPassword.value;
        console.log(name, email,pass,confirmPass);

        if(pass !== confirmPass){
            setError('Password did not match.')
            return;
        }

        //validation pass
        else if(!/(?=.*[A-Z])/.test(pass)){
            setError('Please..at list one uppercase latter !');
            return;
        }
        else if(!/(?=.{8,})/.test(pass)){
            setError('Password should be 8 character or long !');
            return;
        }
        else if(!/(?=.*[!@#$&*])/.test(pass)){
            setError('Please add a special character.');
            return;
        }

        if(pass===confirmPass){
            createUser(email,pass)
            .then(result=>{
                const createdUser=result.user;
                console.log(createdUser);
                setError('');
                form.reset();
            })
            .error(error=>{
                console.error(error.message);
                setError(error.message);
            })
        }
        
    }
    return (
        <Container className='w-25 mx-auto mt-4'>
            <Form onSubmit={handleCreateUser}>
                <h3 className='text-center'>Please Login...</h3>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                        Username
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name='name' required placeholder="Username" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
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

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Confirm Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" name='confirmPassword' required placeholder="Confirm Password" />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Check type='checkbox' name='accept' required label='Accept Terms and Conditions'>

                    </Form.Check>
                </Form.Group>

                <Button variant='primary' type='btn'>Register</Button>
                <br></br>
                <Form.Text className='text-secondary'>
                    Already have an account ? <Link to='/login'>Login</Link>
                </Form.Text>
                <br></br>
                <Form.Text className='text-danger mt-4'>
                    {error}
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;