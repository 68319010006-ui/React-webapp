import React, { useState } from 'react'
import Newtask from '../Components/Newtask'
import TodoItem from '../Components/TodoItem';
function HomePage() {
  const [todos, setTodos] = useState([]);//เก็บรายการ todoทั้งหมดเป็น array
    const addTask = (task) =>{
      setTodos((prevTodos) => [...prevTodos,task])//เพิ่มงานใหม่ลงใน array ของtodos เเละคัดลอกของเก่าๆมาวางไว้ด้วย
  };
  return (
    <>
    <Newtask addTask={addTask}/>
    {/*ส่งฟังก์ชั่น addtask ไปยังคอมโพเนเนต์ NewTask เพื่อให้ NewTask สามารถเพิ่มงานใหม่ได้ */}
    <ul className="bg-gray-200 rounded-md shadow-sm p-4">
      {
        todos.map((todo, i)=> (//วนลูปผ่าน array ของ todos
          <TodoItem key={i} id={i} todo={todo}/>//ส่งค่า todo เเละดัชนี i ไปยังคอมโพเนนต์ todo item
        ))
      }
      
    </ul>
    </>
  )
}

export default HomePage