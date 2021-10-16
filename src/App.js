import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublicRoute from "./Utils/PublicRoute";
import PrivateRoute from "./Utils/PrivateRoute";
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
        console.log(response.data.user);
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
            <PublicRoute exact path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
