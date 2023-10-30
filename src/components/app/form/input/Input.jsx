import React from 'react';

const Input = ({ label, name, id, type, value, setValue, ...props }) => {
  const handleChange = ({ target }) => {
    setValue(target.value);
  }
  return (
    <div>
        <label htmlFor={id} className="block font-bold text-xl">{label}</label>
        <input
         type={type}
         name={name}
         id={id}
         value={value}
         onChange={handleChange}
         className=" bg-gray-100 p-3 rounded-md outline-none focus:outline-4 focus:outline-sky-500
         text-gray-600 my-5 focus:bg-sky-100"
         {...props}
        />
    </div>
  )
}

export default Input;