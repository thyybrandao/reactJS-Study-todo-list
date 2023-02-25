/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-typos */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import './style.css';

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          <span
            onClick={() => onToggle && onToggle(todo)}
            onKeyDown={() => onToggle && onToggle(todo)}
            role="button"
            tabIndex={0}
            className={['todo', todo.checked ? 'checked' : ''].join(' ')}
          >
            {todo.title}
          </span>
          <button
            className="remove"
            type="button"
            onClick={() => onRemove && onRemove(todo)}
          >
            <MdDelete size={28} />
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }).isRequired
  ),
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
