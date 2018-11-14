import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import { 
    ADD_BLOGPOST_ACTION
} from "../redux/actions/blogs"
import { connect } from "react-redux";


class BlogForm extends PureComponent{
    constructor(){
        super()
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    submit = (e) => {
        e.preventDefault();
        const { title, body } = this.state;
        const postBlogData = {
            id: this.props.id,
            title,
            body
        }
        this.props.addBlog(postBlogData)
        this.setState({
            title: '',
            body: '',
            isSubmit: false
        })
    }

    render(){
        const { title, body, isSubmit } = this.state;

        return (
            <div className="mt-5 col-lg-12">
                <div className="form-group justify-content-center">
                    <form onSubmit={this.submit}>
                        <div className="row">
                            <label className="col-md-6 col-lg-6">
                                Title 
                                <input 
                                    type="text" 
                                    name="title" 
                                    className="form-control" 
                                    placeholder="Enter Title"
                                    onChange={this.onChange}
                                    value={title}
                                    required
                                />
                            </label>
                        </div>
                        <div className="row">
                            <label name="body" className="col-md-6 col-lg-6">
                                Body
                                <textarea 
                                    name="body" 
                                    className="form-control" 
                                    placeholder="Enter Body"
                                    onChange={this.onChange}
                                    value={body}
                                    required
                                ></textarea>
                            </label>
                        </div>
                        <button className="btn btn-primary col-lg-2 col-md-2 col-sm-4 mt-2">
                            <i className="fa fa-plus"></i> Add Post
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

BlogForm.propTypes = {
    addBlog: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    const {id, allBlogs} = state.blogs
    return {
        id,
        allBlogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBlog: (data) => {
            dispatch(ADD_BLOGPOST_ACTION(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogForm);