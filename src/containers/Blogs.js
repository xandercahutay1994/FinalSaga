import React, { PureComponent } from "react";
import BlogLists from "../components/BlogLists";
import BLogForm from "./BlogForm";
import Navigation from "../components/Navigation";
import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import {
    FETCH_BLOGS_ACTION,
    FETCH_COMMENTS_FOR_BLOGS_ACTION,
    DELETE_BLOG_ACTION
} from "../redux/actions/blogs"

class Blogs extends PureComponent{
    
    constructor(){
        super()
        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount(){
        this.props.fetchBlogsAPI()
    }

    closeModal = () => {
        this.setState({ openModal: false })
    }

    renderBlogs = (allBlogs, isFetching) => {
        const { fetchCommentsForBlogsAPI } = this.props
        return (
            isFetching ?
                <h2 className="text-center">
                    <i className="fa fa-circle-o-notch fa-spin"></i> Loading...
                </h2> 
            :
                <BlogLists 
                    blogLists={allBlogs}
                    details={fetchCommentsForBlogsAPI}
                    delete={this.handleDelete}
                />
        )
    }

    handleDelete = id => {
        const { allBlogs, deleteBlogHandler } = this.props
        const newBlog =  allBlogs.filter(i => i.id !== id )
        deleteBlogHandler(newBlog)
    }

    renderModal = (blogComments) => {
        const classStyleSpan = "form-control col-md-8";
      
        return (
            <Modal open={this.props.openModal} onClose={()=>this.closeModal()}>
                {
                    blogComments.map(details => 

                        <div key={details.id} className="justify-content-center mt-3 p-2">
                            <div className="row">
                                <h5 className="col-md-2"> Email </h5>
                                <span className={classStyleSpan}>{details.email} </span>
                            </div>
                            <div className="row mt-3">
                                <h5 className="col-md-2"> Name </h5>
                                <span className={classStyleSpan}>{details.name} </span>
                            </div>
                            <div className="row mt-3">
                                <h5 className="col-md-2"> Name </h5>
                                <span className={classStyleSpan}>{details.body} </span>
                            </div>
                            <hr/>
                        </div>
                    )
                }
               <a href="#" className="offset-md-8 mt-3 btn btn-danger" onClick={()=>this.closeModal()}> Close </a>
            </Modal>
        )
    }

    render(){
        const { allBlogs, isFetching, blogComments } = this.props;
        return (
            <div>
                <Navigation />
                <h1 className="mb-5 text-center text-primary"> Blog Posts </h1>
                <BLogForm/>
                { this.renderBlogs(allBlogs,isFetching)}
                { this.renderModal(blogComments) }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { allBlogs, isFetching, commentsForBlogs, openModal } = state.blogs
    return {
        allBlogs,
        isFetching,
        blogComments: commentsForBlogs,
        openModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBlogsAPI: () => {
            dispatch(FETCH_BLOGS_ACTION())
        },
        fetchCommentsForBlogsAPI: (postId) => {
            return dispatch(FETCH_COMMENTS_FOR_BLOGS_ACTION(postId))
        },
        deleteBlogHandler: (newBlog) => {
            dispatch(DELETE_BLOG_ACTION(newBlog))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blogs);