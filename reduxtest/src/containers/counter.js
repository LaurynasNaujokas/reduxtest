import React, { Component } from 'react';
import { connect } from 'react-redux';



class Counter extends Component {
  render() {
    return (
    <div>
        <h4>Counter</h4>
      <h1> counter: {this.props.counter}</h1>

      <button onClick={() => this.props.dispatch({type: "INCREMENT_COUNTER"})}>Increment</button>
      <button onClick={() => this.props.dispatch({type: "DECREMENT_COUNTER"}) }>Decrement</button>
    </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        counter : state.counter
    };
}

export default connect(mapStateToProps) (Counter)
