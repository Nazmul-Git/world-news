/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';
import NewsLayout from '../Layouts/NewsLayout';
import News from '../Pages/News/News/News';

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
                    element: <Category></Category>,
                    loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)
                }
            ]
        },
        {
            path:'/news',
            element:<NewsLayout></NewsLayout>,
            children:[
                {
                    path:'/news/:id',
                    element:<News></News>
                }
            ]
        }
])


export default router;