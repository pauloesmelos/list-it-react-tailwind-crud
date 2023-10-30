import axios from 'axios';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
const URL = "http://localhost:3000/";

const dataDelete = async ({ userId, id, title, completed }) => {
    return axios.delete(`${URL}todos/${id}`, 
    { userId, id, title, completed})
    .then(response => {
      console.log(response);
      console.log(id);
    }).catch(erro => console.log(erro));
}
const useTodoDataDelete = (refetch) => {
  const mutation = useMutation({
    mutationFn: useCallback(dataDelete),
    mutationKey: ["todos-delete"],
    onSuccess: () => {
      refetch();
    }
  });
  return mutation;
}

export default useTodoDataDelete;