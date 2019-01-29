import { combineReducers} from 'redux';
import posts  from './postsReducer';
import ActivePost from './post-selected-reducer';


const allReducers = combineReducers({
     posts : posts,
     activePost : ActivePost,

});

export default allReducers;