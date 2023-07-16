import axios from "axios";
import { useState } from "react";

const useDeleteAPI = (props: {
  type: string;
  id: number;
  password: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("" as string);
  const deleteItem = () => {
    setIsLoading(true);
    const fetchData = async () => {
      axios
        .post(`http://localhost:8000/v1/${props.type}/${props.id}`, {
          password: props.password,
        })
        .then((res) => {
          setIsLoading(false);
          return res;
        })
        .catch((error) => {
          setHasError(true);
          if (error?.response?.data?.error?.message) {
            console.log(error?.response?.data?.error?.message);
            setErrorMessage(error.response.data.error.message);
          }
          setIsLoading(false);
          console.log(error);
        });
    };
    fetchData();
  };
  return { hasError, setHasError, isLoading, errorMessage, deleteItem };
};

export default useDeleteAPI;
