"use client";
import CategoryItemList from "@/components/category/categoryItemList";
import Styles from "./page.module.css";
import { useState } from "react";
import QuestionItems from "@/components/question/questionItems";
import SearchBox from "@/components/search/searchBox";
import QuestionInfoDetailTop from "@/components/detail/questionInfoDetail";

const Page: React.FC<{ params: { id: string } }> = (props) => {
  const [selected, setSelected] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    type: "question",
    category: "MINIRT",
    nickname: "junssong",
    title: "구웨에에ㅔ에엑",
    content: "minirt 어떻게 시작해야하나요?",
    recommend: 0,
    view: 3,
    createdAt: "2023-07-10T10:35:18.966728",
    updatedAt: "2023-07-10T10:53:02.456631",
    answerList: [
      {
        nickname: "hyeongki",
        content: "minishell 이렇게 하시면 됩니다.",
        createdAt: "2023-07-10T10:54:49.223479",
        updatedAt: "2023-07-10T10:54:49.223479",
        recommend: 0,
        questionId: 11,
        answerId: 14,
        adopted: false,
      },
      {
        nickname: "hyeongki",
        content: "minishell 이렇게 안돼요 됩니다.",
        createdAt: "2023-07-10T10:55:24.288792",
        updatedAt: "2023-07-10T10:55:24.288792",
        recommend: 0,
        questionId: 11,
        answerId: 15,
        adopted: false,
      },
    ],
  };

  return (
    <div className={Styles.main}>
      {/* <div className={Styles.sideMenu}></div> */}
      <div className={Styles.mainThread}>
        <div className={Styles.mainContent}>
          <div className={Styles.mainTitle}>
            {!hasError && isLoading && (
              // <div style={{ padding: "10px 20px 0" }}>
              <h2>Loading</h2>
              // </div>
            )}
            {!hasError && !isLoading && (
              <QuestionInfoDetailTop
                title={content.title}
                nickname={content.nickname}
                createdAt={content.createdAt}
                updatedAt={content.updatedAt}
              />
            )}
          </div>
          {!hasError && isLoading && (
            <div style={{ padding: "10px 20px 0" }}>
              <h2>Loading</h2>
            </div>
          )}
          {hasError && !isLoading && (
            <div style={{ padding: "10px 20px 0" }}>
              <h2>
                {/* {contents?.response?.status}{" "} */}
                {/* {contents?.response?.data?.error?.message} */}
              </h2>
            </div>
          )}
          {!hasError && !isLoading}
        </div>
      </div>
      <div className={Styles.sideMenu}></div>
    </div>
  );
};

export default Page;
