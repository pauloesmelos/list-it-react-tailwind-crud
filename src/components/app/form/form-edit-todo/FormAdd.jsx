import React from 'react';
import { GlobalContext } from '../../../../global/GlobalContext';
import { GlobalModal } from '../../../../global/GlobalModal';
import useTodoPost from '../../../../hooks/useTodoPost';
import ButtonTodo from '../../ButtonTodo';
import Input from '../input/Input';

const FormAdd = () => {
  const [title, setTitle] = React.useState('');
  const { data, refetch } = React.useContext(GlobalContext);
  const { mutate } = useTodoPost(refetch);
  const { setModal } = React.useContext(GlobalModal);

  const getLastId = () => {
    const id = data.map(({ id }) => Number(id));
    return id.sort((a,b) => b - a)[0];
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const id = ( getLastId() ? getLastId() + 1 : 0);
    const completed = false;
    const credentials = { id, title, completed };
    mutate(credentials);

    setModal(false);
    setTitle('');
  }

  return (
    <form className="max-w-xs" onSubmit={handleSubmit}>
        <Input 
            label="Descrição"
            name="descricao"
            id="descricao"
            type="text"
            value={title}
            setValue={setTitle}
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