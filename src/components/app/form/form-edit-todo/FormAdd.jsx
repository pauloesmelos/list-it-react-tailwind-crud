import React from 'react';
import Input from '../input/Input';
import ButtonTodo from '../../ButtonTodo';

const FormAdd = () => {
  const [desc, setDesc] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form className="max-w-xs" onSubmit={handleSubmit}>
        <Input 
            label="Descrição"
            name="descricao"
            id="descricao"
            type="text"
            value={desc}
            setValue={setDesc}
            placeholder="Insira algo aqui"
        />
        <ButtonTodo
            type="edit"
            text="Enviar Tarefa"
            attributes="w-full"
        />
    </form>
  )
}

export default FormAdd;