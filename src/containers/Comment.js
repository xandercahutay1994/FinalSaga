import React, { Component, PureComponent } from "react"
import axios from "axios";
import { FETCH_COMMENTS_URL } from "../api";
import CommentLists from "../components/CommentLists"
import Navigation from "../components/Navigation"


class Comment extends React.PureComponent {

    constructor(){
        super()
        this.state = {
            allComments: [],
            isFetching: false,
            searchEmail: '',
            filterComment: false,
            filterMatch: true,
            num: 1
        }
    }

    componentDidMount(){
        this._isMounted = true
        this.getAllComments()

    }

    componentWillUnmount(){
        this._isMounted = false
    }

    onChange = (e) => {
        
        setTimeout(()=>{
            this.setState({
                searchEmail: e.target.value
            })
        },2000)
        
    }

    getAllComments = async() => {
        try{
            const result = await axios(FETCH_COMMENTS_URL);
            const response = result.data;

            if(this._isMounted){
                this.setState({ allComments: response, isFetching: true })
            }
        }catch(e){
            console.log(e)
        }
    }
    
    submit = (e) => {
        e.preventDefault();
        this.setState({ filterComment: true })
    }

    renderComments = ({isFetching,allComments,searchEmail}) => {
        return (
            !isFetching ?
                <h2 className="text-center"><i className="fa fa-spinner fa-pulse"></i> Loading...</h2>
            :
                <CommentLists commentLists={allComments} email={searchEmail}/>

        )
    }

    render(){
        const { searchEmail } = this.state;
        console.log('Render Comment')
        return(
            <div className="container mt-5">
               <Navigation />
                <h1 className="text-center"> All Comments </h1>
                <form onSubmit={this.submit} className="mt-5">
                    <input
                        name="searchEmail"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={this.onChange}
                        value={searchEmail}
                        required
                    />
                    <button className="btn btn-primary m-2">
                        Search
                    </button>
                </form>

                <div className="mt-5">
                    { this.renderComments({...this.state})}
                </div>
            </div>
        )
    }
}

export default Comment;