import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element: <LoginPage/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default router;