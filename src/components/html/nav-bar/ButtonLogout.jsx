import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage/useLocalStorage';

const ButtonLogout = ({ mobile }) => {
  const localStorage = useLocalStorage();
  return (
    <Link to="/" 
      className={`py-1 px-2 bg-red-500 text-white rounded-md hover:bg-white
      hover:text-red-500 duration-500 border-red-500 border-2 font-medium sm:py-3 sm:px-4
      ${mobile ? "py-3 mr-5" : ""}`}
      onClick={() => localStorage.clear()}
    >
      Logout
    </Link>
  )
}

export default ButtonLogout