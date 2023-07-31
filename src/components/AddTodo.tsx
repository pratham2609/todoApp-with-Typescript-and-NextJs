"use client"
import { todoContext, useTodos } from "@/context/TodoContext";
import React, { FormEvent, useContext, useState } from "react";

export default function AddTodo() {
    const { handleAddTodo } = useTodos();
    const [todo, setTodo] = useState("");
    // we have to write the type as form event while handling the submit and event 
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }
    return (
        <form onSubmit={submitHandler} className="flex gap-5 items-center text-black">
            <input
                type="text"
                name=""
                id=""
                placeholder="Write your task"
                value={todo}
                className="border-2 border-gray-300 rounded-lg p-1"
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="font-bold bg-white py-1 px-2 rounded-xl" >Add Task</button>
        </form>
    );
}
