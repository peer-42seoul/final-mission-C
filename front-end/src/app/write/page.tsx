"use client";

import { FormControl, FormHelperText, TextField } from "@mui/material";
import Styles from "./page.module.css";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CategoryItemList from "@/components/category/categoryItemList";
import { useState } from "react";
import { Categories } from "@/types/categories";
import CategoryItem from "@/components/category/categoryItem";

export default function Page() {
  const [selected, setSelected] = useState("");
  const categories = Object.values(Categories);
  return (
    <div className={Styles.mainTread}>
      <div className={Styles.mainContent}>
        <h2>Write your question</h2>
        <div className={Styles.questionHead}>
          <FormControl margin="normal" sx={{ m: 2, width: 0.85 }}>
            <Input
              style={{ height: "30px", fontSize: "1.1em" }}
              placeholder="ex. Is there some tips for minishell?"
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Q.</InputAdornment>
              }
            />
          </FormControl>
          {/* <h3>Select your question's category</h3> */}
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
              rows={2}
              maxRows={2}
              style={{ height: "5em", fontSize: "1.1em" }}
              placeholder="ex. PLZ gimme any tips for minishell. I don't have any idea."
              id="standard-adornment-amount"
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
}
