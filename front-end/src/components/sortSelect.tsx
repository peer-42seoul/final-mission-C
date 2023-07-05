"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SortType } from "../types/sort";

const SortSelect: React.FC<{
  sort: string;
  setSort: (sort: string) => void;
}> = (props) => {
  const onChangeHandler = (event: SelectChangeEvent) => {
    props.setSort(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">sort</InputLabel>
        <Select value={props.sort} label="sort" onChange={onChangeHandler}>
          <MenuItem value={SortType.latest}>latest</MenuItem>
          <MenuItem value={SortType.views}>views</MenuItem>
          <MenuItem value={SortType.recommend}>recommend</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
