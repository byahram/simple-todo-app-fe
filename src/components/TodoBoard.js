import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, toggleComplete, deleteTask }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item, i) => (
          <TodoItem
            item={item}
            key={i}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
