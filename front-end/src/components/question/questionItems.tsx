"use client";
import type questionItemElement from "../../types/questionItemElement";
import QuestionItem from "./questionItem";
import Styles from "./question.module.css";

const QuestionItems: React.FC<{
  items: questionItemElement[];
  sort: string;
  setSelected: (selected: string) => void;
}> = (props) => (
  <div>
    {props.items?.map((item) => (
      <QuestionItem
        key={item.questionId}
        item={item}
        sort={props.sort}
        setSelected={props.setSelected}
      />
    ))}
  </div>
);

export default QuestionItems;
