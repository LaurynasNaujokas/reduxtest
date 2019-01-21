import { POST_SELECTED } from './actionTypes';

export const postSelectd = (post) => {
    console.log("you clicked on post", post.id);
    return {
      type: POST_SELECTED,
      payload: post
    };
  };