"use client";
import type questionItemElement from "../../types/questionItemElement";
import QuestionItemContent from "./questionItemContent";
import styles from "./question.module.css";
import QuestionInfo from "./questionInfo";
import Button from "@/components/common/button-right-bottom-border";

// Item에 대한 내용물을 요청해서 가져오는 컴포넌트 만드는 게 마음이 편할듯

const QuestionItem: React.FC<{ item: questionItemElement; sort: string }> = (
  props
) => (
  <div className={styles.questionItem}>
    <QuestionInfo
      title={props.item.title}
      recommend={props.item.recommend}
      view={props.item.view}
      createdAt={props.item.createdAt}
      sort={props.sort}
      nickname={props.item.nickname}
      answerCount={props.item.answerCount}
    />
    <QuestionItemContent
      id={props.item.questionId}
      content={props.item.content}
    />
    <Button>
      <i>#{props.item.category}</i>
    </Button>
  </div>
);

export default QuestionItem;
