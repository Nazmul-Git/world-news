/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';

 const router= createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            children: [
                {
                    path:'/',
                    element: <Home></Home>
                },
                {
                    path:'/category/:id',
                    element: <Category></Category>
                }
            ]
        }
])


export default router;