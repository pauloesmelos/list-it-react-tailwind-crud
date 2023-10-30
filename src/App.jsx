import React from 'react';
import ButtonTodo from './components/app/ButtonTodo';
import Card from './components/app/Card';
import CurrentDate from './components/app/CurrentDate';
import { GlobalContext } from './global/GlobalContext';
import useTodoDataDelete from './hooks/useTodoDataDelete';
import useTodoDataPut from './hooks/useTodoDataPut';

const App = () => {
  document.querySelector('body').style.overflowY = "visible";
  const { data, isLoading, refetch, error } = React.useContext(GlobalContext);
  const { mutate } = useTodoDataPut(refetch);
  const deleteData = useTodoDataDelete(refetch);

  if(isLoading) {
    return <p className="h-screen w-full flex justify-center items-center text-neutral-950 animate-pulse text-5xl">Carregando...</p>
  }
  if(!data) return null;
  return (
    <>
      <CurrentDate />
      <div className="flex justify-center items-center flex-col w-full">
        {data.map((e,i) => (
          <div key={i} className="max-w-lg w-full p-3">
            <Card
              userId={e.userId}
              id={e.id}
              title={e.title}
              completed={e.completed}
              checked={() => mutate(e)}
              deleted={() => deleteData.mutate(e)}
            />
          </div>
        ))}
        <div className="flex gap-16 max-w-lg w-full justify-center sm:gap-0 sm:justify-between flex-wrap">
          <ButtonTodo text="Limpar Tarefas" type="remove" />
          <ButtonTodo text="Adicionar Tarefa" type="add" />
        </div>
      </div>
    </>
  )
}

export default App;