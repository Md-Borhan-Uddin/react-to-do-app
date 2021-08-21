import React, { useState } from 'react'

function ToDo() {
    const [inputValue, setInputValue] = useState("")
    const [todoItems, setTodoItems] = useState([])

    const handleChange = (e)=>{
        e.preventDefault();
        setInputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        if(inputValue !== ""){
            setTodoItems((oldItems)=>([...oldItems, inputValue]))
            setInputValue("")
        }
        
    }
    const deleteHandle = ()=>{
        setTodoItems((items)=>items.filter((item, i)=>  i )
        )

    }

    return (
        <>
            <div className="todo">
                <h1 className="todo_head">Today's Plan For You</h1>
                <div>
                    <input type="text" onChange={handleChange} placeholder="Type Your Plan" value={inputValue}/>
                    <input type="submit" value="add"  onClick={handleSubmit}/>
                </div>
                    
                
                <div className="todo_content">
                    <ul className="todo_items">
                       {
                       todoItems.map((item, i)=>(<li key={i} className="todo_item" id={i}>{item}<span onClick={deleteHandle}>✖</span> </li>))
                       }
                        
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDo;
