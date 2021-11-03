import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./Leaflet/css/leaflet.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
