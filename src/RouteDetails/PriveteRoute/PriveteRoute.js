import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextUser/ContextUser';
import Spinner from 'react-bootstrap/Spinner';

const PriveteRoute = ({ children }) => {

    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    if (loding) {
        return <Spinner animation="border" />;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PriveteRoute;