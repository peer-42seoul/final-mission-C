import AnswerContentDetail from "./answerContentDetail";
import AnswerInfoDetailBottom from "./answerInfoDetailBottom";
import AnswerInfoDetailTop from "./answerInfoDetailTop";
import Styles from "./answerDetail.module.css";
import { Content } from "next/font/google";

const AnswerDetail: React.FC<{
  nickname: string;
  content: string;
  recommend: number;
  createdAt: string;
  updatedAt: string | null;
  id: number;
  hasError: boolean;
  isLoading: boolean;
  status?: number;
  errorMessage?: string;
  setReload: (state: boolean) => void;
  defaultValue: {
    content: string;
    nickname: string;
    password: string;
  } | null;
  setDefaultValue: (data: any) => void;
  setUpdateAnswerID: (answerID: number) => void;
  questionID: number;
}> = (props) => {
  const onUpdateClickHandler = () => {
    props.setDefaultValue({
      nickname: "",
      content: props.content,
      password: "",
    });
    props.setUpdateAnswerID(props.id);
  };
  return (
    <div className={Styles.mainContent}>
      {!props.hasError && props.isLoading && (
        <div style={{ padding: "10px 20px 0" }}>
          <h2>Loading</h2>
        </div>
      )}
      {props.hasError && !props.isLoading && (
        <div style={{ padding: "10px 20px 0" }}>
          <h2>
            {props?.status} {props?.errorMessage}
          </h2>
        </div>
      )}
      {!props.hasError && !props.isLoading && (
        <div className={Styles.mainContentBody}>
          <AnswerInfoDetailTop
            createdAt={props.createdAt}
            updatedAt={props.updatedAt}
            nickname={props.nickname}
            id={props.id}
            setReload={props.setReload}
            onUpdate={onUpdateClickHandler}
          />
          <AnswerContentDetail content={props.content} />
          <AnswerInfoDetailBottom
            answerId={props.id}
            recommend={props.recommend}
            setReload={props.setReload}
          />
        </div>
      )}
    </div>
  );
};

export default AnswerDetail;
