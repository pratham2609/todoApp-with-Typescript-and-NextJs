"use client";
import { useTodos } from "@/context/TodoContext";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function TodoInput() {
    const searchParams = useSearchParams()
    const todosFilter = searchParams.get('todos')
    const { todos, toggleTodoCompleted, handleDelete } = useTodos();
    let filterTodos = todos;
    if (todosFilter === "active") {
        filterTodos = filterTodos.filter((todo) => !todo.completed)
    }
    else if (todosFilter === "completed") {
        filterTodos = filterTodos.filter((todo) => todo.completed)
    }
    return (
        <ul className="w-full my-5 h-full overflow-auto  ">
            {filterTodos.map((todo) => (
                <li key={todo.id} className="w-full flex  items-center gap-10 justify-center">
                    <input
                        type="checkbox"
                        name=""
                        onChange={() => toggleTodoCompleted(todo.id)}
                        checked={todo.completed}
                        id={`todo-${todo.id}`}
                    />
                    <label className="font-medium text-lg check" htmlFor={`todo-${todo.id}`}>
                        {todo.task}
                    </label>
                    {
                        todo.completed && <button className="bg-red-500 px-2 py-1 rounded-lg" onClick={() => handleDelete(todo.id)}>
                            Delete
                        </button>
                    }
                </li>
            ))}
        </ul>
    );
}
