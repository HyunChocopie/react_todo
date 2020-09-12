import React from 'react';
import {DEL_TODO,CHECK_TODO} from './TodoList';

const Todo = ({ index, todo,dispatch }) => {
    const onClickBtn=()=>{
        dispatch({ type: DEL_TODO, value: index })

    }
    const onClickDiv=()=>{
        dispatch({ type: CHECK_TODO, value: index })
    }

    return (
        <div>
            <li>
                {todo[1]===0?<div onClick={onClickDiv} className='notchecked'/>:<div onClick={onClickDiv} className='checked'/>} 
                {/* <div className='check'/> */}
                {todo[0]}
                <button onClick={onClickBtn}>delete</button>
                </li>
            
        </div>
    )
}

export default Todo;