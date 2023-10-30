import React from 'react';
import ButtonTodo from './components/app/ButtonTodo';
import Card from './components/app/Card';
import CurrentDate from './components/app/CurrentDate';
import { GlobalContext } from './global/GlobalContext';
import useTodoDataDelete from './hooks/useTodoDataDelete';
import useTodoDataPut from './hooks/useTodoDataPut';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import ModalAddTodo from './components/app/ModalAddTodo';

const App = () => {
  // tirando o overflow ao navegar da rota login p home
  document.querySelector('body').style.overflowY = "visible";
  // hooks - axios globalcontext state
  const { data, isLoading, refetch, error } = React.useContext(GlobalContext);
  const { mutate } = useTodoDataPut(refetch);
  const deleteData = useTodoDataDelete(refetch);
  const [modal, setModal] = React.useState(false);

  const modifierModal = () => {
    setModal(state => !state);
  }
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
          <ButtonTodo text="Adicionar Tarefa" type="add" onClick={modifierModal} />
        </div>
      </div>
      <ModalAddTodo isOpen={modal} setModal={setModal}/>
    </>
  )
}

export default App;