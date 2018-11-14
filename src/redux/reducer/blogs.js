import { 
    RECEIVE_BLOGS_REDUCER,
    RECEIVE_COMMENTS_FOR_BLOGS_REDUCER,
    DELETE_BLOG_REDUCER,
    ADD_BLOGPOST_REDUCER
} from "../types"

const blogState = {
    isFetching: true,
    id: 101,
    allBlogs: [],
    commentsForBlogs: [],
    postId: '',
    openModal: false
}

const blogsReducer = (state = blogState, action) => {
    switch(action.type){
        case RECEIVE_BLOGS_REDUCER:
            return {
                ...state,
                allBlogs: action.payload,
                isFetching: action.isFetching
            }
        case RECEIVE_COMMENTS_FOR_BLOGS_REDUCER:
            return {
                ...state,
                commentsForBlogs: action.payload,
                openModal: action.openModal
            }
        case DELETE_BLOG_REDUCER:
            return {
                ...state,
                allBlogs: [...action.payload],
            }
        case ADD_BLOGPOST_REDUCER:
            return{
                ...state,
                allBlogs: [action.payload, ...state.allBlogs],
                id: state.id + 1
            }
        default:
            break;
    }
    return state;
}

export default blogsReducer;