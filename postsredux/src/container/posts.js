import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post.js';


function PostList({ posts }) {
  if(!posts.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
    <div>
      {posts.map(post => {
        return (
            <Post post={post} key={post._id} />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};



export default connect(
  mapStateToProps,

)(PostList);