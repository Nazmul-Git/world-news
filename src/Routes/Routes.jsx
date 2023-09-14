/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Category from '../Pages/Home/Category/Category';
import NewsLayout from '../Layouts/NewsLayout';
import News from '../Pages/News/News/News';
import LoginLayout from '../Layouts/LoginLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Terms from '../Terms/Terms';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path:'/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [

            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])


export default router;