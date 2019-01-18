import { combineReducers} from 'redux';
import posts  from './postsReducer';

const allReducers = combineReducers({
     posts : posts
});

export default allReducers;