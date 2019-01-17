import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD_COUNTER } from '../actions/counterActions';

const initialState = {
    counter : 7
};

function counterReducer(state=initialState, action) {

    console.log(state, action);
    switch(action.type) {
        case INCREMENT_COUNTER:
        return {
            counter : state.counter + 1
        };
        case DECREMENT_COUNTER:
        return {
            counter : state.counter - 1
        };
        case ADD_COUNTER:
        return {
            counter : state.counter + 1
        };
        default:
        return state;
    }
}

export default counterReducer;