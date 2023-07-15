import { useState } from 'react';
import Button from './Button';

const ToDoList = ({todos, deleteItem}) => {

    const [todoList, setTodoList] = useState({todos});

    console.log(todos);


    const deleteItemHandler = (e) => {
        console.log(e);
        let {value} = e.target;

         deleteItem(value);

    }
    return (
        todos && todos.map((value, index)=>{
           return <li key={index}>{value}<Button buttonLabel="Remove" value={value} clickHandler={deleteItemHandler}></Button></li>
        })
    )
}

export default ToDoList;