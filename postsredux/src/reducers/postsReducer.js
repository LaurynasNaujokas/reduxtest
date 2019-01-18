import { FETCH_POSTS } from '../actions/actionTypes';

export default function postsReducer(state = [], action) {
    switch(action.type) {
        case FETCH_POSTS:
        return action.posts;
        default:
            return state;
    }
};