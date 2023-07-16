import Styles from "./page.module.css";
import QuestionForm from "@/components/write/questionForm";

export default function Page() {
  return (
    <div className={Styles.main}>
      <div></div>
      <div className={Styles.mainTread}>
        <div className={Styles.mainContent}>
          <div style={{ padding: "10px 20px 0" }}>
            <h2>Write your question</h2>
            {/* <hr className={Styles.belowTitle} /> */}
          </div>
          <QuestionForm />
        </div>
      </div>
      <div></div>
    </div>
  );
}
