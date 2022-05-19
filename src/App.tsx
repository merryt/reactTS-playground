import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
// import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("") 
  const [todos, setTodos] = useState<Todo[]>([]) 

  const handleAdd = (e : React.SyntheticEvent) =>{
    e.preventDefault()
    if(todos){
      setTodos([...todos, {id: Date.now(),todo: todo, isDone: false }]);
    }
    setTodo("")
  }

  console.log(todos)
  console.log(todo, "test")
  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {/* <TodoList todos={todos}/> */}
      {todos.map(t=> <span>{t.todo}</span>)}
    </div>
  );
}

export default App;
