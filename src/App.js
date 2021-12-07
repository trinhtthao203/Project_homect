import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Itemdetail from "./components/Itemdetail";
import Post from "./components/post";
// import AddChungCu from "./components/addChungCu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublicRoute from "./Utils/PublicRoute";
import PrivateRoute from "./Utils/PrivateRoute";
import BigMap from "./components/bigMap";
import {
  getToken,
  getUser,
  removeUserSession,
  setUserSession,
} from "./Utils/Common";
import axios from "axios";

function App(props) {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    const user_str = getUser();

    if (!token) {
      return;
    }
    axios
      .get(`/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, user_str);
        setAuthLoading(false);
      })
      .catch((error) => {
        console.log(error);
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return (
      <div className="App">
        <h2>Checking Authenication....</h2>
      </div>
    );
  } else
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Itemdetail/:id" component={Itemdetail} />
            <PublicRoute exact path="/register" component={Register} />
            <Route exact path="/routeMap/:lng/:lat" component={BigMap} />
            <Route exact path="/post" component={Post} />
            {/* <Route exact path="/addChungCu" component={AddChungCu} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
