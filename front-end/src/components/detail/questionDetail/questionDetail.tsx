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
  updatedAt: string | null;
  hasError: boolean;
  isLoading: boolean;
  status?: number;
  errorMessage?: string;
  id: number;
  setReload: (state: boolean) => void;
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
            id={props.id}
            setReload={props.setReload}
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
            setReload={props.setReload}
            category={props.category}
            view={props.view}
            recommend={props.recommend}
            id={props.id}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionDetail;
