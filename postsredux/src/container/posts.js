import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postSelectd } from '../actions/PostSelected';
import { Link } from 'react-router-dom';



class PostList extends Component {
renderList(){
  return this.props.posts.map((post) => {

    return ( 
    <Link className="list-group" to="/PostDetailsInfo">
      <li className="list-group-item" style={{marginTop: "10px"}}
      key={post.id}
      onClick={() => this.props.postSelectd(post)}>
      {post.title}
      </li>
    </Link>
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