/* eslint-disable import/no-anonymous-default-export */
import { useRoutes } from "react-router";
import ForgetPage from "../features/auth/Forget";
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import { Analytics } from "../features/dashboard/analytics";
import Products from "../features/dashboard/products";
import { Upload } from "../features/dashboard/upload";
import NotFound from "../features/NotFound";
import DashboardLayout from "../Layouts/DashboardLayout";

export default () => useRoutes([
    {
        path: "/",
        exact: true,
        element: <DashboardLayout name="Dashboard" icon="fa fa-chart-pie">
            <Analytics />
        </DashboardLayout>
    },
    {
        path: "/products",
        exact: true,
        element: <DashboardLayout name="Products" icon="fa fa-store">
            <Products />
        </DashboardLayout>,

    },

    {
        path: "/upload",
        exact: true,
        element: <DashboardLayout name="Products" icon="fa fa-store">
            <Upload />
        </DashboardLayout>,

    },
    {
        path: "/signin",
        exact: true,
        element: <SignIn />,
    },
    {
        path: "/signup",
        exact: true,
        element: <SignUp></SignUp>
    },
    {
        path: "/forget-password",
        exact: true,
        element: <ForgetPage />,
    },
    {
        path: "*",
        element: <NotFound />

    },
]);