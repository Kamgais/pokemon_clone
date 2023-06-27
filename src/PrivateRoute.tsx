import React,{FunctionComponent} from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthenticationService from './services/authentification-service';

const PrivateRoute:FunctionComponent = ({ element: Component, path }: any) => {
    
      const isAuthenticated:any = AuthenticationService.isAuthenticated;
      if (!isAuthenticated) { 

        return <Navigate to= '/login'/>
      }
  
      return <Component {...path} />
    
    };
  
  export default PrivateRoute;