import questionItemElement from "@/types/questionItemElement";
import axios from "axios";
import { useEffect } from "react";
import { SortType } from "@/types/sort";

function useMainAPILauncher({
  sort,
  category,
  index,
  pageSize,
  isLoading,
  setContents,
  setIsLoading,
}: {
  sort: string;
  category: string;
  index: number;
  pageSize: number;
  isLoading: boolean;
  setContents: (res: any) => void;
  setIsLoading: (isLoading: boolean) => void;
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
            "index": ${index},
            "pageSize": ${pageSize}
          }
        }`;

        const param = JSON.parse(paramStr);

        await axios.get(`http://localhost:8000/v1`, param).then((res) => {
          setContents(res.data);
          console.log(res.data);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
        setContents("Error occurred while loading please try again");
      }
    };
    if (isLoading == false) {
      fetchData();
    }
  }, [sort, category, index, pageSize]);
}

export default useMainAPILauncher;
