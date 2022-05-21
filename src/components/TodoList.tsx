import React from 'react'
import { Todo } from '../model';
import TodoCard from './TodoCard';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

const TodoList:React.FC<Props> = ({ todos, setTodos }: Props) => {
  return <div className="todos">
        <div>Todo List</div>
        {todos.map(t=> <TodoCard todo={t}/>)}
    </div>
}

export default TodoList