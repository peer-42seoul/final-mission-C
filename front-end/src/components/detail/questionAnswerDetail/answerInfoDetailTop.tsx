"use client";
import useDeleteAPI from "@/hooks/useDeleteAPI";
import Styles from "./answerInfoDetail.module.css";
import { useEffect, useState } from "react";
import PasswordModal from "../common/passwordModal";
import LoadingBackdrop from "@/components/common/loadingBackdrop";

const AnswerInfoDetailTop: React.FC<{
  createdAt: string;
  updatedAt: string;
  nickname: string;
  id: number;
}> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("" as string);
  const createdAt = new Date(props.createdAt);
  const updatedAt = new Date(props.updatedAt);
  const dateInfo: string =
    createdAt === updatedAt
      ? "created at " + createdAt.toLocaleDateString("en-Us")
      : "updated at " + updatedAt.toLocaleDateString("en-Us");
  const onClick = () => {
    setModalOpen(true);
  };

  const trashCan = useDeleteAPI({
    type: "answer",
    id: props.id,
    password: password,
  });

  useEffect(() => {
    if (password) {
      trashCan.deleteItem();
    }
  }, [password]);

  return (
    <div>
      <div className={Styles.answerInfo}>
        <div className={Styles.answerTitle}>
          <h3>A. </h3>
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
      />
    </div>
  );
};

export default AnswerInfoDetailTop;
