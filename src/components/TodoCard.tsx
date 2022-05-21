import React from 'react';
import { Todo } from '../model';

interface Props{
    todo: Todo
}

const TodoCard:React.FC<Props> = ({ todo }: Props) => {
  return (
    <div>
        <h4>{todo.todo}</h4> 
        <div>
            <button>Edit</button>
            <button>Remove</button>
            <button>Complete</button>
        </div>
    </div>
  )
}

export default TodoCard