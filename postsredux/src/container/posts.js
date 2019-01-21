import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postSelectd } from '../actions/PostSelected';


class PostList extends Component {
renderList(){
  return this.props.posts.map((post) => {
    return (
      <li
      key={post.id}
      onClick={() => this.props.postSelectd(post)}>
      {post.title}
      </li>
    )
  });
}

render(){
  return(
    <ul>
      {this.renderList()}
    </ul>
  )
}
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}

function matchDispatchToProps(dispatch){

  return bindActionCreators({postSelectd : postSelectd}, dispatch);
}



export default connect(
  mapStateToProps,
  matchDispatchToProps

)(PostList);