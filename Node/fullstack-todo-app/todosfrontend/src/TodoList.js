import React, {Component} from 'react';
import TodoItem from './TodoItem';
const APIURL = '/api/todos';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state  ={
            todos: []
        }
    }

    componentWillMount(){
        this.loadTodos();
    }

    loadTodos(){
        fetch(APIURL)
        .then(resp => {
            if(!resp.ok){
                if(resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data =>{
                        let err = {errMessage: data.message}
                        throw err;
                    })
                }else{
                    let err = {errorMessage: 'Please try again, server is not responding'}
                    throw err;
                }
            }

            return resp.json()
        })
        .then(todos => this.setState({todos}))
        .catch((e)=>console.log(e));
    }

    render(){
        const todos = this.state.todos.map((t,i) => (
            <TodoItem 
                key={i}
            />
        )) 
        return(
            <h1>Todo List</h1>
        )
    }
}

export default TodoList;