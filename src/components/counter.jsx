import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProms, prevState) {
    console.log("PrevProms", prevProms);
    console.log("PrevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount!");
  }

  style = {
    fontSize: 14,
    fontWeight: "bold"
  };

  render() {
    console.log("Counter - Rendered!");
    return (
      <React.Fragment>
        <h4>Player {this.props.player.id}</h4>
        <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.player)}
          style={this.style}
          className="btn btn-success btn m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.player.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBatchClasses() {
    let classes = "badge m-1 badge-";
    classes += this.props.player.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.player;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
