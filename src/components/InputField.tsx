import React from 'react'
import "./InputField.css"

export default function InputField() {
  return (
    <form className="input">
        <input type="input" placeholder='Enter a task' className='input__box'/>
        <button className="input__submit" type="submit">go</button>
    </form>
  )
}
