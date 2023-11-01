import axios from 'axios';
import { useMutation } from 'react-query';

const URL = "http://localhost:3000/";
const postData = async ({ idEdit, title, completedEdit }) => {
    return axios.put(`${URL}todos/${idEdit}`, {
      idEdit,
      title,
      completedEdit
    }).then(response => response);
}
const useTodoPutTitle = (refetch) => {
  const mutation = useMutation({
    mutationFn: postData,
    mutationKey: ["todo-put-title"],
    onSuccess: () => refetch()
  });
  return mutation;
}

export default useTodoPutTitle;