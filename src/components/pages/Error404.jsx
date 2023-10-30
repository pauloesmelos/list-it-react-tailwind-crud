import React from 'react';
import { FaPeopleCarry } from 'react-icons/fa';
const Error404 = () => {
  const body = document.querySelector('body');
  body.style.overflowY = "hidden";
  return (
    <div className="flex h-screen w-full justify-center items-center flex-col">
      <FaPeopleCarry className="text-5xl text-red-500" />
      <h1 className="text-2xl first-letter:text-red-500">Erro 404 - Página não encontrada</h1>
    </div>
  )
}

export default Error404;