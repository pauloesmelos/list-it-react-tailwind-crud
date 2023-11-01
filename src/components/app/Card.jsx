import React from 'react';
import { FiCheck, FiDelete, FiEdit } from 'react-icons/fi';

const Card = ({ userId, id, title, completed, checked, deleted }) => {

  return (
    <div className={`p-4  my-2 text-neutral-950 font-light rounded-xl hover:scale-105 animate-showCard
    hover:opacity-70 shadow-sm flex justify-between duration-300 ${completed ? "bg-green-300" : " bg-gray-200"}`}>
      <h2>{title}</h2>
      <div className="flex gap-5">
        <FiCheck className="text-xl text-gray-700 cursor-pointer hover:text-green-500 font-bold" onClick={checked} />
        <FiEdit className="text-xl text-gray-700 cursor-pointer hover:text-sky-600 font-bold" />
        <FiDelete className="text-xl text-gray-700 cursor-pointer hover:text-red-600 font-bold" onClick={deleted} />
      </div>
    </div>
  )
}

export default React.memo(Card);