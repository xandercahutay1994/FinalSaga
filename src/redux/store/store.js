import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import blogsReducer from "../reducer/blogs"
import commentsReducer from "../reducer/comments"
import usersReducer from "../reducer/users"
import rootSagaWatchers from "../sagas/watchers"

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    blogs: blogsReducer,
    comments: commentsReducer,
    users: usersReducer
})

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSagaWatchers)

export default store;