"use client";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import Styles from "./answerForm.module.css";
import { useForm } from "react-hook-form";

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
  answerBody: string;
  nickname: string;
  password: string;
};

const AnswerForm: React.FC<{ questionId: number }> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmitHandler = (data: FormValues) => {
    console.log(data);
  };
  return (
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
          {...register("answerBody")}
          error={errors.answerBody ? true : false}
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
  );
};

export default AnswerForm;
