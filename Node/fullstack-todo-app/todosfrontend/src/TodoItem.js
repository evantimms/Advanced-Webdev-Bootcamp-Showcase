import React, {Component} from 'react';

//functional stateless, simple no state involved
const TodoItem = ({name}) => (
    <li>
        {name}
    </li>
)

export default TodoItem;