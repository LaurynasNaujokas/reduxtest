export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const ADD_COUNTER = "ADD_COUNTER";

export const increaseCounter = counter => {
    return {
        type: "INCREASE_COUNTER",
        counter
    };
    
};

export const decreaseCounter = counter => {
    return {
        type: "DECREASE_COUNTER",
        counter
    };
};

export const addCounter = counter => {
    return {
        type: "ADD_COUNTER",
        counter
    };
};