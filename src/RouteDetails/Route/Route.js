import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login/Login";
import Register from "../../Pages/LogIn/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Other/Profile";
import TramsAndCondition from "../../Pages/Other/TramsAndCondition/TramsAndCondition";
import PriveteRoute from "../PriveteRoute/PriveteRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PriveteRoute> <News></News></PriveteRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'trams',
                element: <TramsAndCondition></TramsAndCondition>
            },
            {
                path: '/profile',
                element: <PriveteRoute><Profile></Profile></PriveteRoute>
            },

            { path: '/*', element: <h1>Not found ! 404</h1> }

        ]
    }
])