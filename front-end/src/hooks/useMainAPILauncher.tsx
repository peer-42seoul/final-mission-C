import questionItemElement from "@/types/questionItemElement";
import axios from "axios";
import { useEffect } from "react";
import { SortType } from "@/types/sort";

function useMainAPILauncher({
  sort,
  category,
  pageIndex,
  pageSize,
  isLoading,
  setContents,
  setIsLoading,
  setHasError,
}: {
  sort: string;
  category: string;
  pageIndex: number;
  pageSize: number;
  isLoading: boolean;
  setContents: (res: any) => void;
  setIsLoading: (isLoading: boolean) => void;
  setHasError: (hasError: boolean) => void;
}) {
  // const items: questionItemElement[] = [] as questionItemElement[];

  useEffect(() => {
    const fetchData = async () => {
      setContents(null);
      setIsLoading(true);
      try {
        const paramStr = `{
          "params": {
            ${category !== "" ? `"category": "${category}",` : ""}
            ${
              sort !== ""
                ? `"sort": "${sort}",`
                : `"sort": "${SortType.latest}",`
            }
            "pageIndex": ${pageIndex},
            "pageSize": ${pageSize}
          }
        }`;

        const param = JSON.parse(paramStr);
        console.log(param);

        await axios.get(`http://localhost:8000/v1`, param).then((res) => {
          console.log(res.data);
          setContents(res.data);
          setIsLoading(false);
          setHasError(false);
        });
      } catch (error) {
        setHasError(true);
        setContents(error);
        setIsLoading(false);
        console.log(error);
      }
    };
    if (isLoading == false) {
      fetchData();
    }
  }, [sort, category, pageIndex, pageSize]);
}

export default useMainAPILauncher;
