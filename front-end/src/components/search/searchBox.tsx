import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import Styles from "./searchBox.module.css";
import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  background-color: #a6d5ff;
  padding: 0.5em 0.5em;
  border-radius: 10px;
  color: white;
  border-color: lightgrey;
  border-width: 1.5px;
`;

const SearchBox: React.FC<{
  searchTitle: string;
  setSearchTitle: (searchTitle: string) => void;
}> = (props) => {
  const [hasError, setHasError] = useState(false);
  const [inputText, setInputText] = useState("");
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    if (event.target.value !== "" && hasError) {
      setHasError(false);
    }
  };
  const onSearchButtonClickHandler = (event: React.MouseEvent) => {
    if (inputText == "") {
      setHasError(true);
      return;
    }
    props.setSearchTitle(inputText);
    setInputText("");
  };

  const onViewAllButtonClickHandler = (event: React.MouseEvent) => {
    props.setSearchTitle("");
  };

  return (
    <div className={Styles.wrapper}>
      <Box>
        <h2>Search</h2>
        <FormControl
          error={hasError}
          variant="standard"
          className={Styles.searchBox}
        >
          <div>
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input
              id="component-simple"
              value={inputText}
              onChange={onChangeHandler}
            />
            <FormHelperText id="component-helper-text">
              Put question title to search
            </FormHelperText>
          </div>
          <Button
            onClick={onSearchButtonClickHandler}
            className={Styles.button}
          >
            search
          </Button>
        </FormControl>
      </Box>
      <div>
        <h4>Want to see all the questions?</h4>
        <Button onClick={onViewAllButtonClickHandler}>View All</Button>
      </div>
      <div>
        <h4>Can't find what you're curious about?</h4>
        <Button>Write a Question</Button>
      </div>
    </div>
  );
};

export default SearchBox;
