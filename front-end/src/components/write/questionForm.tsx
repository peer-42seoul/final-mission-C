import { FormControl, Input, InputAdornment, TextField } from "@mui/material";
import CategoryItem from "../category/categoryItem";
import { useState } from "react";
import { Categories } from "@/types/categories";
import Styles from "./questionForm.module.css";

const QuestionForm: React.FC = (props) => {
  const categories = Object.values(Categories);
  const [selected, setSelected] = useState("");

  return (
    <div className={Styles.questionContent}>
      <FormControl margin="normal" sx={{ m: 2, width: 0.85 }}>
        <Input
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
              <div className={Styles.categoryItem}>
                <CategoryItem
                  key={category}
                  selected={selected}
                  setSelected={setSelected}
                  categoryName={category}
                />
              </div>
            );
        })}
      </div>
      <FormControl margin="normal" sx={{ m: 1, width: 0.85 }}>
        <TextField
          multiline
          rows={10}
          style={{ height: "5em", fontSize: "1.1em" }}
          placeholder="ex. PLZ gimme any tips for minishell. I don't have any idea."
          id="standard-adornment-amount"
        />
      </FormControl>
    </div>
  );
};

export default QuestionForm;
