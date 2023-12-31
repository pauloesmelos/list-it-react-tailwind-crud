import React from 'react';
import { BiSolidBookContent } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ButtonLogin from './ButtonLogin';
import ButtonLogout from './ButtonLogout';
const NavBar = ({ type }) => {
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
          className="text-neutral-950 font-medium animate-pulse hover:text-white duration-500 hidden 
          hover:bg-neutral-800 sm:block py-3 px-4 border-2 rounded-lg">
            Github
          </a>
        </li>
        {type === "login" ? 
          <li>
            <ButtonLogin />
          </li> :
          <li>
            <ButtonLogout />
          </li>
        }
      </ul>
    </nav>
  )
}

export default NavBar;