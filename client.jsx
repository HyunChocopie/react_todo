import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';

import TodoList from './TodoList';

const Hot=hot(TodoList);

ReactDom.render(<Hot />, document.querySelector('#root'))

