import React from 'react';

const ButtonRemoveAll = ({ text }) => {
  return (
    <button className="p-3 bg-red-400 text-white rounded-lg  font-bold w-full max-w-lg hover:bg-white hover:text-red-400
     hover:scale-105 duration-500 hover:shadow-md mt-5">
      {text}
    </button>
  )
}

export default ButtonRemoveAll;