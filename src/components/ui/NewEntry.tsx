import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setInputValue("");
    setTouched(false);
  };

  return (
    <Box sx={{ mb: 1, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            sx={{ mb: 1 }}
            fullWidth
            placeholder="New entry"
            label="New entry"
            error={inputValue.length <= 0 && touched}
            size="small"
            autoFocus
            multiline
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              onClick={() => {
                setIsAddingEntry(false);
                setTouched(false);
              }}
            >
              Cancel
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<BookmarkAddOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Add task
        </Button>
      )}
    </Box>
  );
};
