import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLogin = () => {
  return (
    <Link to="/login" 
      className="py-1 px-2 bg-green-500 text-white rounded-md hover:bg-white hover:text-green-500 duration-500 border-green-500 border-2
      font-medium sm:py-2 sm:px-4"
    >
      Faça login
    </Link>
  )
}

export default ButtonLogin;