import React from 'react';
import Input from '../../app/form/input/Input';
import { useNavigate } from 'react-router-dom';
import useUserData from '../../../hooks/useUserData';
import useForm from '../../../hooks/useForm/useForm';
import { BiMessageAltError } from 'react-icons/bi';

const Form = () => {
  const user = useForm('user'); // custom hook
  const password = useForm('password');
  const [fail, setFail] = React.useState('');
  const { data } = useUserData(); //users
  const navigate = useNavigate();

  const auth = () => {
    const userAuth = user.value;
    const passwordAuth = password.value;
    const credential = { userAuth , passwordAuth};

    const sucess = data.map(e => {  // state password = string
        if(credential.userAuth === e.user && +credential.passwordAuth === e.password) {
            setFail('');
            return true;
        }
        else {
            setFail("Usuário ou senha inválidos")
            return false;
        }
    });
    return sucess.includes(true);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(auth()) {
        navigate("/app");
    }
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
            className="w-full bg-green-500 p-3 text-white rounded-lg font-medium hover:scale-x-105 hover:opacity-70 duration-300 mt-8"
            >
            Login
            </button>
            { fail && 
                <p className="text-red-600 text-xl text-center mt-5">{fail}</p> 
            }
        </form>
    </div>
  )
}

export default Form;