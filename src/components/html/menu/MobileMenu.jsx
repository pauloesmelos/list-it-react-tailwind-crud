import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import ButtonLogin from '../nav-bar/ButtonLogin';
import ButtonLogout from '../nav-bar/ButtonLogout';

const MobileMenu = ({ type }) => {
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
      <ul className={`p-4 bg-white shadow-lg justify-end items-center top-0 left-0 absolute w-full
      ${active ? "flex animate-showMenuMobile" : "animate-hiddenMenuMobile p-8"}`}
      >
        <div className="flex gap-8 items-center flex-wrap">
          <li className={`${active ? "block" : "hidden"}`}>
            <a href="https://github.com/pauloesmelos/todolist-react-tailwind-crud" target="_blank"
              className="text-neutral-800 animate-pulse hover:scale-110 duration-500 sm:block rounded-md
              py-3 px-4 border-2 hover:text-white hover:bg-neutral-700 font-medium border-neutral-700">
                Github
            </a>
          </li>
          <li className={`${active && type === "login" ? "block" : "hidden"}`}>
            <ButtonLogin mobile={active} />
          </li>
          <li className={`${active && type === "logout" ? "block" : "hidden"}`}>
            <ButtonLogout mobile={active} />
          </li>
        </div>
        <li className={`${active ? "block" : "hidden"}`}>
          <GrClose 
            className={`text-3xl  cursor-pointer hover:opacity-40 hover:scale-110 duration-300 hover:animate-rotate 
            `}
            onClick={handleClose}
          />
        </li>
      </ul>
    </nav>
  )
}

export default MobileMenu;