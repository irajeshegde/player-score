import React, { Component } from "react";
import Counter from "./counter";

class Players extends Component {
  render() {
    console.log("Counters - Rendered!");
    const { onDelete, onIncrement, onReset, players } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn m-2">
          Reset
        </button>
        {players.map(player => (
          <Counter
            key={player.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            player={player}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Players;
