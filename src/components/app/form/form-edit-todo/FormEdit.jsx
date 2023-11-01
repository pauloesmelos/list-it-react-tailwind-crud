import React from 'react';
import useTodoData from '../../../../hooks/useTodoData';
import useTodoPutTitle from '../../../../hooks/useTodoPutTitle';
import ButtonTodo from '../../ButtonTodo';
import Input from '../input/Input';

const FormEdit = ({ idEdit,completedEdit, setValue }) => {
  const [title, setTitle] = React.useState('');
  const { refetch } = useTodoData();
  const { mutate } = useTodoPutTitle(refetch);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { idEdit, title, completedEdit};
    mutate(credentials);
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
            onClick={() => setValue(e => !e)}
        />
    </form>
  )
}

export default FormEdit;