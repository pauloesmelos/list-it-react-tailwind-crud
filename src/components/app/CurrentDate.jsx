import React from 'react';

const CurrentDate = () => {
  function currentDate() {
    const date = new Date();
    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const dayWeek = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    return `${dayWeek[date.getDay()]} ${date.getDate()} de ${month[date.getMonth()]}`;
  }
  currentDate();
  return (
    <div className="flex gap-10 p-5 justify-center items-center">
      <h3 className="text-xl font-medium">Hoje</h3>
      <p className="text-gray-400">{currentDate()}</p>
    </div>
  )
}

export default CurrentDate;