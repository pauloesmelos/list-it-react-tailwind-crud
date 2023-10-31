import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import ButtonTodo from './components/app/ButtonTodo';
import Card from './components/app/Card';
import CurrentDate from './components/app/CurrentDate';
import ModalAddTodo from './components/app/ModalAddTodo';
import Footer from './components/html/footer/Footer';
import { GlobalContext } from './global/GlobalContext';
import { GlobalModal } from './global/GlobalModal';
import useTodoDataDelete from './hooks/useTodoDataDelete';
import useTodoDataPut from './hooks/useTodoDataPut';

const App = () => {
  // tirando o overflow ao navegar da rota login p home
  document.querySelector('body').style.overflowY = "visible";

  // hooks - axios globalcontext state
  const { data, isLoading, refetch, error } = React.useContext(GlobalContext);
  const { mutate } = useTodoDataPut(refetch);
  const deleteData = useTodoDataDelete(refetch);

  // modal
  const { modal, handleClick } = React.useContext(GlobalModal);

  const removeAll = () => {
    
  }

  if(isLoading || !data) {
    return (
    <p className="h-screen w-full flex justify-center items-center text-neutral-950 
    text-5xl">
      <span>
        <AiOutlineLoading3Quarters className="animate-loading" />
      </span>
    </p> )
  }
  //if(!data) return null;
  return (
    <>
      <CurrentDate />
      <div className="flex justify-center items-center flex-col w-full z-10">
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
        <div className="flex gap-2 max-w-lg w-full justify-center sm:gap-0 sm:justify-between flex-wrap">
          <ButtonTodo text="Limpar Tarefas" type="remove" onClick={removeAll} />
          <ButtonTodo text="Adicionar Tarefa" type="add" onClick={handleClick} />
        </div>
      </div>
      <ModalAddTodo value={modal} onClick={handleClick} />
      <Footer/>
    </>
  )
}

export default App;