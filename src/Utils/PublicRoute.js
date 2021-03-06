import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {getToken} from './Common';

function PublicRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props=>{
                return !getToken() ? <Component {...props}/>:<Redirect to = {{pathname:"/"}} />
            }}
        />
    )
}
export default PublicRoute

