import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/todoApp';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { store } from "./store";
import { backgroundAnimation } from "./backgroundAnimation"



ReactDOM.render(<Provider store={store}>
<TodoApp />
</Provider>, document.getElementById('root'));
registerServiceWorker();
backgroundAnimation();