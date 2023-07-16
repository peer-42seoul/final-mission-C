"use client";
import { useEffect, useState } from "react";
import Styles from "./questionInfoDetail.module.css";
import useDeleteAPI from "@/hooks/useDeleteAPI";
import PasswordModal from "../common/passwordModal";
import LoadingBackdrop from "@/components/common/loadingBackdrop";
import { useRouter } from "next/navigation";

const QuestionInfoDetailTop: React.FC<{
  title: string;
  nickname: string;
  createdAt: string;
  updatedAt: string | null;
  id: number;
  setReload: (state: boolean) => void;
}> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("" as string);
  const dateInfo: string = !props?.updatedAt
    ? "created at " + new Date(props.createdAt).toLocaleDateString("en-Us")
    : "updated at " + new Date(props?.updatedAt).toLocaleDateString("en-Us");
  const onClick = () => {
    setModalOpen(true);
  };
  const route = useRouter();

  const trashCan = useDeleteAPI({
    type: "question",
    id: props.id,
    password: password,
  });

  useEffect(() => {
    if (password) {
      trashCan.deleteItem().then((result) => {
        console.log(result);
        if (result === true) {
          route.push("/");
        }
      });
    }
  }, [password]);

  return (
    <div>
      <div className={Styles.questionInfo}>
        <div className={Styles.questionTitle}>
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
      <PasswordModal
        buttonText="delete"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setPassword={setPassword}
      />
      <LoadingBackdrop
        isLoading={trashCan.isLoading}
        hasError={trashCan.hasError}
        setHasError={trashCan.setHasError}
        errorMessage={trashCan.errorMessage}
      />
    </div>
  );
};

export default QuestionInfoDetailTop;
