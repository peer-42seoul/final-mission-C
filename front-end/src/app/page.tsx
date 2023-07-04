import Image from "next/image";
import styles from "./page.module.css";
import QuestionItem from "./questionItem";
import QuestionItems from "./questionItems";
import questionItemElement from "./questionItemElement";

export default function Home() {
  const items: questionItemElement[] = [
    new questionItemElement({
      questionId: 6,
      title: "test2",
      answerCount: 0,
      category: "MINISHELL",
      recommend: 0,
      view: 0,
      nickname: "test nick2",
      createdAt: "2023-07-02T15:02:59.802146",
    }),
    new questionItemElement({
      questionId: 1,
      title: "test2",
      answerCount: 0,
      category: "MINISHELL",
      recommend: 5,
      view: 4,
      nickname: "test nick2",
      createdAt: "2023-07-02T15:02:08.883533",
    }),
  ];

  const sort: string = "views";
  // const sort: string = "latest";
  // const sort: string = "recommend";

  return (
    <div className={styles.main}>
      <h2>Questions</h2>
      <QuestionItems items={items} sort={sort} />
    </div>
  );
}
