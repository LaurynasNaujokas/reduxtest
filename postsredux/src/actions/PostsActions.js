import Axios from 'axios';
import { FETCH_POSTS } from './actionTypes';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPost = (posts) => {
    return {
      type: FETCH_POSTS,
      posts
    };
  };

  export const fetchAllPosts = () => {
    return (dispatch) => {
      return Axios.get(apiUrl)
        .then(response => {
          dispatch(fetchPost(response.data));
        })
        .catch(error => {
          throw(error);
        });
    };
  };