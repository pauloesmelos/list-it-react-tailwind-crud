import axios from 'axios';
import { useMutation } from 'react-query';
const URL = "http://localhost:3000/";

const postData = async ({ id, title, completed }) => {
    const credentials = { id, title, completed };
    return axios.post(`${URL}todos`, credentials)
    .then(response => console.log(response))
    .catch(erro => console.log(erro));
}
const useTodoPost = (refetch) => {
  const mutation = useMutation({
    mutationFn: postData,
    mutationKey: ["todo-post"],
    onSuccess: () => refetch()
  });
  return mutation;
}

export default useTodoPost;