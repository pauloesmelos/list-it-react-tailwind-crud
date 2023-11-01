import axios from 'axios';
import { useQuery } from 'react-query';

const URL = "http://localhost:3000/";

const getUsers = async () => {
    return await axios.get(`${URL}users`).then(response => response.data);
}
const useUserData = () => {
  const query = useQuery({
    queryFn: getUsers,
    queryKey: ["get-users"]
  })
  return query;
}

export default useUserData;