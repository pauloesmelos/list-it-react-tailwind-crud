import React from 'react';

const Input = ({ label, name, id, type, value, onChange, onBlur, ...props }) => {
  // onchange possui o setValue
  return (
    <div className="mt-4">
        <label htmlFor={id} className="block text-xl">{label}</label>
        <input
         type={type}
         name={name}
         id={id}
         value={value}
         onChange={onChange}
         onBlur={onBlur}
         className=" bg-gray-100 p-3 rounded-md outline-none focus:outline-4 focus:outline-sky-500
         text-gray-600 my-2 focus:bg-sky-100 w-full border border-gray-300"
         {...props}
        />
    </div>
  )
}

export default Input;