import * as React from 'react';
import PropTypes from 'prop-types';
import {Navigate, useLocation} from 'react-router-dom';

function RequireAuth({children, isAuth}) {
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }
  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
  isAuth: PropTypes.bool.isRequired,
};
export default RequireAuth;
