import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const locations = useLocation();

    if(loading){
        <span className="loading loading-ball loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={locations.pathname} to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;