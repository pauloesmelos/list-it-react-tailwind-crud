import React from 'react';
import { BiMenu } from 'react-icons/bi';
const MobileMenu = () => {
  return (
    <nav className="md:hidden">
      <BiMenu className="text-5xl text-neutral-800 cursor-pointer hover:opacity-40 duration-300"/>
    </nav>
  )
}

export default MobileMenu;