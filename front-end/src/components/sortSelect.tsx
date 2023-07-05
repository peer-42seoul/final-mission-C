"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SortSelect: React.FC<{
  sort: string;
  setSort: (sort: string) => void;
}> = (props) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"latest"}
          label="Age"
          onChange={}
        >
          <MenuItem value={"latest"}>latest</MenuItem>
          <MenuItem value={"views"}>views</MenuItem>
          <MenuItem value={"recommend"}>recommend</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
