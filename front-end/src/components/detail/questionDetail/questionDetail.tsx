import QuestionContentDetail from "./questionContentDetail";
import QuestionInfoDetailBottom from "./questionInfoDetailBottom";
import QuestionInfoDetailTop from "./questionInfoDetailTop";
import Styles from "./questionDetail.module.css";

const QuestionDetail: React.FC<{
  category: string;
  nickname: string;
  title: string;
  content: string;
  recommend: number;
  view: number;
  createdAt: string;
  updatedAt: string;
  hasError: boolean;
  isLoading: boolean;
  status?: number;
  errorMessage?: string;
}> = (props) => {
  return (
    <div className={Styles.mainContent}>
      <div className={Styles.mainTitle}>
        {!props.hasError && props.isLoading && <h2>Loading</h2>}
        {!props.hasError && !props.isLoading && (
          <QuestionInfoDetailTop
            title={props.title}
            nickname={props.nickname}
            createdAt={props.createdAt}
            updatedAt={props.updatedAt}
          />
        )}
      </div>
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
          <QuestionContentDetail content={props.content} />
          <QuestionInfoDetailBottom
            category={props.category}
            view={props.view}
            recommend={props.recommend}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionDetail;
