import React, { PureComponent } from "react"
import axios from "axios";
import { FETCH_COMMENTS_URL } from "../api";
import CommentLists from "../components/CommentLists"
import Navigation from "../components/Navigation"
import { connect } from "react-redux"

class Comments extends PureComponent {

    constructor(){
        super()
        this.state = {
            isFetching: false,
            searchEmail: '',
            filterComment: false,
            filterMatch: true
        }
    }

    componentDidMount(){
        this.getAllCommentsFromAPI()
    }

    getAllCommentsFromAPI = async() => {
        const result = await axios(FETCH_COMMENTS_URL)
        const comments = result.data;
        this.props.fetchComments(comments);
    }

    onChange = (e) => {
        this.setState({
            searchEmail: e.target.value
        }) 
    }
    
    submit = (e) => {
        e.preventDefault();
        // this.setState({ filterComment: true })
    }

    renderComments = (allComments,searchEmail) => {
        return (
            <CommentLists commentLists={allComments} email={searchEmail}/>
        )
    }

    render(){
        const { searchEmail, isFetching } = this.state;
        const { allComments } = this.props;

        return(
            <div>
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
                    <button className="btn btn-primary m-2" disabled={!isFetching}>
                        Search
                    </button>
                </form>

                <div className="mt-5">
                    { this.renderComments(allComments,searchEmail)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allComments: state.comments.allComments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: (comments) => dispatch({
            type: "FETCH_COMMENTS_REDUCER",
            payload: comments
        })
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Comments);