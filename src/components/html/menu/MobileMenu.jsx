import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import ButtonLogin from '../nav-bar/ButtonLogin';

const MobileMenu = () => {
  const [active, setActive] = React.useState(false);
  const handleClick = (event) => {
    setActive(true);
  }
  const handleClose = (event) => {
    setActive(false);
  }
  return (
    <nav className={`md:hidden relative`}>
      <BiMenu 
        className={`text-5xl text-neutral-600 cursor-pointer hover:opacity-40 duration-300`}
        onClick={handleClick}
      />
      <ul className={`p-2 bg-white shadow-lg justify-around items-center top-0 left-0 absolute w-full
      ${active ? "flex animate-showMenuMobile" : "animate-hiddenMenuMobile p-8"}`}
      >
        <li className={`${active ? "block" : "hidden"}`}>
          <a href="https://github.com/pauloesmelos/todolist-react-tailwind-crud" target="_blank"
            className="text-neutral-950 animate-pulse hover:scale-110 duration-500 sm:block rounded-lg
            p-2 border-2 hover:text-white hover:bg-neutral-600 font-medium ">
              Github
          </a>
        </li>
        <li className={`${active ? "block" : "hidden"}`}>
          <ButtonLogin />
        </li>
        <li className={`${active ? "block" : "hidden"}`}>
          <GrClose 
            className={`text-3xl  cursor-pointer hover:opacity-40 hover:scale-110 duration-300 
            ${active ? "animate-rotate" : ""}`}
            onClick={handleClose}
          />
        </li>
      </ul>
    </nav>
  )
}

export default MobileMenu;