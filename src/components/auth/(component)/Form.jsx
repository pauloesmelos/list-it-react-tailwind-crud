import React from 'react';
import Input from '../../app/form/input/Input';
import { useNavigate } from 'react-router-dom';
import useUserData from '../../../hooks/useUserData';
import useForm from '../../../hooks/useForm/useForm';
import { BiMessageAltError } from 'react-icons/bi';
import { ThreeDots } from 'react-loader-spinner';
import useLocalStorage from '../../../hooks/useLocalStorage/useLocalStorage';

const Form = () => {
  const user = useForm('user'); // custom hook
  const password = useForm('password');
  const [fail, setFail] = React.useState('');
  const { data } = useUserData();
  const navigate = useNavigate();
  const localStorage = useLocalStorage(user.value, password.value);
  const credentials = localStorage.get();

  React.useEffect(() => {
    if(credentials) {
        const { user, password } = credentials;
        if(auth(user,password)) {
            navigate("/app");
            console.log('entrou');
        }
        else{
            console.log('não entrou');
        }
    }
  }, [credentials]);

  const auth = (user, password) => {
    const credential = { user , password };

    if(data) {
        const sucess = data.map(e => {  // state password = string
            if(credential.user === e.user && +credential.password === e.password) {
                setFail('');
                return true;
            }
            else {
                setFail("Usuário ou senha inválidos");
                return false;
            }
        });
        return sucess.includes(true);
    }
    else {
        setFail("Falha ao buscar usuários");
        return false;
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(auth(user.value, password.value)) {
        localStorage.set();
        navigate("/app");
    }
  }
  const Spinner = () => {
    setTimeout(() => {
        setFail('');
    }, 3000);
    return <ThreeDots 
                height="30" 
                width="30"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                visible={true}
            />
  }
  return (
    <div
        className="p-12 w-full max-w-md bg-white/90 border-2 shadow-lg rounded-lg relative"
    >
        <form onSubmit={handleSubmit}>
            <Input
                label="Usuário: "
                name="user" 
                id="user" 
                type="text"
                value={user.value}
                onChange={user.onChange}
                onBlur={user.onBlur}
                placeholder="Seu usuário"
            />
            {user.erro && 
            <p className="text-red-500 flex gap-2 items-center">
                <BiMessageAltError className="text-2xl" />
                {user.erro}
            </p>}
            <Input
                label="Senha: "
                name="password" 
                id="password" 
                type="password"
                onChange={password.onChange}
                onBlur={password.onBlur}
                placeholder="Sua senha"
            />
            {password.erro && 
            <p className="text-red-500 flex gap-2 items-center">
                <BiMessageAltError className="text-2xl" />
                {password.erro}
            </p>}
            <button 
            className="w-full bg-green-500 p-3 text-white rounded-lg font-medium hover:scale-x-105 hover:opacity-70 duration-300 mt-8 flex justify-center"
            >
            { fail ? 
                Spinner() : "Login"
            }
            </button>
            { fail && 
                <p className="text-red-600 text-xl text-center mt-5">{fail}</p> 
            }
        </form>
    </div>
  )
}

export default Form;