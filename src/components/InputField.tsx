import React from 'react'
import "./InputField.css"

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.SyntheticEvent)=> void;
}


export default function InputField({todo, setTodo, handleAdd}: Props) {
  return (
    <form className="input" onSubmit={ handleAdd }>
        <input type="input" placeholder='Enter a task' className='input__box'
        value={todo}
        onChange={
          (e)=> setTodo(e.target.value)
        }/>
        <button className="input__submit" type="submit">go</button>
    </form>
  )
}
