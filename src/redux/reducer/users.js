import {
    LOGIN_SUCCESS_REDUCER,
    LOGIN_FAILED_REDUCER
} from "../types"

const userInitialState = {
    isAuthenticated: ''    
}

const usersReducer = (state = userInitialState ,action) => {
    switch (action.type){
        case LOGIN_SUCCESS_REDUCER:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            }
        case LOGIN_FAILED_REDUCER:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            }
        default:
            break;
    }
    return state;
}
export default usersReducer;