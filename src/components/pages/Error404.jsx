import React from 'react';
import { FaPeopleCarry } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Error404 = () => {
  const body = document.querySelector('body');
  body.style.overflowY = "hidden";
  return (
    <div className="flex h-screen w-full justify-center items-center flex-col">
      <Link to="/" className="text-center">
        <h1 className="text-red-700 text-2xl">Home</h1>
        <FaPeopleCarry className="text-8xl text-red-500" />
      </Link>
      <h1 className="text-2xl first-letter:text-4xl">Erro 
        <span className="text-red-600"> 404 </span> 
        - Página não encontrada
      </h1>
    </div>
  )
}

export default Error404;