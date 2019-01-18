import React, { Component } from 'react';
import PostList from './container/posts';


class App extends Component {
  render() {
    return (
  <div>
    <h1>Posts</h1>
    <PostList/>
  </div>
    );
  }
}

export default App;
