/* eslint-disable no-unused-vars */
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <h1 className='font-bold'>The World News</h1>
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do, YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex  bg-success p-2 text-dark bg-opacity-25'>
                <Button variant='danger'>Breaking</Button>
                <Marquee speed={100} pauseOnHover={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, distinctio!.... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quo vitae similique accusantium error. Fuga eaque ut molestias velit harum!
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;