"use client";
import Image from "next/image";
import styles from "./page.module.css";
import QuestionItem from "../components/question/questionItem";
import QuestionItems from "../components/question/questionItems";
import questionItemElement from "../types/questionItemElement";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { SortType } from "../types/sort";
import SortSelect from "../components/sortSelect";
import CategoryItemList from "@/components/category/categoryItemList";

export default function Home() {
  const res = {
    content: [
      {
        questionId: 1,
        title: "미니쉘 우웩아니고 냠냠쩝",
        answerCount: 3,
        category: "minishell",
        recommend: 29,
        view: 1054,
        nickname: "sann",
        createdAt: "2023-07-03T16:59:21.373568",
        content: "아 쉽다",
      },
      {
        questionId: 6,
        title: "test2",
        answerCount: 0,
        category: "minishell",
        recommend: 0,
        view: 9,
        nickname: "test2",
        createdAt: "2023-07-03T23:37:58.375181",
        content: "test2",
      },
      {
        questionId: 5,
        title: "test2",
        answerCount: 0,
        category: "minishell",
        recommend: 0,
        view: 15,
        nickname: "test2",
        createdAt: "2023-07-03T23:34:14.453078",
        content: "test2",
      },
      {
        questionId: 10,
        title: "이게 된다고 ?",
        answerCount: 0,
        category: "minishell",
        recommend: 0,
        view: 3,
        nickname: "ㅋㅋ",
        createdAt: "2023-07-04T16:29:51.436776",
        content: "ㅅㄷㄴㅅ",
      },
      {
        questionId: 9,
        title: "이제 진짜 가나요 ?",
        answerCount: 0,
        category: "minishell",
        recommend: 0,
        view: 5,
        nickname: "nick",
        createdAt: "2023-07-04T14:33:54.59192",
        content: "진짜 ?",
      },
      {
        questionId: 3,
        title: "test1",
        answerCount: 0,
        category: "minishell",
        recommend: 0,
        view: 21,
        nickname: "test1",
        createdAt: "2023-07-03T23:33:46.4305",
        content: "test1",
      },
      {
        questionId: 8,
        title: "나현 ㅎㅇ",
        answerCount: 0,
        category: "minishell",
        recommend: 0,
        view: 263,
        nickname: "테스트용 계정",
        createdAt: "2023-07-04T14:04:51.449177",
        content: "왜 이럴까1111222",
      },
      {
        questionId: 4,
        title: "test1",
        answerCount: 7,
        category: "minishell",
        recommend: 6,
        view: 57,
        nickname: "test1",
        createdAt: "2023-07-03T23:33:49.672502",
        content: "test1",
      },
      {
        questionId: 7,
        title: "아얄씨 죠아아아",
        answerCount: 0,
        category: "ft_irc",
        recommend: 0,
        view: 2,
        nickname: "sann",
        createdAt: "2023-07-04T05:07:33.702222",
        content: "응 안해",
      },
      {
        questionId: 2,
        title: "아얄씨 죠아아아",
        answerCount: 0,
        category: "ft_irc",
        recommend: 0,
        view: 113,
        nickname: "sann",
        createdAt: "2023-07-03T18:17:46.667881",
        content: "응 안해",
      },
    ],
    pageable: {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: 0,
      pageNumber: 2,
      pageSize: 10,
      paged: true,
      unpaged: false,
    },
    totalElements: 10,
    totalPages: 10,
    last: false,
    size: 10,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: 10,
    first: false,
    empty: false,
  };
  const items: questionItemElement[] = res.content;

  const [sort, setSort] = useState<string>(SortType.latest as string);
  const [page, setPage] = useState(1 as number);
  const [selected, setSelected] = useState("" as string);

  const onChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    console.log(value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.categoryItemList}>
        <CategoryItemList selected={selected} setSelected={setSelected} />
      </div>
      <div className={styles.mainThread}>
        <div className={styles.mainContent}>
          <div className={styles.mainTitle}>
            <h2>Main Page</h2>
            <SortSelect sort={sort} setSort={setSort} />
          </div>
          <QuestionItems items={items} sort={sort} />
        </div>
        <Pagination
          count={res.totalPages}
          variant="outlined"
          shape="rounded"
          className={styles.pagination}
          page={page}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
