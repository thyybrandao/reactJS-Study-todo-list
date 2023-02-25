/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,

      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
  };

  const onToggle = (todo) => {
    const newTodos = todos.map((obj) =>
      obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
    );

    setTodos(newTodos);

    console.log(newTodos);
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
    console.log(todo);
  };

  return (
    <section className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>

      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
};

export default App;
