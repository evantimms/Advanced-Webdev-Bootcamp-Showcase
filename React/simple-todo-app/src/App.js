import React, { Component } from 'react';
import './App.css';

const Todo = ({text}) => {
  return <li>{text}</li>
};


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[],
      newTodo:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSumbit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t,i)=>{
      <Todo key={i} text={t} />
    });
    return (
      <div className="App">
        <h1>Simple Todo App</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          onChange={
            (e) => this.setState({[e.target.name]: e.target.value})
          }
          value={newTodo}
          placeHolder="What needs to be done?"
          />
          <button type="submit">SAVE</button>
        </form>
        <ul>

        </ul>
      </div>
    );
  }
}

export default App;
