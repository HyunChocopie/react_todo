import React, { useState, useReducer } from 'react'

import Todo from './Todo';
//import AddTodo from './AddTodo';

const initialState = {
    value: '',
    todos: [['a', 0], ['b', 0]],

}
export const SET_VALUE = 'SET_VALUE'
export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const CHECK_TODO = 'CHECK_TODO'


const reducer = (state, action) => {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                value: action.value,
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, [action.value, 0]],
            }

        case DEL_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.value),
                    ...state.todos.slice(action.value + 1)
                ],
            }
        case CHECK_TODO:{
            const todos = [...state.todos];
            todos[action.value] = [...state.todos[action.value]]
            if(todos[action.value][1]===0)
                todos[action.value][1]=1;
            else
                todos[action.value][1]=0;
            return {
                ...state,
                todos
            }
        }
        default:
            return;
    }
}
const countLeft = (todos) => {
    let count = 0;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i][1] === 0)
            count += 1;

    }
    return count
}
const TodoList = (props) => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    const [state, dispatch] = useReducer(reducer, initialState);
    const { value, todos } = state;
    const left = countLeft(todos);
    console.log(left)

    const todoEls = todos.map((todo, index) => (
        <Todo dispatch={dispatch} key={index} index={index} todo={todo} />
    ));


    //   componentDidMount() {
    //     this.inputTodo = document.querySelector('#inputTodo');
    //   }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value=='') return
        dispatch({ type: ADD_TODO, value: value })

        console.log(value)
        dispatch({ type: SET_VALUE, value: '' })

    }

    const onChangeInput = (e) => {
        dispatch({ type: SET_VALUE, value: e.target.value })

    }
    return (
        <div id='todolist'>
            <h2 id='date'>{year}/{month}/{date}</h2>
            <h3 id='left'>할 일 {left}개 남음</h3>
            <ul>{todoEls}</ul>
            <form id='addTodo' onSubmit={onSubmitForm}>
                <input id='inputTodo' value={value} onChange={onChangeInput} placeholder='Enter todo' />
                <button type='submit'>ADD</button>
            </form>
        </div>
    );

}

export default TodoList;