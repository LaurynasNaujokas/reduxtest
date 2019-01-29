import React, { Component } from 'react';
import axios from 'axios';


export default class CreatePost extends Component {

    constructor(props){
        super(props);
            this.state = {
                title: '',
                body: '',
                userId: ''
        }

        this.onChangeTitleName = this.onChangeTitleName.bind(this);
        this.onChangeBodyName = this.onChangeBodyName.bind(this);
        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeTitleName(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeBodyName(e) {
        this.setState({
            body: e.target.value
        });
    }

    onChangeUserId(e) {
        this.setState({
            userId: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`title is ${this.state.title} and body is ${this.state.body}`);
        const body = {
            title : this.state.title,
            body : this.state.body,
            userId : this.state.userId,
        };

        axios.post('https://jsonplaceholder.typicode.com/posts', body)
        .then(response => console.log("worked", response.data));
        this.setState({
            title : '',
            body : '',
            userId : ''
        });
    }


    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter title:  </label>
                        <input type="text"
                            placeholder="Your Title"
                            className="form-control"
                            value={this.state.title}
                            onChange={(e) => this.onChangeTitleName(e)}/>
                    </div>
                    <div className="form-group">
                        <label> Enter body: </label>
                        <input type="text"
                            placeholder="Enter body"
                            className="form-control"
                            value={this.state.body}
                            onChange={(e) => this.onChangeBodyName(e)}
                         />
                    </div>
                    <div className="form-group">
                        <label> Enter user ID: </label>
                        <input type="text"
                            placeholder="User ID" 
                            className="form-control"
                            value={this.state.userId}
                            onChange={(e) => this.onChangeUserId(e)}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Create Post" 
                            className="btn btn-primary"/>
                    </div>
                </form>
                
            </div>
        )
    }
}