import React, { Component } from 'react';
import PostList from './container/Posts';
import PostDetailsInfo from './container/PostDetailsPage';

class App extends Component {

  render() {
    return (
  <div>
    <h1>Posts</h1>
      <PostList  />
    <h1>Post Details</h1>
      <PostDetailsInfo  />
  </div> 
    );
  }
}

export default App;
