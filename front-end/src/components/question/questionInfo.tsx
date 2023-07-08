"use client";
import Styles from "./question.module.css";
import { SortType } from "../../types/sort";

const QuestionInfo: React.FC<{
  title: string;
  createdAt: string;
  view: number;
  recommend: number;
  sort: string;
  nickname: string;
  answerCount: number;
}> = (props) => {
  const imgSrc = `/${props.sort}.png`;
  let hasImg = true;
  let metaText = "";
  let createdAt;
  let createdAtStr;
  if (props.sort === SortType.latest) {
    hasImg = false;
    createdAt = new Date(props.createdAt);
    createdAtStr = createdAt.toLocaleDateString("en-Us");
    metaText = "created at " + createdAtStr;
  } else if (props.sort === SortType.views) {
    metaText = `${props.view} views`;
  } else {
    metaText = `${props.recommend}`;
  }

  return (
    <div className={Styles.questionInfo}>
      <div className={Styles.meta}>
        <h3>{props.title}</h3>
        <i>written by. {props.nickname}</i>
      </div>
      <div className={Styles.meta}>
        <img src="/comment.png" />
        <p>{props.answerCount}</p>
        {hasImg && <img src={imgSrc}></img>}
        {hasImg && <p>{metaText}</p>}
        {!hasImg && <p id={Styles.createdAt}>{metaText}</p>}
      </div>
    </div>
  );
};

export default QuestionInfo;
