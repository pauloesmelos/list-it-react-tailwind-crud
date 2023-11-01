import React from 'react';
import { FiCheck, FiDelete, FiEdit } from 'react-icons/fi';
const Card = ({ userId, id, title, completed, checked, edited, deleted }) => {

  return (
    <div className={`p-4 my-2 text-neutral-950 font-light rounded-xl shadow-sm flex  justify-between  duration-300 ${completed ? "bg-green-300" : " bg-gray-200"} hover:scale-105 animate-showCard`}>
      <h2>{title}</h2>
      <div className="flex gap-5">
        <FiCheck className="text-xl text-gray-700 cursor-pointer hover:text-green-500 font-bold" onClick={checked} />
        <FiEdit className="text-xl text-gray-700 cursor-pointer hover:text-sky-600 font-bold" onClick={edited}/>
        <FiDelete className="text-xl text-gray-700 cursor-pointer hover:text-red-600 font-bold" onClick={deleted} />
      </div>
    </div>
  )
}

export default React.memo(Card);