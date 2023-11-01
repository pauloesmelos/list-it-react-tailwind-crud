import React from 'react';
import Input from '../input/Input';
import ButtonTodo from '../../ButtonTodo';
import useTodoDataPut from '../../../../hooks/useTodoDataPut';

const FormEdit = () => {
  const [title, setTitle] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="max-w-xs" onSubmit={handleSubmit}>
        <Input 
            label="Título"
            name="title"
            id="title"
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            placeholder="Insira algo aqui"
        />
        <ButtonTodo
            type="edit"
            text="Editar Tarefa"
            attributes="w-full"
        />
    </form>
  )
}

export default FormEdit;