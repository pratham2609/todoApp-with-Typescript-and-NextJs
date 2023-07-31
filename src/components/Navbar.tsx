"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
export default function Navbar() {
    const searchParams = useSearchParams()
    const todosFilter = searchParams.get('todos')
    const nav = [
        {
            name: 'All',
            href: '/',
            active: todosFilter === null
        },
        {
            name: 'Active',
            href: '/?todos=active',
            active: todosFilter === 'active'
        },
        {
            name: 'Completed',
            href: '/?todos=completed',
            active: todosFilter === 'completed'
        },
    ]
    return (
        <nav className='font-semibold flex items-center gap-4'>
            {/* <Link href="/" className={todosFilter === null ? "text-white  underline" : ""}>All</Link>
            <Link href="/?todos=active" className={todosFilter === 'active' ? "text-white  underline" : ""}>Active</Link>
            <Link href="/?todos=completed" className={todosFilter === 'completed' ? "text-white  underline" : ""}>Completed</Link> */}
            {nav.map((item, index) => (
                <Link href={item.href} className={item.active ? "text-white  underline" : ""} key={index}>
                    {item.name}
                </Link>
            ))
            }
        </nav>
    )
}
