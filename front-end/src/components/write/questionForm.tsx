import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import CategoryItem from "../category/categoryItem";
import { useState } from "react";
import { Categories } from "@/types/categories";
import Styles from "./questionForm.module.css";
import { styled } from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ErrorType } from "@/types/error";

const Button = styled.button`
  display: block;
  background-color: #a6d5ff;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  color: white;
  border-color: lightgrey;
  border-width: 1.5px;
  height: 50px;
  width: 80px;
`;

type FormValue = {
  questionTitle: string;
  categories: string;
  questionBody: string;
  nickname: string;
  password: string;
};

const QuestionForm: React.FC = (props) => {
  const categories = Object.values(Categories);
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({} as ErrorType);
  const initialValues = {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data: FormValue) => {
    // data.preventDefault();
    setIsLoading(true);
    const fetchData = async (data: FormValue) => {
      const questionData = {
        type: "question",
        title: data.questionTitle,
        nickname: data.nickname,
        password: data.password,
        category: selected,
        content: data.questionBody,
        createdAt: new Date().toISOString(),
      };
      console.log(questionData);
      const res = await axios
        .post("http://localhost:8000/v1/question", questionData)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          return res;
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error.response.data);
          setIsLoading(false);
        });
    };
    if (!isLoading) {
      fetchData(data);
    }
  };

  return (
    <div>
      {!isLoading && (
        <form
          className={Styles.questionContent}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <FormControl
            margin="normal"
            style={{ borderTop: "1px lightgray solid", padding: "30px 0 0" }}
            sx={{ m: 2, width: 0.9 }}
          >
            <Input
              required
              style={{ height: "30px", fontSize: "1.1em" }}
              placeholder="ex. Is there some tips for minishell?"
              startAdornment={
                <InputAdornment position="start">Q.</InputAdornment>
              }
              {...register("questionTitle", {
                required: "Question title is required",
              })}
            />
          </FormControl>
          <div className={Styles.categoryList}>
            {categories.map((category) => {
              if (category !== "")
                return (
                  <div key={category} className={Styles.categoryItem}>
                    <CategoryItem
                      key={category}
                      selected={selected}
                      setSelected={setSelected}
                      categoryName={category}
                    />
                  </div>
                );
            })}
            <Input type="hidden" value={selected} {...register("categories")} />
          </div>
          <FormControl margin="normal" sx={{ m: 1, width: 0.9 }}>
            <TextField
              required
              multiline
              rows={10}
              style={{
                height: "100%",
                fontSize: "1.1em",
              }}
              placeholder="ex. PLZ gimme any tips for minishell. I don't have any idea."
              {...register("questionBody", {
                required: "Question body is required",
              })}
            />
          </FormControl>
          <div className={Styles.footer}>
            <div className={Styles.login}>
              <TextField
                required
                label="Nickname"
                size="small"
                placeholder="ex. peer"
                style={{ margin: "5px 0" }}
                {...register("nickname", {
                  required: "Nickname is required",
                  minLength: {
                    value: 4,
                    message: "The min length of password is 4",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "You can only use alphabet or number for password",
                  },
                })}
              />
              <TextField
                required
                label="Password"
                size="small"
                type="password"
                style={{ margin: "5px 0" }}
                {...register("password", { required: "Password is required" })}
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Post
            </Button>
          </div>
        </form>
      )}
      {isLoading && <h2>Loading</h2>}
    </div>
  );
};

export default QuestionForm;
