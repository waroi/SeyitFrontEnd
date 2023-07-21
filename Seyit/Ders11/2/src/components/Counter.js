import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return <div>{this.props.counter}</div>;
  }
}
function mapStatetoProps(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStatetoProps)(Counter);
