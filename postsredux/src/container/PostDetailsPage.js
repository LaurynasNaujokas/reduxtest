import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostDetailsInfo extends Component {
    render(){

        if(!this.props.post) {
            return (<h2>Select a post</h2>);
        }
        return(
            <div>
                <h2>Title:</h2> <h4>{this.props.post.title}</h4>
                <h2>Body:</h2> <h4>{this.props.post.body}</h4>
                <h2>ID:</h2> <h4>{this.props.post.id}</h4>
                
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