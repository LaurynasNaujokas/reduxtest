import React, { Component } from 'react';
import { connect } from 'react-redux';



class PostDetails extends Component {
    render(){
        
        if(!this.props.post) {
            return (<h2>Select a user</h2>);
        }
        return(
            <div>
                <h2>first: {this.props.post.title}</h2>
                <h2>last: {this.props.post.body}</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.ActivePost
    };
}

export default connect(mapStateToProps)(PostDetails);