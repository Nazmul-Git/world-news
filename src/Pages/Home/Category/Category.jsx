/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {id}= useParams();
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default Category;