import React from 'react';

const validations = {
    user: {
        regexp: /^(?![0-9]+$).+/,
        erro: "Preencha um usuário válido"
    },
    password: {
        regexp: /^.{2,}$/,
        erro: "Preencha uma senha válida"
    }
}
const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [erro, setErro] = React.useState('');
  
  function existErrors(text) {
    if(text.length === 0) {
        setErro(`O campo de ${type === "user" ? "usuário" : "senha"} não pode ser vazio`);
        return true;
    }
    else if(!validations[type].regexp.test(text)) {
        setErro(validations[type].erro);
        return true;
    }
    else {
        setErro(false);
        return false;
    }
  }
  function onChange({ target }) {
    if(erro) {
        existErrors(target.value);
    }
    setValue(target.value);
  }
  function onBlur() {
    existErrors(value);
  }
  return { value, erro, onChange, onBlur }
}

export default useForm;