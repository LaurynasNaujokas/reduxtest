import React, { Component } from 'react';
import PostList from './container/Posts';
import PostDetailsInfo from './container/PostDetailsPage';
import { BrowserRouter, Route} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import Navigation from './components/Navigation';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
  <BrowserRouter>
      <div>
          <Navigation />
          <Route path='/' component={PostList} exact  />
          <Route path='/PostDetailsInfo' component={PostDetailsInfo}/>
          <Route path='/CreatePost' component={CreatePost}/>
      </div> 
  </BrowserRouter>        
    );
  }
}

export default App;
