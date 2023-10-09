import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Header from "../Components/Header/Header";
import ViewDetails from "../Components/Services/ViewDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "../Components/MainLayout/PrivateRoutes";
import ContactUs from "../Components/Services/ContactUs";
import PriService from "../Components/Services/PriService";

const AllRouts = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Header></Header>,
            loader: () => fetch('/service.json')
        },
        {
          path: '/service/:id',
          element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader: () => fetch('/service.json')
        },
        {
          path: '/prisServices',
          element: <PriService></PriService>
        },
        {
          path: '/contact',
          element: <PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);
export default AllRouts;