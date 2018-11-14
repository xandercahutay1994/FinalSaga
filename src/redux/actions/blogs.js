import { 
    FETCH_BLOGS_TYPE,
    FETCH_COMMENTS_FOR_BLOGS_TYPE,
    DELETE_BLOG_TYPE,
    ADD_BLOGPOST_TYPE,
    ADD_BLOGPOST_REDUCER
} from "../types"

export function FETCH_BLOGS_ACTION(){
    return {
        type: FETCH_BLOGS_TYPE
    }
}

export function FETCH_COMMENTS_FOR_BLOGS_ACTION(postId){
    return {
        type: FETCH_COMMENTS_FOR_BLOGS_TYPE,
        postId
    }
}

export function DELETE_BLOG_ACTION(newBlog){
    return {
        type: DELETE_BLOG_TYPE,
        newBlog
    }
}

 
export function ADD_BLOGPOST_ACTION(data){
    return  {
        type: ADD_BLOGPOST_REDUCER,
        payload: data
    }
}