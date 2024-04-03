"use client";

import * as React from "react";
import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";
import { TodoContextType, ITodo } from "@/types/todo";

const Todos = () => {
    const { todos, updateTodo } = React.useContext(
        TodoContext
    ) as TodoContextType;
    return (
        <>
            {todos.map((todo: ITodo) => (
                <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
            ))}
        </>
    );
};

export default Todos;
