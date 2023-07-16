"use client";
import type questionItemElement from "../../types/questionItemElement";
import QuestionItem from "./questionItem";
import Styles from "./question.module.css";
import { useRouter } from "next/navigation";

const QuestionItems: React.FC<{
  items: questionItemElement[];
  sort: string;
  setSelected: (selected: string) => void;
}> = (props) => {
  const route = useRouter();

  return (
    <div>
      {props.items?.map((item) => (
        <div onClick={() => route.push(`/${item.questionId}/detail`)}>
          <QuestionItem
            key={item.questionId}
            item={item}
            sort={props.sort}
            setSelected={props.setSelected}
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionItems;
