import questionItemElement from "@/types/questionItemElement";
import axios from "axios";

async function useMainAPILauncher({
  sort,
  category,
  index,
  pageSize,
}: {
  sort: string;
  category: string;
  index: number;
  pageSize: number;
}) {
  // const items: questionItemElement[] = [] as questionItemElement[];

  const paramStr = `{
  "params": {
    ${category !== "" ? `"category": "${category}",` : ""}
    ${sort !== "" ? `"sort": "${sort}",` : `"sort": "latest",`}
    "index": ${index},
    "pageSize": ${pageSize}
  }
}`;

  const param = JSON.parse(paramStr);

  const res = axios.get(`http://localhost:8000/v1`, param).then((res) => {
    console.log(res);
    return res.data;
  });

  return res;
}

export default useMainAPILauncher;
