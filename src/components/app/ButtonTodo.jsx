import React from 'react';

const ButtonTodo = ({ text, type, onClick, attributes }) => {
  const styleDefault = `p-3 text-white rounded-lg  font-bold hover:scale-105 duration-500 
  hover:shadow-md mt-5`;

  if(type === "remove") {
    return (
      <button 
        className={`bg-red-400 hover:bg-red-300 ${styleDefault}`}
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
  else if(type === "add"){
    return(
      <button 
        className={`bg-green-400 hover:bg-green-300 ${styleDefault}`}
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
  else if(type === "edit") {
    return(
      <button 
        className={`bg-green-400 hover:bg-green-500 ${styleDefault} ${attributes}`}
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
}

export default ButtonTodo;