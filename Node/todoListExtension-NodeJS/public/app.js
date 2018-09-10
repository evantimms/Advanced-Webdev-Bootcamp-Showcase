// Waiting for dom to load before fetching url
window.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:5000/api/todos")
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    })
    .then(function(data){
        addTodos(data);
    })
    .catch((e)=> console.log(e));

    document.getElementById('todoInput').addEventListener('keypress', function(event){
        if(event.which == 13){
            createTodo();
            this.value = "";
        }
    });

    document.querySelector('.list').addEventListener('click', function(e){
        if(e.target && e.target.matches('span')){
            e.stopPropagation();
            e.target.parentNode.remove();
            deleteTodo(e.target.parentNode);
        }else{
            e.target.classList.toggle('done');
            updateTodo(e.target);
        }
    });
});


function addTodos(todos){
    // add todos to the page
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function addTodo(todo){
    var li = document.createElement("LI");
    li.innerHTML = todo.name + ' <span>X</span>';
    li.classList.add("task");
    li.data = todo._id;
    if(todo.completed){
        li.classList.add("done");
    }
    document.querySelector('.list').appendChild(li);
}

function createTodo(){
    let userInput = document.getElementById('todoInput').value;
    //send request to create todo
    fetch("http://localhost:5000/api/todos", 
    {
        method: 'POST',
        body: JSON.stringify({name: userInput}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    })
    .then(function(newTodo){
        addTodo(newTodo);
    })
    .catch((e)=>console.log(e));
}

function deleteTodo(el){
    fetch("http://localhost:5000/api/todos/" + el.data, {
        method: 'DELETE'
    })
    .then(function(response){
        console.log('deleted');
    })
    .catch((e)=> console.log(e)); 
}

function updateTodo(el){
    fetch("http://localhost:5000/api/todos/" + el.data, {
        method: 'PUT',
        body: JSON.stringify({completed: el.classList.value.includes('done')}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    })
    .then(function(todo){
        if(todo.completed){
            el.classList.value = "task done";
        }else{
            el.classList.value = "task";
        }
    })
    .catch((e)=>console.log(e));
}