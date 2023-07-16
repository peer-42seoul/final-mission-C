import axios from "axios";
import { useState } from "react";

const useRecommend = (props: {
  type: string;
  recommend: number;
  id: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommend, setRecommend] = useState(props.recommend);
  const [hasError, setHasError] = useState(false);
  const onClickHandler = (event: React.MouseEvent) => {
    setIsLoading(true);
    const fetchData = async () => {
      axios
        .patch(`http://localhost:8000/v1/${props.type}/${props.id}`)
        .then((res) => {
          setRecommend((prev) => prev + 1);
          setIsLoading(false);
          return res;
        })
        .catch((error) => {
          setHasError(true);
          setIsLoading(false);
          console.log(error);
        });
    };
    fetchData();
  };
  return { hasError, setHasError, isLoading, recommend, onClickHandler };
};

export default useRecommend;
