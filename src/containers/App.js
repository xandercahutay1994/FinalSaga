import React, { PureComponent } from "react";
import Login from "./Login";
import Blogs from "./Blogs";
import Comments from "./Comments";
import Board from "./Board";
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom"
import Routes from "../Routes"
import { connect } from "react-redux"

class App extends PureComponent{
   
    render(){
        const { isAuthenticated } = this.props;
        return(
            <Router>
                <div className="container">
                    {/* {
                        isAuthenticated ?
                            <Routes />
                        :   
                            <Login />
                    } */}
                    <Board />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.users.isAuthenticated
    }
}

export default connect(mapStateToProps)(App)