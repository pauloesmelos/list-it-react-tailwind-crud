import React from 'react';
import { BiSolidBookContent } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ButtonLogin from './ButtonLogin';
const NavBar = () => {
  return (
    <nav className="shadow-md bg-white md:flex justify-between w-full p-2 flex-wrap hidden">
      <div>
        <Link to="/" className="flex items-center gap-5 hover:scale-110 duration-1000 flex-wrap">
          <BiSolidBookContent className='text-red-500 text-5xl'/>
          <h1>To Do List</h1>
        </Link>
      </div>
      <ul className="flex justify-between items-center gap-8 flex-wrap">
        <li>
          <a href="https://github.com/pauloesmelos/todolist-react-tailwind-crud" target="_blank"
          className="text-neutral-950 font-light animate-pulse hover:scale-110 duration-500 hidden sm:block">
            Github
          </a>
        </li>
        <li>
          <ButtonLogin />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;