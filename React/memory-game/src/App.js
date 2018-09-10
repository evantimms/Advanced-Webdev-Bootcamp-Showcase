import React, { Component } from 'react';
import './App.css';
import  Navbar from './Navbar';

const NUM_CARDS = 16;

const Card = ({props}) => {
  const style = {

  }

  return <div style={style} />
}

class App extends Component {
  render() {

    const cards = this.state.cards.map((card)=>{
      return <Card key={card.id} />;
    });

    return (
      <div className="App">
        <Navbar />
        {cards}
      </div>
    );
  }
}

export default App;
