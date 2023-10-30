import axios from 'axios';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
const URL = "http://localhost:3000/";

const putData = async ({ userId, id, title, completed }) => {
    completed = !completed;
    
    return axios.put(`${URL}todos/${id}`, {
        userId,
        id,
        title,
        completed
    })
    .then(response => response)
}
const useTodoDataPut = (refetch) => {
  const put = useMutation({
    mutationFn: useCallback(putData),
    mutationKey: ["todo-put"],
    onSuccess: () => {
        refetch();
    }
  });
  return put;
}

export default useTodoDataPut;