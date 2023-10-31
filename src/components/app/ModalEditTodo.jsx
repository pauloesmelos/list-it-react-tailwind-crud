import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import FormAdd from './form/form-edit-todo/FormAdd';

const ModalEditTodo = ({ value, onClick }) => {
 
  // anotar o relative, graças a ele o button ficou dentro da div branco do modal
  return (
    <div className={`h-screen w-full bg-transparentModal fixed m-0 left-0 top-0 z-30
    flex justify-center items-center
    ${value ? "block" : "hidden"}`}>
        <div className={`bg-white w-full h-1/2 p-3 flex justify-center items-center md:w-1/2 rounded-lg relative shadow-lg
        ${value ? "animate-showModal" : "animate-closeModal"}`}>
            <AiOutlineCloseCircle className="top-0 right-0 mr-1 absolute cursor-pointer
                text-3xl text-red-500 hover:scale-110 hover:opacity-50 hover:text-black duration-300
                md:text-4xl"
                onClick={onClick}
            />
            <FormAdd />
        </div>
    </div>
  )
}

export default ModalEditTodo;