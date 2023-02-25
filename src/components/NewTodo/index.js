/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const NewTodo = ({ onNewTodo }) => {
  const [value, setValue] = useState('');

  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const erase = () => setValue('');

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="O que precisa ser feito ?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type="text"
    />
  );
};

NewTodo.PropTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
