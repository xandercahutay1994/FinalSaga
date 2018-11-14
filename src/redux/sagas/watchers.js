import { takeLatest} from "redux-saga/effects";
import {
    FETCH_BLOGS_TYPE,
    FETCH_COMMENTS_FOR_BLOGS_TYPE,
    DELETE_BLOG_TYPE,
    ADD_BLOGPOST_TYPE,
    FETCH_COMMENTS_TYPE,
    LOGIN_USERS_TYPE
} from "../types"
import { login_user } from "./users";
import {
    fetch_blogs,
    fetch_comments_for_blogs,
    delete_blog,
    add_blog
} from "./blogs"
import { fetch_comments } from "./comments";

/*
    Put all watchers in 1 rootReducer
*/
export default function* rootSagaWatchers(){
    yield takeLatest(FETCH_BLOGS_TYPE, fetch_blogs)
    yield takeLatest(FETCH_COMMENTS_FOR_BLOGS_TYPE, fetch_comments_for_blogs)
    yield takeLatest(DELETE_BLOG_TYPE, delete_blog)
    yield takeLatest(ADD_BLOGPOST_TYPE, add_blog)
    yield takeLatest(FETCH_COMMENTS_TYPE, fetch_comments)
    yield takeLatest(LOGIN_USERS_TYPE, login_user)
}