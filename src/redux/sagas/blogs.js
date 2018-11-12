import { call, put } from "redux-saga/effects"
import axios from "axios"
import { 
    FETCH_BLOGS_API,
    FETCH_COMMENTS_FOR_BLOGS_API
} from "../../api";

import {
    RECEIVE_BLOGS_REDUCER,
    RECEIVE_COMMENTS_FOR_BLOGS_REDUCER,
    DELETE_BLOG_REDUCER,
    ADD_BLOGPOST_REDUCER
} from "../types"

export function* fetch_blogs(){
    const result = yield call(axios, FETCH_BLOGS_API);
    yield put({
        type: RECEIVE_BLOGS_REDUCER,
        payload: result.data,
        isFetching: false
    })
}

export function* fetch_comments_for_blogs({postId}){
    const result = yield call(axios, FETCH_COMMENTS_FOR_BLOGS_API + postId);
    yield put({
        type: RECEIVE_COMMENTS_FOR_BLOGS_REDUCER,
        payload: result.data,
        openModal: true
    })
}

export function* delete_blog({newBlog}){
    yield put({
        type: DELETE_BLOG_REDUCER,
        payload: newBlog,
    })
}

export function* add_blog({payload}){
    yield put({
        type: ADD_BLOGPOST_REDUCER,
        payload: payload,
    })
}





