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

const QuestionForm: React.FC = (props) => {
  const categories = Object.values(Categories);
  const [selected, setSelected] = useState("");
  const initialValues = {
    questionTitle: "",
    categories: "",
    questionBody: "",
    nickname: "",
    password: "",
  };

  return (
    <form className={Styles.questionContent}>
      <FormControl
        margin="normal"
        style={{ borderTop: "1px lightgray solid", padding: "30px 0 0" }}
        sx={{ m: 2, width: 0.9 }}
      >
        <Input
          required
          name="questionTitle"
          style={{ height: "30px", fontSize: "1.1em" }}
          placeholder="ex. Is there some tips for minishell?"
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">Q.</InputAdornment>}
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
        <input type="hidden" name="category" />
      </div>
      <FormControl margin="normal" sx={{ m: 1, width: 0.9 }}>
        <TextField
          required
          name="questionBody"
          multiline
          rows={10}
          style={{
            height: "100%",
            fontSize: "1.1em",
          }}
          placeholder="ex. PLZ gimme any tips for minishell. I don't have any idea."
          id="standard-adornment-amount"
        />
      </FormControl>
      <div className={Styles.footer}>
        <div className={Styles.login}>
          <TextField
            required
            name="nickname"
            label="Nickname"
            size="small"
            placeholder="ex. peer"
            style={{ margin: "5px 0" }}
          />
          <TextField
            required
            name="password"
            label="Password"
            size="small"
            type="password"
            style={{ margin: "5px 0" }}
          />
        </div>
        <Button>Post</Button>
      </div>
    </form>
  );
};

export default QuestionForm;
