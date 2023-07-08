"use client";
import Image from "next/image";
import Styles from "./page.module.css";
import QuestionItem from "../components/question/questionItem";
import QuestionItems from "../components/question/questionItems";
import questionItemElement from "../types/questionItemElement";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { SortType } from "../types/sort";
import SortSelect from "../components/sortSelect";
import CategoryItemList from "@/components/category/categoryItemList";
import SearchBox from "@/components/search/searchBox";
import useMainAPILauncher from "@/hooks/useMainAPILauncher";

export default function Home() {
  const [sort, setSort] = useState<string>(SortType.view as string);
  const [page, setPage] = useState(1 as number);
  const [selected, setSelected] = useState("" as string);
  const [searchTitle, setSearchTitle] = useState("" as string);
  let content;
  const res = useMainAPILauncher({
    sort: sort,
    category: selected,
    index: page,
    pageSize: 10,
  }).then((res) => {
    console.log(res);

    return res;
  });

  // console.log();

  // const res = {
  //   content: [],
  //   pageable: {
  //     sort: {
  //       empty: false,
  //       sorted: true,
  //       unsorted: false,
  //     },
  //     offset: 0,
  //     pageNumber: 0,
  //     pageSize: 10,
  //     paged: true,
  //     unpaged: false,
  //   },
  //   totalPages: 0,
  //   totalElements: 0,
  //   last: true,
  //   size: 10,
  //   number: 0,
  //   sort: {
  //     empty: false,
  //     sorted: true,
  //     unsorted: false,
  //   },
  //   numberOfElements: 0,
  //   first: true,
  //   empty: true,
  // };

  // const items: questionItemElement[] = res.content;
  const onChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    console.log(value);
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.sideMenu}>
        <CategoryItemList selected={selected} setSelected={setSelected} />
      </div>
      {/* <div className={Styles.mainThread}>
        <div className={Styles.mainContent}>
          <div className={Styles.mainTitle}>
            <h2>Main Page</h2>
            <SortSelect sort={sort} setSort={setSort} />
          </div>
          <QuestionItems
            setSelected={setSelected}
            items={
              searchTitle === ("" as string)
                ? items
                : items.filter((questionItemElement) => {
                    if (questionItemElement.title.startsWith(searchTitle)) {
                      return questionItemElement;
                    }
                  })
            }
            sort={sort}
          />
        </div>
        <Pagination
          count={res.totalPages}
          variant="outlined"
          shape="rounded"
          className={Styles.pagination}
          page={page}
          onChange={onChangeHandler}
        />
      </div> */}
      <div className={Styles.sideMenu}>
        <SearchBox searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      </div>
    </div>
  );
}
