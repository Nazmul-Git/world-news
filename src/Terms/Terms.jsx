/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt voluptatem, dolores blanditiis quibusdam beatae hic ex impedit at voluptates.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;