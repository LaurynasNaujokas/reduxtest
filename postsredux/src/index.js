import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/index';
import { fetchAllPosts } from './actions/PostsActions';
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk));
store.dispatch(fetchAllPosts());



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
,document.getElementById('root'));

