import React, { useState } from 'react'
import Newtask from '../Components/Newtask'
import TodoItem from '../Components/TodoItem';
function HomePage() {
  const [todos, setTodos] = useState([]);
    const addTask = (task) =>{
      setTodos((prevTodos) => [...prevTodos,task])
  };
  return (
    <>
    <Newtask addTask={addTask}/>
    <ul className="bg-gray-200 rounded-md shadow-sm p-4">
      {
        todos.map((todo, i)=> (
          <TodoItem key={i} id={i} todo={todo}/>
        ))
      }
      
    </ul>
    </>
  )
}

export default HomePage