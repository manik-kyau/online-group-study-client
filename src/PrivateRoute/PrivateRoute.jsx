import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center my-12"><span className="loading loading-spinner w-10 h-12 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text text-center"></span></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes ={
children: PropTypes.object.isRequired,
}

export default PrivateRoute;