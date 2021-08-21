import React from 'react'

function ToDoList({todoItems, handler}) {
    return (
        <div>
            {todoItems.map((item, i)=>{
                return <li className="todo_item" id={i} key={i}>{item}<span onClick={()=>handler(i)}>✖</span></li>
            })}
        </div>
    )
}

export default ToDoList;
