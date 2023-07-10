"use client";
import Image from "next/image";
import Styles from "./page.module.css";
import QuestionItem from "../components/question/questionItem";
import QuestionItems from "../components/question/questionItems";
import questionItemElement from "../types/questionItemElement";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import { SortType } from "../types/sort";
import SortSelect from "../components/sortSelect";
import CategoryItemList from "@/components/category/categoryItemList";
import SearchBox from "@/components/search/searchBox";
import useMainAPILauncher from "@/hooks/useMainAPILauncher";

export default function Home() {
  const [sort, setSort] = useState<string>(SortType.latest as string);
  const [page, setPage] = useState(1 as number);
  const [selected, setSelected] = useState("" as string);
  const [searchTitle, setSearchTitle] = useState("" as string);
  const [isLoading, setIsLoading] = useState(false as boolean);
  const [contents, setContents] = useState<null | JSON>(null);

  useMainAPILauncher({
    sort: sort,
    category: selected,
    index: page,
    pageSize: 10,
    isLoading,
    setContents,
    setIsLoading,
  });

  const totalPages = contents?.totalPages ? contents?.totalPages : 1;
  const items: questionItemElement[] = contents?.content;
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
      <div className={Styles.mainThread}>
        <div className={Styles.mainContent}>
          <div className={Styles.mainTitle}>
            <h2>Main Page</h2>
            <SortSelect sort={sort} setSort={setSort} />
          </div>
          {isLoading && (
            <div style={{ padding: "10px 20px 0" }}>
              <h2>Loading</h2>
            </div>
          )}
          {!isLoading && (
            <QuestionItems
              setSelected={setSelected}
              items={
                searchTitle === ("" as string)
                  ? items
                  : items?.filter((questionItemElement) => {
                      if (questionItemElement.title.startsWith(searchTitle)) {
                        return questionItemElement;
                      }
                    })
              }
              sort={sort}
            />
          )}
        </div>
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          className={Styles.pagination}
          page={page}
          onChange={onChangeHandler}
        />
      </div>
      <div className={Styles.sideMenu}>
        <SearchBox searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      </div>
    </div>
  );
}
