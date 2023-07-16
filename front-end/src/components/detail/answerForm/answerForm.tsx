"use client";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import Styles from "./answerForm.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import LoadingBackdrop from "@/components/common/loadingBackdrop";

const Button = styled.button`
  display: block;
  background-color: #a6d5ff;
  padding: 0.5em 0.5em;
  border-radius: 10px;
  color: white;
  border-color: lightgrey;
  border-width: 1.5px;
`;

type FormValues = {
  content: string;
  nickname: string;
  password: string;
};

const AnswerForm: React.FC<{
  questionId: number;
  default?: FormValues;
  answerID?: number;
  setReload: (state: boolean) => void;
}> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<FormValues>({ defaultValues: props?.default });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("" as string);

  const link = props.answerID
    ? `http://localhost:8000/v1/answer/${props.answerID}`
    : `http://localhost:8000/v1/answer`;

  const onSubmitHandler = (data: FormValues) => {
    setIsLoading(true);
    const postAnswer = async (data: FormValues) => {
      const payLoad = { ...data, questionId: props.questionId };
      axios
        .post(link, payLoad)
        .then((res) => {
          resetField("content");
          resetField("nickname");
          resetField("password");
          setIsLoading(false);
        })
        .then(() => {
          props.setReload(true);
        })
        .catch((error) => {
          if (error?.response?.data?.message) {
            setErrorMessage(error?.response?.data?.message);
          }
          setHasError(true);
          setIsLoading(false);
        });
    };
    postAnswer(data);
  };
  return (
    <div>
      <form
        className={Styles.mainContent}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className={Styles.content}>
          <TextField
            rows={5}
            multiline
            style={{
              width: "100%",
              height: "100%",
              margin: "5px 0",
              padding: "0",
            }}
            required
            placeholder="ex. Test EVERYTHING"
            {...register("content")}
            error={errors.content ? true : false}
          />
        </div>
        <div className={Styles.container}>
          <TextField
            size="small"
            style={{ margin: "5px 0" }}
            label="nickname"
            required
            {...register("nickname", {
              minLength: {
                value: 4,
                message: "The min length of password is 4",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "You can only use alphabet or number for password",
              },
            })}
            error={errors.nickname ? true : false}
            inputProps={{ pattern: "[a-zA-Z0-9]+" }}
          />
          <TextField
            type="password"
            size="small"
            style={{ margin: "5px 0" }}
            label="password"
            required
            inputProps={{ pattern: "[a-zA-Z0-9]+" }}
            {...register("password", {
              minLength: {
                value: 4,
                message: "The min length of password is 4",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "You can only use alphabet or number for password",
              },
            })}
            error={errors.password ? true : false}
          />
          <Button>
            <p>Post</p>
          </Button>
        </div>
      </form>
      <LoadingBackdrop
        hasError={hasError}
        setHasError={setHasError}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AnswerForm;
