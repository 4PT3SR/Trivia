import { createBrowserRouter } from "react-router-dom";
// import App from '../App'
import Home from '../Pages/Home'
import  Quiz  from "../Pages/Quiz";
import Result from "../Pages/Result";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([{
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage/>,
}, {
    path: 'quiz',
    element: <Quiz />
},{
    path: 'result',
    element: <Result />
}])