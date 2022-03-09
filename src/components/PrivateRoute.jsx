import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {

  const {loggedIn,checkStatus} = useAuthStatus();

  if(checkStatus){
    return <Spinner/>
  }

  return (

    <div>{
      loggedIn ? <Outlet/> : <Navigate to='/sign-in'/>
    }</div>
  )
}

export default PrivateRoute