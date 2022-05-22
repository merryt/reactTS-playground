import React, {useState} from 'react';
import { Todo } from '../model';
import { FaEdit, FaMinusCircle, FaCheckCircle  } from 'react-icons/fa';
import TodoList from './TodoList';

interface Props {
    todo: Todo
    todos: Todo[]
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard:React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo ] = useState<string>(todo.todo)

    const handleUpdatedTodo = (id:number, updatedText: string) =>{
        setEditTodo(updatedText)
        setTodos(
            todos.map((todo) => 
            todo.id === id ? { ...todo, "todo": updatedText} : todo)
        );
    }

    const handleDone = (id:number) =>{
        setTodos(
            todos.map((todo) => 
                todo.id === id ? { ...todo, isDone: !todo.isDone} : todo)
        );
    };
    const handleRemove = (id:number) =>{
        setTodos(
            todos.filter((todo) => todo.id !== id )
        );
    };

  return (
    <div>
        {
            edit ? (
                <input type="text" defaultValue={editTodo} onChange={(e)=> handleUpdatedTodo(todo.id, e.target.value)} />
                ) :(
                    todo.isDone ? (
                        <h4><s>{todo.todo}</s></h4> 
                    ):(
                        <h4>{todo.todo}</h4> 
                    )
                )
        } 
        <div>
            <button onClick={()=>{
                if(!edit && !todo.isDone ){
                    setEdit(true)
                }else{
                    setEdit(false)
                }
            }}>Edit <FaEdit /></button>
            <button onClick={()=>{ handleRemove(todo.id) }}>Remove <FaMinusCircle /></button>
            <button onClick={()=>{ handleDone(todo.id) }}>Complete <FaCheckCircle /></button>
        </div>
    
    </div>
  )
}

export default TodoCard