import React from "react"
import {
    Route
} from "react-router-dom"
import Blogs from "./containers/Blogs";
import Comments from "./containers/Comments";

const Routes = () => {
    return (
        <div>
            <Route path="/" component={Blogs} exact/>
            <Route path="/comment" component={Comments} />
        </div>
    )
}

export default Routes;