import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Post from '../pages/Post';


const Routes = () => {
    return (
        <>
         <BrowserRouter>
         <Switch>
             <Route exact path={"/"}>
                 <Main/>
             </Route>
             <Route path={"/post/:id"}>
                 <Post/>
             </Route>
             <Route path={"/Login"}>
                 <Login/>
             </Route>
         </Switch>
         </BrowserRouter>    
        </>
    )
}

export default Routes;
