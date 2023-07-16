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
    category: "FDF",
    nickname: "san",
    title: "dummy",
    content: "다시 질문 드립니다 fdf는 어떤 과제인가요?",
    recommend: 0,
    view: 1,
    createdAt: "2023-07-16T16:32:13.136259",
    updatedAt: null,
    answerList: [
      {
        nickname: "jun",
        content: "이건 1번 질문의 2번 답변 입니다. success.",
        createdAt: "2023-07-16T18:29:19.843061",
        updatedAt: null,
        recommend: 0,
        questionId: 10,
        answerId: 1,
        adopted: false,
      },
      {
        nickname: "jun",
        content: "이건 1번 질문의 2번 답변 입니다. success.",
        createdAt: "2023-07-16T18:29:20.812388",
        updatedAt: null,
        recommend: 0,
        questionId: 10,
        answerId: 2,
        adopted: false,
      },
      {
        nickname: "jun",
        content: "이건 1번 질문의 2번 답변 입니다. success.",
        createdAt: "2023-07-16T18:29:21.616024",
        updatedAt: null,
        recommend: 0,
        questionId: 10,
        answerId: 3,
        adopted: false,
      },
      {
        nickname: "jun",
        content: "이건 1번 질문의 2번 답변 입니다. success.",
        createdAt: "2023-07-16T18:29:22.334449",
        updatedAt: null,
        recommend: 0,
        questionId: 10,
        answerId: 4,
        adopted: false,
      },
      {
        nickname: "jun",
        content: "이건 1번 질문의 2번 답변 입니다. success.",
        createdAt: "2023-07-16T18:29:23.085986",
        updatedAt: null,
        recommend: 0,
        questionId: 10,
        answerId: 5,
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
          id={parseInt(props.params.id)}
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
