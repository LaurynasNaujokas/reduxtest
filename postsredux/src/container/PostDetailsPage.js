import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostDetailsInfo extends Component {
    render(){

        if(!this.props.post) {
            return (<Link to="/"><h2>Go to Posts</h2></Link>);
        }
        return(
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header">Post info</div>
                    <div className="card-body">
                        <h2 className="card-title" >{this.props.post.title}</h2>
                        <h4 className="card-text">{this.props.post.body}</h4>
                        <h4 className="card-text">{this.props.post.id}</h4>
                    <Link to="/"><h5>Choose another</h5></Link>
                    </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        post: state.activePost
    };
}

export default connect(mapStateToProps)(PostDetailsInfo);