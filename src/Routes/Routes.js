import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Inventory from "../Page/Inventory/Inventory";
import Login from "../Page/Login/Login";
import Order from "../Page/Order/Order";
import OrderReview from "../Page/OrderReview/OrderReview";
import Shop from "../Page/Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Shop></Shop>,
            },
    {
        path: '/home',
        element: <Home></Home>,
    },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/orderReview',
                element: <OrderReview></OrderReview>
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
        ]
    }
]);
export default router;
