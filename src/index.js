import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router"
import Blogs from "./containers/Blogs"

ReactDOM.render(
    <App />, 
    document.getElementById("app")
); 