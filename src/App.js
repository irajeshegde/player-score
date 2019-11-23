import React, { Component } from "react";
import NavBar from "./components/navbar";
import Players from "./components/players";
import "./App.css";

class App extends Component {
  state = {
    players: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor!");
  }

  componentDidMount() {
    console.log("App - Mounted!");
  }

  handleIncrement = player => {
    const players = [...this.state.players];
    const index = players.indexOf(player);
    console.log(index);
    players[index] = { ...player };
    players[index].value++;
    this.setState({ players });
  };

  handleReset = () => {
    const players = this.state.players.map(p => {
      p.value = 0;
      return p;
    });
    this.setState({ players });
  };

  handleDelete = counterId => {
    const newPlayers = this.state.players.filter(c => c.id !== counterId);
    console.log("Event handler Delete called!", counterId);
    this.setState({ players: newPlayers });
  };

  render() {
    console.log("App - Rendered!");
    return (
      <React.Fragment>
        <NavBar
          totalPlayers={this.state.players.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Players
            players={this.state.players}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
