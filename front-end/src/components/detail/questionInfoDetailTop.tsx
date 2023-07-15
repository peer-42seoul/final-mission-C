"use client";
import Styles from "./questionInfoDetail.module.css";

const QuestionInfoDetailTop: React.FC<{
  title: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
}> = (props) => {
  const createdAt = new Date(props.createdAt);
  const updatedAt = new Date(props.updatedAt);
  const dateInfo: string =
    createdAt === updatedAt
      ? "created at " + createdAt.toLocaleDateString("en-Us")
      : "updated at " + updatedAt.toLocaleDateString("en-Us");
  const onClick = () => {
    console.log("clicked!");
  };
  return (
    <div className={Styles.questionInfo}>
      <div className={Styles.meta}>
        <h2>Q. {props.title}</h2>
        <i>written by. {props.nickname}</i>
      </div>
      <div className={Styles.meta}>
        <p>{dateInfo}</p>
        <img src={"/pen.png"} onClick={onClick} style={{ height: "1em" }} />
        <img
          src={"/trashCan.png"}
          onClick={onClick}
          style={{ height: "1em" }}
        />
      </div>
    </div>
  );
};

export default QuestionInfoDetailTop;
