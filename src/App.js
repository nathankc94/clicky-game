
import React, { Component } from "react";
import Wrapper from './components/wrapper';
import Card from './components/cards';
import Nav from './components/nav';
import './App.css';
import players from './players.json';

class App extends Component {
  state = {
    players,
    clickedPlayers:[],
    score:0,
    total:12,
    status:""
  }

  randomizeCards = cardId => {
    let clickedPlayers = this.state.clickedPlayers;
    if(clickedPlayers.includes(cardId)){
      this.setState({ clickedPlayers: [], score: 0, status: "GAME OVER, Press for restart"});
      return;
    }
    else{
      clickedPlayers.push(cardId)
      if(clickedPlayers.length === 12){
        this.setState({ score: 8, status: "YOU WON", clickedPlayers: []});
        return;
      }
      this.setState({ players, clickedPlayers, score: clickedPlayers.length, status:""});

      for (let i = players.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
  }
}
render(){
  return (
    <div className="App">
      <Nav
          score={this.state.score}
      />
    <header className="App-header">
      <h1 className="App-title">CLICKY SPORTING KC</h1>
      <p className="App-intro">
        Try not to click the same image twice!
      </p>
    </header>
  
    <Wrapper>
      <div className="row">
      {this.state.players.map(player => (
        <Card
          randomizeCards={this.randomizeCards}
          id={player.id}
          key={player.id}
          image={player.image}
        />
      ))}
      </div>
    </Wrapper>
</div>
  );
}
}

export default App;
