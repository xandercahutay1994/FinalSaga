import { takeEvery, takeLatest, all} from "redux-saga/effects";
import {
    FETCH_BLOGS_TYPE,
    FETCH_COMMENTS_FOR_BLOGS_TYPE,
    DELETE_BLOG_TYPE,
    ADD_BLOGPOST_TYPE
} from "../types"
import {
    fetch_blogs,
    fetch_comments_for_blogs,
    delete_blog,
    add_blog
} from "./blogs"


/*
    Put all watchers in 1 rootReducer
*/

export default function* rootReducer(){
    yield takeLatest(FETCH_BLOGS_TYPE, fetch_blogs)
    yield takeLatest(FETCH_COMMENTS_FOR_BLOGS_TYPE, fetch_comments_for_blogs)
    yield takeLatest(DELETE_BLOG_TYPE, delete_blog)
    yield takeLatest(ADD_BLOGPOST_TYPE, add_blog)
}