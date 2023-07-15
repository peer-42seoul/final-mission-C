"use client";
import Styles from "./page.module.css";
import { useState } from "react";
import QuestionDetail from "@/components/detail/questionDetail/questionDetail";
import AnswerDetail from "@/components/detail/questionAnswerDetail/answerDetail";
import AnswerForm from "@/components/detail/answerForm/answerForm";
import { styled } from "styled-components";
import Link from "next/link";

const Button = styled.button`
  display: block;
  background-color: #a6d5ff;
  padding: 0.5em 0.5em;
  border-radius: 10px;
  color: white;
  border-color: lightgrey;
  border-width: 1.5px;
`;

const Page: React.FC<{ params: { id: string } }> = (props) => {
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
      <div></div>
      <div className={Styles.mainThread}>
        <QuestionDetail
          category={content.category}
          nickname={content.nickname}
          title={content.title}
          content={content.content}
          recommend={content.recommend}
          view={content.view}
          createdAt={content.createdAt}
          updatedAt={content.updatedAt}
          isLoading={isLoading}
          hasError={hasError}
        />
        {content.answerList.map((aContent) => {
          return (
            <AnswerDetail
              key={aContent.answerId}
              nickname={aContent.nickname}
              content={aContent.content}
              recommend={aContent.recommend}
              createdAt={aContent.createdAt}
              updatedAt={aContent.updatedAt}
              isLoading={isLoading}
              hasError={hasError}
              id={aContent.answerId}
            />
          );
        })}
        <AnswerForm questionId={parseInt(props.params.id)} />
      </div>
      <div className={Styles.sideMenu}>
        <h3>Side Menu</h3>
        <h4>Wasn't a question you're curious about?</h4>
        <Button>
          <Link
            href={"/write"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Write a Question
          </Link>
        </Button>
        <Button>
          <Link href={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            Go to Main
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
