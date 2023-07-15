"use client";
import { log } from "console";
import ImgButton from "../common/imgButton";

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
    <div>
      <div>
        <h2>Q. {props.title}</h2>
        <i>written by. {props.nickname}</i>
      </div>
      <div>
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
