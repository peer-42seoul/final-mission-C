"use client";
import Styles from "./question.module.css";

const QuestionItemContent: React.FC<{ id: number; content: string }> = (
  props
) => {
  let content = props.content;
  if (content) {
    return <p className={Styles.questionContent}>{props.content}</p>;
  }
};

export default QuestionItemContent;
