import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import blogReducer from "../reducer/blogs"
import commentReducer from "../reducer/comments"
import rootReducer from "../sagas/watchers"

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    blogs: blogReducer,
    comments: commentReducer
})

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootReducer)

export default store;