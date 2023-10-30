import axios from 'axios';
import { useQuery } from 'react-query';

const URL = "http://localhost:3000/";
const getData = async () => {
    return axios.get(`${URL}todos`)
        .then(response => response.data)
        .catch(erro => console.log(erro));
}
const useData = () => { // hook
  const query = useQuery({
    queryFn: getData,
    queryKey: ["todo"]
  });
  return query;
}

export default useData;