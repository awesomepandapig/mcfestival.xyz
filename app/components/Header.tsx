"use client";

import Link from "next/link";
import { SignInButton, SignOutButton } from './buttons'

export function Header() {
    return (
        <header className='dark:bg-black w-screen h-20 p-4'>
            <nav className='dark:text-[#81859f] text-black mt-2 mr-4 p-2 float-right flex flex-row'>
            <div className='mb-1'>
                <Link className='ml-8 dark:hover:text-white hover:text-indigo-500' href="./dashboard">Editor</Link>
                <Link className='ml-8 dark:hover:text-white hover:text-indigo-500' href="./plugin">Plugin</Link>
                <Link className='ml-8 dark:hover:text-white hover:text-indigo-500' href="./docs">Docs</Link>
            </div>
            <span className='border-l border-slate-200 ml-6 pl-6 dark:border-slate-800 text-2xl'></span>
            <SignInButton/>
            </nav>
        </header>
    )
}