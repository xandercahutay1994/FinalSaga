import React, {Component} from "react";
import axios from "axios"
import {
    BrowserRouter as Router
} from "react-router-dom"
import Routes from "../Routes"
import { FETCH_USERS_URL } from "../api"
import Login from "./Login";

class App extends Component{
    constructor(){
        super()
        this.state = {
            isAuthenticated: false
        }
    }

    checkIfUser = async(username,email) => {
        let isMatch = false;

        try{
            const result = await axios.get(FETCH_USERS_URL);
            let users = result.data;

            // users.map(user => {
            for(let user of users){
                // if(user.username === username && user.email === email)
                if(username == "admin" && email == "admin")
                    isMatch = true
            }
        }catch(e){
            console.log(e)
        }

        if(isMatch){
            this.setState({
                username: '',
                email: '',
                isAuthenticated: true
            })
        }else{
            this.setState({ isAuthenticated: false })
        }
    }

    renderContent = () => {
        const { isAuthenticated } = this.state;

        return(
            !isAuthenticated ?
                <Login getUser={this.checkIfUser} isNotAuthenticated={!isAuthenticated}/>
            :
                <Routes/>
        )
    }

    render(){
        return(
            <Router>
                <div className="container">
                    { this.renderContent() }
                </div>
            </Router>
        )
    }
}

export default App;
