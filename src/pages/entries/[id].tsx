import { NextPage } from "next";
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from "@mui/material";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { Layout } from "@/components/layouts";
import { EntryStatus } from "@/interfaces";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

const EntryPage: NextPage = () => {
  return (
    <Layout title={"..."}>
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} sm={8} md={6} sx={{ position: "relative" }}>
          <Card>
            <CardHeader title="Entry:" subheader={`Created minutes ago`} />
            <CardContent>
              <TextField
                sx={{ my: 1 }}
                fullWidth
                placeholder="New entry"
                autoFocus
                multiline
                label="New entry"
              />

              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      label={capitalize(option)}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<BookmarkAddOutlinedIcon />}
                variant="contained"
                fullWidth
              >
                Save
              </Button>
            </CardActions>
          </Card>

          <IconButton
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "error.main",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
            size="small"
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default EntryPage;
