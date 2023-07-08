import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";

const SearchBox: React.FC<{
  searchTitle: string;
  setSearchTitle: (searchTitle: string) => void;
}> = (props) => {
  const [hasError, setHasError] = useState(false);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchTitle(event.target.value);
  };
  return (
    <div>
      <Box>
        <FormControl error={hasError} variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input
            id="component-simple"
            defaultValue=""
            onChange={onChangeHandler}
          />
          <FormHelperText id="component-helper-text">
            Put question title to search
          </FormHelperText>
        </FormControl>
      </Box>
    </div>
  );
};

export default SearchBox;
