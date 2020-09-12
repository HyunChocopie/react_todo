import React, { useState } from 'react'

const AddTodo = () => {

    const [value, setValue] = useState('');

    //   componentDidMount() {
    //     this.inputTodo = document.querySelector('#inputTodo');
    //   }

    const btnClick = (e) => {
        e.preventDefault();
        
        console.log(value)
        setValue('')
    }

    const onChangeInput = (e) => {
        setValue(e.target.value)

    }
    return (
        <form id='addTodo'>
            <input id='inputTodo' value={value} onChange={onChangeInput} placeholder='Enter todo' />
            <button type='submit' onClick={btnClick}>ADD</button>
        </form>
    );

}

export default AddTodo;