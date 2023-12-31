/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNavDown from '../LeftNavDown/LeftNavDown';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    })
    return (
        <div>
            <h3>All Category</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-md-start'>{category.name}</Link>

                    </p>)
                }
            </div>
            <LeftNavDown></LeftNavDown>
        </div>
    );
};

export default LeftNav;