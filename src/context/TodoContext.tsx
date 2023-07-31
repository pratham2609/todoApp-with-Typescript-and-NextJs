"use client"
import { createContext, ReactNode, useContext, useState } from "react";

type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}
type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void; // call Signature
    toggleTodoCompleted: (id: string) => void;
    handleDelete: (id: string) => void;
}
export const todoContext = createContext<TodosContext | null>(null);
export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const newTodos = localStorage.getItem("todos") || "[]"
        return JSON.parse(newTodos) as Todo[];  // type assertion by passing that it is an array of todo object
    });
    function handleAddTodo(task: string) {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date()
            }, ...prev]
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }
    // if task is completed
    const toggleTodoCompleted = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed }
                } return task;
            })
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }
    const handleDelete = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }
    return (
        <todoContext.Provider value={{ todos, handleAddTodo, toggleTodoCompleted, handleDelete }}>
            {children}
        </todoContext.Provider>
    )
}

// context api
export function useTodos() {
    const todosContextValue = useContext(todoContext);
    if (!todosContextValue) {
        throw new Error('UseTodos used outside of provider')
    }
    return todosContextValue;
}