import React from 'react';

const ButtonTodo = ({ text,type }) => {
  if(type === "remove") {
    return (
      <button className="p-3 bg-red-400 text-white rounded-lg  font-bold hover:bg-red-500 
       hover:scale-105 duration-500 hover:shadow-md mt-5 md:rounded-lg">
        {text}
      </button>
    )
  }
  else {
    return(
      <button className="p-3 bg-green-400 text-white rounded-lg  font-bold hover:bg-green-500 
       hover:scale-105 duration-500 hover:shadow-md mt-5">
        {text}
      </button>
    )
  }
}

export default ButtonTodo;