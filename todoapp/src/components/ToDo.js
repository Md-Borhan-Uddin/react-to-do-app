import React, { useState } from 'react'
import ToDoList from './ToDoList'

function ToDo() {
    const [inputValue, setInputValue] = useState("")
    const [todoItems, setTodoItems] = useState([])

    const handleChange = (e)=>{
        setInputValue(e.target.value)
       
        
    }
    const handleAdd = ()=>{
        setTodoItems((items)=>([...items, inputValue]))
        setInputValue("")
        
    }

    const handleRemove = (id)=>{
        setTodoItems((items)=>items.filter((item, i)=>id !== i)
        )
    }
   

    return (
        <>
        <h1>compone</h1>
            <div className="todo">
                <h1 className="todo_head">Today's Plan For You</h1>
                <div>
                    <input type="text" onChange={handleChange} value={inputValue} placeholder="Type Your Plan"/>
                    <input type="submit" onClick={handleAdd} value="add"/>
                </div>
                    
                
                <div className="todo_content">
                    <ul className="todo_items">
                        <ToDoList todoItems={todoItems} handler={handleRemove}/>
                        
                       
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDo;
