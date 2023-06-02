import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import ShowDetails from "../../Pages/ShowDetails/ShowDetails";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Error from "../../Pages/Error/Error";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/show/:id',
                element:<ShowDetails/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])
export default routes;