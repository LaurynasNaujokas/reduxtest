import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component {
  render() {
    return (
    <div>
      <h1> counter Number: {this.props.counter.counter}</h1>

      <button onClick={() => this.props.dispatch({type: "INCREMENT_COUNTER"})}>Increment</button>
      <button onClick={() => this.props.dispatch({type: "DECREMENT_COUNTER"}) }>Decrement</button>
      <button onClick={() => this.props.dispatch({type: "ADD_COUNTER"}) }>Add 5</button>
      <button onClick={() => this.props.dispatch({type: "COUNTER_ZERO"}) }>Reset counter</button>
    </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        counter : state.counterNumber
    };
}

export default connect(mapStateToProps) (Counter)
