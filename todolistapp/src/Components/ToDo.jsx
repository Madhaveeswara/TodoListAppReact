import Button from "./Button";
import Input from "./Input";
import {useState} from 'react';
import ToDoList from "./ToDoList";

const ToDo = () => {

    const [list, setTodoList] = useState([]);
    let item;
    //console.log(" List :: ", list);

    const addTodo =() => {
        //console.log("Add todo");
        
        if(item){
           setTodoList([...list, item]);
           //setTodoList((list) => ([...list, item])); // This syntax also works.
          
        } else {
            console.log("cannot update the list");
        }
        //console.log("Final List :: ", list);
    }

    const removeTodo = (value) => {

        console.log(" Remove todo :: ", value);

        if(list){
            list.splice(list.indexOf(value),1);
            setTodoList([...list]);
          }
    }

    const changeHandler = (e) => {
        console.log(" Event value",e.target.value);
        let {value} = e.target;

        if(value !== '' && value !== undefined ) {
            item = value;
        } else {
            console.log("Please add a value");
        }
       

    }


    return (
        <>
        <h1> Simple Todo App</h1>
        <Button clickHandler={addTodo} buttonLabel="Add"/>
        <Input changeHandler={changeHandler}/>
        <ToDoList todos={list} deleteItem={(item) => { removeTodo(item); }}/>
        </>
    )
}

export default ToDo;