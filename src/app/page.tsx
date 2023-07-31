import AddTodo from '@/components/AddTodo'
import Navbar from '@/components/Navbar'
import TodoInput from '@/components/TodoInput'
import React from 'react'
import { RiTodoFill } from "react-icons/ri"
export default function page() {
  return (
    <main className='flex font-pop w-screen h-screen justify-center items-center'>
      <div className='flex w-[25%] mx-auto flex-col gap-5 justify-start items-center h-[60%] '>
        <h2 className='flex items-center gap-2 font-semibold text-xl font-pop'><RiTodoFill className='text-[#68b984]' />TODO Next + Typescript<RiTodoFill className='text-[#68b984]' /></h2>
        <Navbar />
        <AddTodo />
        <TodoInput />
      </div>
    </main>
  )
}
