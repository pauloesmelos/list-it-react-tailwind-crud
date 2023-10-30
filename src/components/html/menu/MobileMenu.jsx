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
      ${active ? "flex animate-showMenuMobile" : "hidden animate-hiddenMenuMobile"}`}
      >
        <ButtonLogin />
        <GrClose 
          className={`text-3xl  cursor-pointer hover:opacity-40 hover:scale-110 duration-300`}
          onClick={handleClose}
        />
      </ul>
    </nav>
  )
}

export default MobileMenu;