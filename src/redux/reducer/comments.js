import { 
    FETCH_COMMENTS_REDUCER 
} from "../types"

const commentState = {
    allComments: []
}

const commentReducer = (state = commentState, action) => {
    switch(action.type){
        case FETCH_COMMENTS_REDUCER:
            return {
                ...state,
                allComments: action.payload
            }
        default:
            break;
    }
    return state;
}

export default commentReducer;