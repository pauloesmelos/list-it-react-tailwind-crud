import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import FormEdit from './form/form-edit-todo/FormEdit';

const ModalEditTodo = ({ value, setValue, idEdit, completedEdit }) => {
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
                onClick={() => setValue(false)}
            />
            <FormEdit idEdit={idEdit} completedEdit={completedEdit} setValue={setValue} />
        </div>
    </div>
  )
}

export default ModalEditTodo;