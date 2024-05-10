import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center my-12"><span className="loading loading-spinner w-10 h-12 text-[#23BE0A] text-center"></span></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;