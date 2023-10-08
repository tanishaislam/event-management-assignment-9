import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Header from "../Components/Header/Header";
import ViewDetails from "../Components/Services/ViewDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";

const AllRouts = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Header></Header>,
            loader: () => fetch('/service.json')
        },
        {
          path: '/service/:id',
          element:<ViewDetails></ViewDetails>,
          loader: () => fetch('/service.json')
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