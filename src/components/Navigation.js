import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <div className="row mt-3 mb-2 bg-dark p-3">
            <Link to="/" className="text-white"> <h5> Blogs </h5> </Link> 
            <Link to="/comment" className="col-sm-2 text-white"> <h5> Comments </h5> </Link> 
        </div>
    )
}

export default Navigation;