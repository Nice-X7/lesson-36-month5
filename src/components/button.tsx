import React from 'react';

interface Todo {
  text: string;
  done: boolean;
}

interface ButtonProps {
  index: number;
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Button: React.FC<ButtonProps> = ({ todo, setTodo, index }) => {
  const remove = (ind: number): void => {
    setTodo(todo.filter((item, id) => ind !== id));
  };

  return (
    <button className="delete" onClick={() => remove(index)}>
      <span className='garbage'>🗑️</span>
    </button>
  );
};