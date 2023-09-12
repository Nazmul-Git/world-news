/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Editors from '../Editors/Editors';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { title, details,image_url,category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant='danger'><FaArrowAltCircleLeft></FaArrowAltCircleLeft> All news in this category.</Button></Link>
                </Card.Body>
            </Card>

            <Editors></Editors>
        </div>
    );
};

export default News;