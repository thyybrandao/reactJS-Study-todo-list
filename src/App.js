/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const erase = () => setValue('');

  const submit = () => {
    setTodos([
      ...todos,

      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
    erase();
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      console.log('Apagar texto!');
      erase();
    }
  };

  return (
    <section className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>

      <section className="main">
        <input
          className="new-todo"
          placeholder="O que precisa ser feito ?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          type="text"
        />

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span className="todo">{todo.title}</span>
              <button className="remove" type="button">
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
