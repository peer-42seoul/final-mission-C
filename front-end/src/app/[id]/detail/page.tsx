"use client";
import Styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";
import QuestionDetail from "@/components/detail/questionDetail/questionDetail";
import AnswerDetail from "@/components/detail/questionAnswerDetail/answerDetail";
import AnswerForm from "@/components/detail/answerForm/answerForm";
import { styled } from "styled-components";
import Link from "next/link";
import axios from "axios";
import LoadingBackdrop from "@/components/common/loadingBackdrop";

const Button = styled.button`
  display: block;
  background-color: #a6d5ff;
  padding: 0.5em 0.5em;
  border-radius: 10px;
  color: white;
  border-color: lightgrey;
  border-width: 1.5px;
`;

type Answer = {
  nickname: string;
  content: string;
  createdAt: string;
  updatedAt: string | null;
  recommend: number;
  questionId: number;
  answerId: number;
  adopted: boolean;
};

type Question = {
  type: string;
  category: string;
  nickname: string;
  title: string;
  content: string;
  recommend: number;
  view: number;
  createdAt: string;
  updatedAt: string | null;
  answerList: Answer[];
};

const Page: React.FC<{ params: { id: string } }> = (props) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState({} as Question);
  const [errorMessage, setErrorMessage] = useState("" as string);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8000/v1/question/${props.params.id}`)
        .then((res) => {
          setReload(false);
          setContent(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setReload(false);
          if (error?.response?.data?.error?.message) {
            setErrorMessage(error?.response?.data?.error?.message);
          }
          setHasError(true);
          setIsLoading(false);
        });
    };
    if (reload) {
      fetchData();
    }
  }, [reload]);

  return (
    <div className={Styles.main}>
      <div></div>
      <div className={Styles.mainThread}>
        {content?.category && (
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
        )}
        {!isLoading &&
          !hasError &&
          content?.answerList?.map((aContent) => {
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
      <LoadingBackdrop
        hasError={hasError}
        setHasError={setHasError}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Page;
