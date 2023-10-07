import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;