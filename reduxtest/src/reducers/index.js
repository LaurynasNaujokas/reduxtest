import { combineReducers} from 'redux';
import counter from './counterReducer';

const allReducers = combineReducers({
     counterNumber : counter
});

export default allReducers;